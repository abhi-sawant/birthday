const form = document.querySelector('.login');
const name = document.querySelector('#name');
const code = document.querySelector('#code');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Enter your username and passwords here

    if (name.value == 'User' && code.value == 'Password') {
        window.location = "./here.html";
    } else if (name.value == 'User1' && code.value == 'Password1') {
        window.location = "./here.html";
    } else if (name.value == 'User2' && code.value == 'Password2') {
        window.location = "./here.html";
    } else if (name.value == 'User3' && code.value == 'Password3') {
        window.location = "./here.html";
    } else {
        window.alert("Wrong Password. Use the 'Contact Us' link if you think your password is correct");
    }
}
);