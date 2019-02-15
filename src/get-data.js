function getData() {
    const json = window.localStorage.getItem('userProfile');
    const userProfile = JSON.parse(json);
    return userProfile;
}
export default getData;
