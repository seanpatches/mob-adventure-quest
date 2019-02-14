import questList from './quest-list.js';

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

        for(let i = 0; i < questOptions.length; i++) {
            const span = document.createElement('span');
            const label = document.createElement('label');
            span.textContent = questOptions[i].description;
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.value = questOptions[i].result;
            radio.name = 'options';
            label.appendChild(radio);
            label.appendChild(span);
            options.appendChild(label);
        }
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formDaddy = new FormData(form);
    const result = formDaddy.get('options');

    form.remove();
    
    description.textContent = result;
    
    
    


    // clear out form
    // display result (update HP and GOLD)
    // create button to send user back to map page
});

