import tally from './tally.js';

const deathGold = document.getElementById('death-gold');
const deathHp = document.getElementById('death-hp');

const json = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(json);

deathGold.textContent = userProfile.gold;
deathHp.textContent = userProfile.hp;

const scorecard = userProfile.scoreDaddy;

const scoreDisplay = document.getElementById('result-text');
scoreDisplay.textContent = tally(scorecard);
