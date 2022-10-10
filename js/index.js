const cardNumber = document.getElementById("card-number");
const cardNumberHolder = document.querySelector(".card-number-space");
const cardHolderName = document.getElementById("cardholder-name")
const cardName = document.querySelector(".card-name")
const cvc = document.querySelector(".cvc");
const cvcInput = document.getElementById("cvc-input")
const form = document.getElementById("form")
const month = document.getElementById("exp-month")
const year = document.getElementById("exp-year")
const expMonthSpace = document.querySelector(".month")
const expYearSpace = document.querySelector(".year")
const completedState = document.querySelector(".completed-state")
const submit = document.getElementById("submit")
const inputs = document.querySelectorAll("input")
let isInvalid = []

function checkForEmptyValue(input, defaultValue,  spaceOnCard){
    spaceOnCard.textContent = input.value
    if(!input.value){
        spaceOnCard.textContent = defaultValue
    }
}

const checkForStringError = (input) =>{
    if(!input.value || !isNaN(input.value)) {
        input.classList.add("error-border")
        isInvalid.push(false)
    }
    else{
        input.classList.remove("error-border")
    }
}

const checkForNanError = (input, requiredNumber) =>{
    if(isNaN(input.value) || !input.value || input.value.length < requiredNumber){
        input.classList.add("error-border")
        isInvalid.push(false)
    }
    else{
        input.classList.remove("error-border")
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
    checkForEmptyValue(cardHolderName, "Jane appleseed", cardName)
})

cvcInput.addEventListener("input", function(){
    checkForEmptyValue(cvcInput, "000", cvc)
})

month.addEventListener("input", function(){
    checkForEmptyValue(month, "00", expMonthSpace)
})

year.addEventListener("input", function(){
    checkForEmptyValue(year, "00", expYearSpace)
})


form.addEventListener("submit", function(e){
    e.preventDefault();
    checkForNanError(cardNumber, 15)
    checkForNanError(cvcInput, 2)
    checkForNanError(month, 1)
    checkForNanError(year, 1)
    checkForStringError(cardHolderName)
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