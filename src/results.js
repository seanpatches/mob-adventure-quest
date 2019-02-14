import tally from './tally.js';

const totalHp = document.getElementById('total-hp');
const totalGold = document.getElementById('total-gold');

const json = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(json);

totalHp.textContent = userProfile.hp;
totalGold.textContent = userProfile.gold;

console.log(userProfile.scoreDaddy);
tally(userProfile.scoreDaddy);
