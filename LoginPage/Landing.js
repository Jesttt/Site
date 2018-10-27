console.log('test');

const submit = () => {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
};

document
    .getElementById('login-link')
    .addEventListener('click', () => {
        console.log('click test');
        submit();
    });