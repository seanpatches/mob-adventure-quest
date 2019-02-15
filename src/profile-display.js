// 
function displayYoInfoYo() {
    const userProfileDisplay = document.getElementById('user-profile-display');

    const json = window.localStorage.getItem('userProfile');
    const userProfile = JSON.parse(json);

    userProfileDisplay.textContent = userProfile.name + ' is ' + userProfile.class + ' and has ' + userProfile.hp + ' hp and ' + userProfile.gold + ' Gold';
}

export default displayYoInfoYo;