// LOGIN / SIGNUP FORM \\
function setFromMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`)
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector("form__input-error-message").textContent = message;
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#form");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");

    });   
        document.querySelector("#linkLogin").addEventListener("click", e => {
            e.preventDefault();
            loginForm.classList.remove("form--hidden");
            createAccountForm.classList.add("form--hidden");

    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();


        //preform login
        setFromMessage(loginForm, "error", "Invalid Response :( ");
    });
});

//*------- TRACKER -------*//
var i = 0;
var interval;

function move() {
        var elem = document.querySelector('.progress-bar');
        var width = 20;

        interval = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                clearInterval(interval);
                i = 0;
            }
            else{
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }

function updateProgressBar() {
    clearInterval(interval);
    var pagesRead = parseInt(document.querySelector(".pagesRead").value);
    var pageTotal = parseInt(document.querySelector(".pageTotal").value);

    if (!isNaN(pagesRead) && !isNaN(pageTotal)) {
        var percentage = (pagesRead / pageTotal) * 100;
        var elem = document.querySelector('.progress-bar');
        elem.style.width = percentage + "%";
        elem.innerHTML = percentage.toFixed(2) + "%";
        move()
    }
}
console.log()