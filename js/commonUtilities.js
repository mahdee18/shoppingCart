function getElementValue(elementId){
    const totalElement = document.getElementById(elementId)
    const totalElementString = totalElement.innerText;
    const currentElement = parseInt(totalElementString)
    return currentElement;
}
// Set element value
function setElementValue(elementId,value){
    const subTotalElement = document.getElementById(elementId)
    subTotalElement.innerText = value;
}
function calculateSubTotal(){
    // Calculate Balance
    const phoneCurrentElement = getElementValue('phone-total')
    const caseCurrentElement = getElementValue('case-total')
    const currentSubtotal = phoneCurrentElement+caseCurrentElement;
    setElementValue('sub-total',currentSubtotal)

    // Calculate tax
    const taxAmount = currentSubtotal * 0.1;
    setElementValue('tax',taxAmount.toFixed(2))

    // Final Amount
    const finalAmount = currentSubtotal+taxAmount;
    setElementValue('total',finalAmount);
}