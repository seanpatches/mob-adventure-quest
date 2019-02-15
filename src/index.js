const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

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
            'snake farm'
        ]
    };

    const json = JSON.stringify(userProfile);
    window.localStorage.setItem('userProfile', json);

    window.location = './display/map.html';
});