import questList from './quest-list.js';
import displayYoInfoYo from './profile-display.js';

displayYoInfoYo();

const pageTitle = document.getElementById('page-title');
const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const options = document.getElementById('options');
const audio = document.getElementById('audio');
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
        audio.src = currentQuest.audio;
        
        questOptions = currentQuest.options;
        makeOptions(questOptions);
        delete questList[i];
        break;
    }
}

const json = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(json);

const unfinishedQuests = userProfile.unfinishedQuests;
for(let i = 0; i < unfinishedQuests.length; i++) {
    if(unfinishedQuests[i] === questUrl) {
        userProfile.unfinishedQuests.splice(i, 1);
    }
}



form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formDaddy = new FormData(form);
    const optionId = formDaddy.get('options');

    for(let i = 0; i < questOptions.length; i++) {
        const currentOptionId = questOptions[i].id;
        
        if(currentOptionId === optionId) {
            description.textContent = questOptions[i].result;
            userProfile.scoreDaddy[optionId]++;
            userProfile.hp += questOptions[i].hp;
            userProfile.gold += questOptions[i].gold;
            const characterStatusChange = JSON.stringify(userProfile);
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

