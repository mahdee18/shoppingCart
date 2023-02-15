// update phone Number
function getInputPhone(isIncreasing) {
    const phoneInput = document.getElementById('phone-input')
    const phoneInputString = phoneInput.value;
    const previousPhoneNumber = parseInt(phoneInputString);
    let newPhoneNumber;
    if (isIncreasing === true) {
        newPhoneNumber = previousPhoneNumber + 1
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1
    }
    phoneInput.value = newPhoneNumber;
    return newPhoneNumber;
}
// Phone price
function phonePrice(newPhoneNumber){
    const totalPhonePrice = newPhoneNumber * 1219;
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = totalPhonePrice

}


document.getElementById('phone-plus').addEventListener('click', function () {
    const newPhoneNumber = getInputPhone(true);
    phonePrice(newPhoneNumber)
    calculateSubTotal()

})
document.getElementById('phone-minus').addEventListener('click', function () {
   const newPhoneNumber = getInputPhone(false)
    phonePrice(newPhoneNumber)
    calculateSubTotal()
})