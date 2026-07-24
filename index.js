// selecting the form
const form = document.querySelector('.sign-up-form');
// selecting all input elements in the form with CSS selector of '.inputs'
const inputs = document.querySelectorAll('.inputs');

// Email validation form function
function isValidEmail(email){
    if(typeof email !== "string"){
        return false;
    }

    email = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', event =>{

    let isValid = true;

    inputs.forEach(input =>{
        const invalidEmail = input.type === 'email' && !isValidEmail(input.value);
        const message = input.nextElementSibling;

        if(input.value.trim() === '' || invalidEmail){
            input.classList.add('invalid');
            if(message && message.classList.contains('invalid-message')){
                message.classList.add('show');
            }
            isValid = false;
        } else {
            input.classList.remove('invalid');
            if(message && message.classList.contains('invalid-message')){
                message.classList.remove('show');
            }
        }
    })

    if(!isValid){
        event.preventDefault();
    }
});

