import questList from './quest-list.js';

const questTitle = document.getElementById('quest-title');
const questName = document.getElementById('quest-name');
const questImage = document.getElementById('quest-image');
const questStory = document.getElementById('quest-story');
const questChoices = document.getElementById('quest-choices');


questChoices.addEventListener('submit', function(event) {
    event.preventDefault();
});

console.log(questList[0].options[1]);