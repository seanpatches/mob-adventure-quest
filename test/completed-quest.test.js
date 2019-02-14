const test = QUnit.test;

function findCompleted(){
    if completedQuests.cave
}


test('test if cave quest complete', function(assert) {
    // arrange
    const completedQuests = { cave: 1, snake: 0 };
    // act
    const result = findCompleted(completedQuests);
    
    // assert
    assert.equal(result, 'cave');
});