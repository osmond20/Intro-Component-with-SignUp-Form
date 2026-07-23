// selecting the form
const form = document.querySelector('.sign-up-form');
// selecting all input elements in the form with CSS selector of '.inputs'
const inputs = document.querySelectorAll('.inputs');
// selecting the button with the CSS selector of '.claim-button'
const button = document.querySelector('.claim-button');

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
        if(input.value.trim() == '' || invalidEmail){
            input.classList.toggle('invalid');
            isValid = false;
        }
        else{
            input.classList.remove('invalid');
        }
    })

    if(!isValid){
        event.preventDefault();
    }
});

