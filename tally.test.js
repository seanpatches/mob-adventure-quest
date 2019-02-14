test('if fight is the greatest value in Scoredaddy, show fight result', function(assert){
    //arrange
    const scoreDaddy = { fight: 1, run: 0, talk: 0 };

    //act
    const showResult = tally(scoreDaddy);
    //assert
    assert.equal(showResult, 'fight result');
}
);

test('if run is the greatest value in Scoredaddy, show run result', function(assert){
    const scoreDaddy = { fight: 0, run: 1, talk: 0 };
    const showResult = tally(scoreDaddy);
    assert.equal(showResult, 'run result');
}
);

test('if talk is the greatest value in Scoredaddy, show talk result', function(assert){
    const scoreDaddy = { fight: 0, run: 0, talk: 1 };
    const showResult = tally(scoreDaddy);
    assert.equal(showResult, 'talk result');
}
);

test('if two are equal, return equal result', function(assert){
    const scoreDaddy = { fight: 1, run: 2, talk: 2 };
    const showResult = tally(scoreDaddy);
    assert.equal(showResult, 'equal result');
});
