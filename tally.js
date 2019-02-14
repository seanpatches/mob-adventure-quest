
function tally(scoreDaddy) {
    const fight = scoreDaddy.fight;
    const run = scoreDaddy.run;
    const talk = scoreDaddy.talk;

    if(fight > run && fight > talk) {
        return 'fight result';
    }
    if(run > talk && run > fight) {
        return 'run result';
    } 
    if(talk > run && talk > fight) {
        return 'talk result';
    }
    if(fight === run || fight === talk || run === talk) {
        return 'equal result';   
    }
}

export default tally;

