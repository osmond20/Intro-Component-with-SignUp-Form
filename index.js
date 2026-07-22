// selecting the form
const form = document.querySelector('.sign-up-form');
// selecting all input elements in the form with CSS selector of '.inputs'
const input = document.querySelectorAll(".inputs");
// selecting the button with the CSS selector of '.claim-button'
const button = document.querySelector(".claim-button");

button.addEventListener("click", event => {
    event.preventDefault();
})

