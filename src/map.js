import displayYoInfoYo from './profile-display.js';

const json = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(json);

if(userProfile.unfinishedQuests.length === 0) {
    window.location = './results.html';
}
if(userProfile.hp <= 0) {
    //change to death page later
    window.location = './results.html';
}

displayYoInfoYo();

const questList = document.getElementById('quests');

const questType = userProfile.unfinishedQuests;

for(let i = 0; i < questType.length; i++) {
    const quest = questType[i];
    const a = document.createElement('a');
    a.href = './quest.html?quest=' + encodeURIComponent(quest);
    a.textContent = quest;
    a.id = quest;
    a.classList.add('quest-link');
    questList.appendChild(a);
}