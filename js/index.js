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
let isInvalid = []

const checkForCardNumberError = () => {
    if(isNaN(cardNumber.value) || cardNumber.value.includes(" ")){
        cardNumberError.textContent = "Wrong format, numbers only"
        console.log(cardNumberError.textContent)
        cardNumberError.classList.remove("hidden")
        isInvalid.push(false)
    }
    
    if(!cardNumber.value){
        cardNumberError.textContent = "Can't be blank"
        isInvalid.push(false)
    }

}

function checkForError(input, error, ){
    if(!input.value) {       
        error.classList.remove("hidden")
        input.classList.add("error-border")
        isInvalid.push(false)
    }
    else{
        error.classList.add("hidden")
        input.classList.remove("error-border")
    }
}

function checkForEmptyValue(input, defaultValue,  spaceOnCard){
    if(!input.value){
        spaceOnCard.textContent = defaultValue
    }
}

const checkForNan = (input, error, nanError, blankError) => {
    if(isNaN(input.value)){
        error.textContent = nanError
    }
    else{
        error.textContent = blankError;
    }
}


cardNumber.addEventListener('input', function(){
    if(cardNumber.value.length <= 16){
        let check = cardNumber.value.length <= 16
        let newcontent = ""
        if (check) newcontent = cardNumber.value.slice(0, 17)   
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
})

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
    checkForCardNumberError()
    if (!isInvalid.includes(false)) {
        form.classList.add("invisible")
        completedState.classList.remove("invisible")
    }
    isInvalid = []
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