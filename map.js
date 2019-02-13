import displayYoInfoYo from './profile-display.js';

displayYoInfoYo();

const questList = document.getElementById('quests');

const questType = [
    'Cave',
    'Snake farm'
];

for(let i = 0; i < questType.length; i++) {
    const quest =  questType[i];
    const a = document.createElement('a');
    a.href = './quest.html?quest=' + encodeURIComponent(quest);
    a.textContent = quest;
    a.classList.add('quest-link');
    questList.appendChild(a);
}