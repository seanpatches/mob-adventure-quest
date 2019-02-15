import tally from './tally.js';

const totalHp = document.getElementById('total-hp');
const totalGold = document.getElementById('total-gold');

const json = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(json);

totalHp.textContent = userProfile.hp;
totalGold.textContent = userProfile.gold;

const scorecard = userProfile.scoreDaddy;

const scoreDisplay = document.getElementById('result-text');
scoreDisplay.textContent = tally(scorecard);

