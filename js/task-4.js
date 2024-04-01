const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, event => {
    event.preventDefault();
    const targeting = event.target;
    const userEmail = targeting.elements.email.value.trim();
    const userPassword = targeting.elements.password.value.trim();
if (userEmail===""||userPassword==="") {
    alert('All form fields must be filled in');
        return;
}

    const result = {
        email: userEmail,
        password: userPassword
    };

    console.log(result);

    form.reset();
})
