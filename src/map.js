import displayYoInfoYo from './profile-display.js';
import getData from './get-data.js';

const userProfile = getData();
makeLinks(userProfile);

// Checks if unfinished quests are removed from userProfile
if(userProfile.unfinishedQuests.length === 0) {
    window.location = './results.html';
}
// Checks if you died
if(userProfile.hp <= 0) {
    //change to death page later
    window.location = '../display/death.html';
}

displayYoInfoYo();


// Makes the links to the quests
function makeLinks(userProfile) {
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
}
