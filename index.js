const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formDaddy = new FormData(form);

    const userProfile = {
        name: formDaddy.get('name'),
        class: formDaddy.get('class'),
        hp: 50,
        gold: 0
    };

    const json = JSON.stringify(userProfile);
    window.localStorage.setItem('userProfile', json);

    window.location = './map.html';
});