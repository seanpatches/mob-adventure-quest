import questList from './quest-list.js';
import displayYoInfoYo from './profile-display.js';

displayYoInfoYo();

const pageTitle = document.getElementById('page-title');
const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const options = document.getElementById('options');
const form = document.getElementById('form');

const search = window.location.search;
const searchParams = new URLSearchParams(search);

let questOptions = null;

const questUrl = searchParams.get('quest');

for(let i = 0; i < questList.length; i++) {
    const currentQuest = questList[i];
    
    if(currentQuest.id === questUrl) {
        description.textContent = currentQuest.description;
        pageTitle.textContent = currentQuest.title;
        title.textContent = currentQuest.title;
        image.src = currentQuest.image;
        
        questOptions = currentQuest.options;
        makeOptions(questOptions);
        break;
    }
}

const characterStatus = window.localStorage.getItem('userProfile');
const json = JSON.parse(characterStatus);

console.log(json);



form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formDaddy = new FormData(form);
    const optionId = formDaddy.get('options');

    for(let i = 0; i < questOptions.length; i++) {
        const currentOptionId = questOptions[i].id;
        
        if(currentOptionId === optionId) {
            description.textContent = questOptions[i].result;
            json.scoreDaddy[optionId]++;
            json.hp += questOptions[i].hp;
            json.gold += questOptions[i].gold;
            const characterStatusChange = JSON.stringify(json);
            window.localStorage.setItem('userProfile', characterStatusChange);
            displayYoInfoYo();
            break;
        } 
    }
    form.remove();
});


// Makes radio buttons for options
function makeOptions(questOptions) {
    for(let i = 0; i < questOptions.length; i++) {
        const span = document.createElement('span');
        const label = document.createElement('label');
        span.textContent = questOptions[i].description;
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.value = questOptions[i].id;
        radio.name = 'options';
        label.appendChild(radio);
        label.appendChild(span);
        options.appendChild(label);
    }
}

