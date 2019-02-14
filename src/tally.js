
function tally(scoreDaddy) {
    const fight = scoreDaddy.fight;
    const run = scoreDaddy.run;
    const talk = scoreDaddy.talk;

    let resultText = null;

    if(fight > run && fight > talk) {
        resultText = 'youre brave';
        return resultText;
    }
    if(run > talk && run > fight) {
        resultText = 'you bitch';
        return resultText;
    } 
    if(talk > run && talk > fight) {
        resultText = 'talky talky';
        return resultText;
    }
    if(fight === run || fight === talk || run === talk) {
        resultText = 'balance is key'; 
        return resultText;  
    }
    const result = document.getElementById('result-text');
    result.textContent = resultText;
}
    
export default tally;

