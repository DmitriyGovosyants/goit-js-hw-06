    const refs = {
        form: document.querySelector('.login-form'),
    }

    refs.form.addEventListener('submit', onFormSubmit);

    function onFormSubmit(event) {
        event.preventDefault();

        const {
            elements: { email, password }
        } = event.currentTarget;

        if (email.value === "" || password.value === "") {
            alert('All fields must be filled!!!');
        } else {
            const formData = new FormData(event.currentTarget);
            const loginFormData = {};

            formData.forEach((value, name) => {
                loginFormData[name] = value;
            });
            
            console.log(loginFormData);
        }

        event.currentTarget.reset();
    }

   