function getInputFieldById(inputFieldId){
    const inputFieldValue =document.getElementById(inputFieldId);
    const InputFieldString =inputFieldValue.value;
    const  inputField =parseFloat(InputFieldString);
    inputFieldValue.value ='';
    return inputField;
 }

 function getDepositValueById(elementId){
    const element =document.getElementById(elementId);
    const previousDepositString =element.innerText ;
    const previousDepositAmount =parseFloat(previousDepositString);
    return previousDepositAmount;
 }
 function setTextElementValue (elementId,newValue){
    const textElement =document.getElementById(elementId);
    textElement.innerText =newValue ;
 }
