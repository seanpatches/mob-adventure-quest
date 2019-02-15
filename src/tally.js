
function tally(scoreDaddy) {
    const fight = scoreDaddy.fight;
    const run = scoreDaddy.run;
    const talk = scoreDaddy.talk;

    let resultText = null;

    if(fight > run && fight > talk) {
        resultText = 'You fought with unparalleled strength and courage. You smote all of your foes and left with their loot.';
        return resultText;
    }
    if(run > talk && run > fight) {
        resultText = 'Craven coward...';
        return resultText;
    } 
    if(talk > run && talk > fight) {
        resultText = 'You silver tongued devil, you gabbed your way into everyone\'s pockets';
        return resultText;
    }
    if(fight === run || fight === talk || run === talk) {
        resultText = 'It\'s hard to pin you down. Wave that white flag, you son of a gun.'; 
        return resultText;  
    }
    const result = document.getElementById('result-text');
    result.textContent = resultText;
}
    
export default tally;

