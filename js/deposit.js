 

document.getElementById('btn-deposit').addEventListener('click', function(){
    

    const newDepositAmount =getInputFieldById('deposit-field');
   
    const previousDepositValue =getDepositValueById('deposit-total');

    const newDepositTotalAmount = newDepositAmount + previousDepositValue;
    
    setTextElementValue('deposit-total',newDepositTotalAmount);

    const previousBalanceAmount =getDepositValueById('balance-total');
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
     setTextElementValue('balance-total',newBalanceTotal);

})