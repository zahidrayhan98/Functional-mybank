// step -1 :add the event handler ///
//// step-2: get withdraw amount from function input parameter;
//// step-3:  get the previous withdraw amount from function parameter////
///// step-3 : get calculate the withdraw total /////
///step-4: set the value from function/////
//// step-5:get previous balance total from function////







 document.getElementById('btn-withdraw').addEventListener('click' , function(){

 const newWithdrawAmount =getInputFieldById('withdraw-field');
 const previousWithdrawAmount = getDepositValueById('withdraw-total');

 const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount ;
  

 setTextElementValue('withdraw-total', newWithdrawAmount);
 const previousBalanceAmount =getDepositValueById('balance-total');
 const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
  setTextElementValue('balance-total', newBalanceTotal);
  
 
 

 })