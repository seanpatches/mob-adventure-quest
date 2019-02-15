const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const userProfile = makeProfile(form);
    storeData(userProfile);
    window.location = './display/map.html';
});

// Creates the profile 
function makeProfile(form) {
    const formDaddy = new FormData(form);
    const userProfile = {
        name: formDaddy.get('name'),
        class: formDaddy.get('class'),
        hp: 50,
        gold: 0,
        scoreDaddy: {
            run: 0,
            talk: 0,
            fight: 0
        },
        unfinishedQuests: [
            'cave',
            'snake farm',
            'the black sea'
        ]
    };
    // Return because we still need this object
    return userProfile;
}

// Puts userProfile into local storage
function storeData(userProfile) {
    const json = JSON.stringify(userProfile);
    window.localStorage.setItem('userProfile', json);
}