const cardNumber = document.getElementById("card-number");
const cardNumberHolder = document.querySelector(".card-number-space");
const cardHolderName = document.getElementById("cardholder-name")
const cardName = document.querySelector(".card-name")
const cardNameError = document.querySelector(".cardholder-name-error")
const cvc = document.querySelector(".cvc");
const cvcInput = document.getElementById("cvc-input")
const cvcError = document.querySelector(".cvc-error")
const cardNumberError = document.querySelector(".card-number-error")
const form = document.getElementById("form")
const month = document.getElementById("exp-month")
const year = document.getElementById("exp-year")
const expMonthSpace = document.querySelector(".month")
const expYearSpace = document.querySelector(".year")
const expError = document.querySelector(".exp-error")
const completedState = document.querySelector(".completed-state")
const submit = document.getElementById("submit")
const inputs = document.querySelectorAll("input")
const error = document.querySelectorAll(".error")
let isInvalid = false;

cardNumber.addEventListener('input', function(){
    if(cardNumber.value.length <= 16){
        let check = cardNumber.value.length <= 16
        let newcontent = ""
        if (check) {
            newcontent = cardNumber.value.slice(0, 17)   
        }
        let spacedValue = ""
        if(cardNumber.value.length == 0) spacedValue = "0000 0000 0000 0000"
        for (let i = 0; i < newcontent.length; i++) {
            spacedValue += newcontent.charAt(i)
            if((i+1)%4 == 0){
                spacedValue += " "
            }
        }
        cardNumberHolder.textContent = spacedValue;
    }

    if(isNaN(cardNumber.value)) cardNumberError.textContent = "Wrong format, numbers only"
})

function checkForError(input, error, ){
    if(!input.value) {       
        error.classList.remove("hidden")
        input.classList.add("error-border")
        isInvalid = true;
    }
    else{
        error.classList.add("hidden")
        input.classList.remove("error-border")
        isInvalid = false;

    }
}

function checkForEmptyValue(input, defaultValue,  spaceOnCard){
    if(input.value == ""){
        spaceOnCard.textContent = defaultValue
    }
}

cardHolderName.addEventListener('input', function(){
    cardName.textContent = cardHolderName.value
    checkForEmptyValue(cardHolderName, "Jane appleseed", cardName)
})

cvcInput.addEventListener("input", function(){
    cvc.textContent = cvcInput.value
    checkForEmptyValue(cvcInput, "000", cvc)
    
})

month.addEventListener("input", function(){
    expMonthSpace.textContent = month.value
    checkForEmptyValue(month, "00", expMonthSpace)
})

year.addEventListener("input", function(){
    expYearSpace.textContent = year.value
    checkForEmptyValue(year, "00", expYearSpace)
})

form.addEventListener("submit", function(e){
    e.preventDefault();
    checkForError(cvcInput, cvcError) 
    checkForError(cardNumber, cardNumberError)
    checkForError(year, expError)
    checkForError(month, expError)
    checkForError(cardHolderName, cardNameError)
    if (!isInvalid) {
        form.classList.add("invisible")
        completedState.classList.remove("invisible")
    }

})

submit.addEventListener("click", ()=>{
    form.reset()
    cvc.textContent = "000"
    cardName.textContent = "Jane Appleseed"
    expMonthSpace.textContent = "00"
    expYearSpace.textContent = "00"
    cardNumberHolder.textContent = "0000 0000 0000 0000"
    form.classList.remove("invisible")
    completedState.classList.add("invisible")
})