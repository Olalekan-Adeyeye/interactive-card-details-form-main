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
    if(cardNumber.value.charAt(0) == " "){
        cardNumberHolder.textContent = "0000 0000 0000 0000"
        return
    }

    if(isNaN(cardNumber.value)){
        cardNumberError.textContent = "Wrong format, numbers only"
        cardNumberError.classList.remove('hidden')
        cardNumber.classList.add("error-border")
        if(isNaN(cardNumber.value)) return
    }
    else{
        cardNumberError.textContent = "Can't be blank"
        checkForError(cardNumberHolder, cardNumber, cardNumberError, "0000 0000 0000 0000")
    }

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
})

function checkForError(spaceOnCard, input, error, defaultValue){
    if(!input.value) {
        spaceOnCard.textContent = defaultValue
        error.classList.remove("hidden")
        input.classList.add("error-border")
        isInvalid = true;
    }
    else{
        error.classList.add("hidden")
        input.classList.remove("error-border")
        spaceOnCard.textContent = input.value
        isInvalid = false;
    }
}

cardHolderName.addEventListener('input', function(){
    cardName.textContent = cardHolderName.value
})

cvcInput.addEventListener("input", function(){
    if(isNaN(cvcInput.value))
    cvcInput.textContent = cvc.value
    
})

month.addEventListener("input", function(){
    if(isNaN(month.value))
    expMonthSpace.textContent = month.value
})

year.addEventListener("input", function(){
    if(isNaN(month.value))
    year.textContent = expYearSpace.value
})

form.addEventListener("submit", function(e){
    e.preventDefault()
    checkForError(expYearSpace, year, expError, '00')
    checkForError(expMonthSpace, month, expError, "00")
    checkForError(cardName, cardHolderName, cardNameError, "jane appleseed")
    checkForError(cvc, cvcInput, cvcError, "000") 
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


// //const cardNumber = document.getElementById("card-number");
// const cardNumberHolder = document.querySelector(".card-number-space");
// const cardHolderName = document.getElementById("cardholder-name")
// const cardName = document.querySelector(".card-name")
// const cardNameError = document.querySelector(".cardholder-name-error")
// const cvc = document.querySelector(".cvc");
// const cvcInput = document.getElementById("cvc-input")
// const cvcError = document.querySelector(".cvc-error")
// const cardNumberError = document.querySelector(".card-number-error")
// const form = document.getElementById("form")
// const month = document.getElementById("exp-month")
// const year = document.getElementById("exp-year")
// const expMonthSpace = document.querySelector(".month")
// const expYearSpace = document.querySelector(".year")
// const expError = document.querySelector(".exp-error")
// const completedState = document.querySelector(".completed-state")
// const submit = document.getElementById("submit")
// const inputs = document.querySelectorAll("input")
// const error = document.querySelectorAll(".error")
// let isInvalid = false;

// cardNumber.addEventListener('input', function(){
//     if(cardNumber.value.charAt(0) == " "){
//         cardNumberHolder.textContent = "0000 0000 0000 0000"
//         return
//     }

//     if(isNaN(cardNumber.value)){
//         cardNumberError.textContent = "Wrong format, numbers only"
//         cardNumberError.classList.remove('hidden')
//         cardNumber.classList.add("error-border")
//         if(isNaN(cardNumber.value)) return
//     }
//     else{
//         cardNumberError.textContent = "Can't be blank"
//         checkForError(cardNumberHolder, cardNumber, cardNumberError, "0000 0000 0000 0000")
//     }

//     if(cardNumber.value.length <= 16){
//         let check = cardNumber.value.length <= 16
//         let newcontent = ""
//         if (check) {
//             newcontent = cardNumber.value.slice(0, 17)   
//         }
//         let spacedValue = ""
//         if(cardNumber.value.length == 0) spacedValue = "0000 0000 0000 0000"
//         for (let i = 0; i < newcontent.length; i++) {
//             spacedValue += newcontent.charAt(i)
//             if((i+1)%4 == 0){
//                 spacedValue += " "
//             }
//         }
//         cardNumberHolder.textContent = spacedValue;
//     }
// })

// function checkForError(spaceOnCard, input, error, defaultValue){
//     if(!input.value) {
//         spaceOnCard.textContent = defaultValue
//         error.classList.remove("hidden")
//         input.classList.add("error-border")
//         isInvalid = true;
//     }
//     else{
//         error.classList.add("hidden")
//         input.classList.remove("error-border")
//         spaceOnCard.textContent = input.value
//         isInvalid = false;
//     }
// }

// form.addEventListener("submit", function(e){

//     }
    

// })

// submit.addEventListener("click", ()=>{
//     form.reset()
//     cvc.textContent = "000"
//     cardName.textContent = "Jane Appleseed"
//     expMonthSpace.textContent = "00"
//     expYearSpace.textContent = "00"
//     cardNumberHolder.textContent = "0000 0000 0000 0000"
//     form.classList.remove("invisible")
//     completedState.classList.add("invisible")
// })


