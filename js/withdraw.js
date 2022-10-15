
//1. add even handler with withdraw button
//  2.get the withdraw amount from the withdraw input field
// 3. also make sure to convert the input into a number by parseFloat
// 2-5.get the withdraw total
// 4. calculate the widraw amount
// 4-5.get total withdraw amount
// 5 get the previous balance total
// 6.calculate new balance total 
// 6-5:set the new balance

// step 1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
// step 2:
    const withdrawField = document.getElementById('withdraw-field');
    const  newWithdrawAmountString = withdrawField.ariaValueMax;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);
    // step 3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString =withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // step 4:
    currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // step 5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBlanceTotalString = balanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);

    if (newWithdrawAmount > previousBlanceTotal){
        alert('baap er bank a taka nai');
        return;
    }
    // step 6
    const newBlanceTotal = previousBlanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBlanceTotal;
    // step 7:
    withdrawField.value = '';

})