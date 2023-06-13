//NAME


const cardName = document.getElementById("card-front-info-name");
const cardNameInput = document.getElementById("card-name-input");
const nameError = document.getElementById("name-error");
let nameValidation = false


cardNameInput.addEventListener("input", function () {
    if (/[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(cardNameInput.value)) {
        cardName.innerText = cardNameInput.value;
        cardNameInput.classList.remove(`error`);
        nameError.innerText = ``;
        nameValidation = true
    } else if (cardNameInput.value !== ``) {
        cardName.innerText = "JANE APPLESEED"
        nameValidation = false
        cardNameInput.classList.add(`error`)
        nameError.innerText = `Wrong format`
    }


    else if (cardNameInput.value == "") {
        cardName.innerText = "JANE APPLESEED"
        cardNameInput.classList.remove(`error`);
        nameError.innerText = ``;

        nameValidation = false
    }
})

cardNameInput.addEventListener("blur", function () {
    if (cardNameInput.value == "") {
        nameError.innerText = "Can't be blank";
        cardNameInput.classList.add("error");
        cardName.innerText = "JANE APPLESEED"
        nameValidation = false
    }
})

//CARD NUMBER
const cardNumber = document.getElementById("card-front-number");
const numberError = document.getElementById("number-error");
const cardNumberInput = document.getElementById("card-number-input");
let numberValidation = false;

cardNumberInput.addEventListener("input", function () {
    let newCardNumber = cardNumberInput.value.replace(/\s/g, ``).replace(/(\d{4})/g, `$1 `).trim();
    cardNumberInput.value = newCardNumber

    if (/[^0-9\s]/.test(cardNumberInput.value)) {
        numberError.innerHTML = "Wrong format, numbers only";
        cardNumberInput.classList.add("error")
        cardNumber.innerText = "0000 0000 0000 0000"
        numberValidation = false
    } else if (cardNumberInput.value !== "") {
        numberError.innerHTML = "";
        cardNumberInput.classList.remove("error");
        cardNumber.innerText = cardNumberInput.value;
        numberValidation = true

    }
    if (cardNumberInput.value == "") {
        cardNumber.innerText = "0000 0000 0000 0000";
        cardNumberInput.classList.remove("error");
        numberError.innerHTML = "";
        numberValidation = false
    }
})
cardNumberInput.addEventListener("blur", function () {
    if (cardNumberInput.value == "") {
        numberError.innerText = "Can't be blank";
        cardNumberInput.classList.add("error");
        numberValidation = false

    }
})

//CVC
const cvcInput = document.getElementById("cvc-input");
const cvcError = document.getElementById("cvc-error");
const cardCvc = document.getElementById("card-back-cvc");
let cvcValidation = false

cvcInput.addEventListener("input", function () {
    if (isNaN(cvcInput.value)) {
        cvcError.innerHTML = "Wrong format, numbers only";
        cvcInput.classList.add("error");
        cardCvc.innerHTML = "000";
        cvcValidation = false
    } else {
        cvcError.innerHTML = "";
        cvcInput.classList.remove("error");
        cardCvc.innerText = cvcInput.value;
        cvcValidation = true;
        if (cvcInput.value == "") {
            cardCvc.innerText = "000"
            cvcValidation = false
        }

    }
    if ((nameValidation === true) && (numberValidation === true) && (cvcValidation === true) && (monthValidation === true) && (yearValidation === true)) {
        confirmButton.disabled = false
    } else {
        confirmButton.disabled = true
    }
})


cvcInput.addEventListener("blur", function () {
    if (cvcInput.value == "") {
        cvcError.innerText = "Can't be blank";
        cvcInput.classList.add("error")
        cvcValidation = false

    }



})
//MONTH


const monthInput = document.getElementById("exp-date-month");
const monthError = document.getElementById("exp-month-error");
const cardMonth = document.getElementById("card-front-info-month");
let monthValidation = false


monthInput.addEventListener("input", function () {
    if (isNaN(monthInput.value)) {
        monthError.innerHTML = "Wrong format, numbers only";
        monthInput.classList.add("error");
        monthValidation = false


    } else {
        monthError.innerHTML = "";
        monthInput.classList.remove("error");
        cardMonth.innerText = monthInput.value;
        monthValidation = true

        if (monthInput.value == "") {
            cardMonth.innerText = "00"
            monthValidation = false

        }
    }
})

monthInput.addEventListener("blur", function () {
    if (monthInput.value == "") {
        monthError.innerText = "Can't be blank";
        monthInput.classList.add("error");
        monthValidation = false

    }
})

//YEAR  
const yearInput = document.getElementById("exp-date-year");
const yearError = document.getElementById("exp-year-error");
const cardYear = document.getElementById("card-front-info-year");
let yearValidation = false

yearInput.addEventListener("input", function () {
    if (isNaN(yearInput.value)) {
        yearError.innerHTML = "Wrong format, numbers only";
        yearInput.classList.add("error");
        cardYear.innerText = "00";
        yearValidation = false;
    } else {
        yearError.innerText = "";
        yearInput.classList.remove("error");
        cardYear.innerText = yearInput.value;
        yearValidation = true;
        if (yearInput.value == "") {
            cardYear.innerText = "00";
            yearValidation = false;
        }
    }
})
yearInput.addEventListener("blur", function () {
    if (yearInput.value == "") {
        yearError.innerText = "Can't be blank";
        yearInput.classList.add("error");
        yearValidation = false;
    }
})

//CONFIRM
const confirmButton = document.getElementById("confirm");

const complete = document.getElementById(`complete`);
const form = document.getElementById(`form`);

confirmButton.addEventListener(`click`, () => {

    complete.style.display = `flex`
    form.style.display = `none`
})

//CONTINUE
let continueButton = document.getElementById(`continue`)

continueButton.addEventListener(`click`, () => {
    location.reload()
})