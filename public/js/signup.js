const signupFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#firstname').value.trim();
    const last_name = document.querySelector('#lastname').value.trim();
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const owner = document.querySelector('#owner').value.trim();
    let is_owner;

    if (owner === 'Y') {
        is_owner = true;
    } else { 
        is_owner = false;
    }

    if (email && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, username, email, password, phone, is_owner }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

