import displayYoInfoYo from './profile-display.js';

const json = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(json);

if(userProfile.hp <= 0) {
    window.location = './results.html';
}

displayYoInfoYo();

const questList = document.getElementById('quests');

const questType = [
    'cave',
    'snake farm'
];

for(let i = 0; i < questType.length; i++) {
    const quest =  questType[i];
    const a = document.createElement('a');
    a.href = './quest.html?quest=' + encodeURIComponent(quest);
    a.textContent = quest;
    a.classList.add('quest-link');
    questList.appendChild(a);
}