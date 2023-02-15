// Get Case Number
function getInput(isIncreasing) {
    const caseInput = document.getElementById('case-input')
    const caseInputString = caseInput.value;
    const previousCaseNumber = parseInt(caseInputString)
    let newCaseNumber;

    if (isIncreasing === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseInput.value = newCaseNumber;

    return newCaseNumber
}
// Get Case Price
function casePrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59
    const caseTotal = document.getElementById('case-total')
    caseTotal.innerText = caseTotalPrice;
}
// For increase
document.getElementById('case-plus').addEventListener('click', function () {
    const newCaseNumber = getInput(true)
    casePrice(newCaseNumber)
    calculateSubTotal()
    
})
// For Decrease
document.getElementById('case-minus').addEventListener('click', function () {
    const newCaseNumber = getInput(false)
    casePrice(newCaseNumber)
    calculateSubTotal()

})