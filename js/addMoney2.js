

document.getElementById('btn-add-money').addEventListener('click', function(event){
      event.preventDefault();

      const addMoney = getInputFieldValueById('input-add-money')
      const pinNumber = getInputFieldValueById('input-pin-number')

      if (isNaN(addMoney)) {
         alert('Failed to add Money')
         return null;
      }

     if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance + addMoney;
            getBalanceByIdnewBalance('account-balance', newBalance)

            // 
            const p = document.createElement('p');
            p.innerText = `Added : ${addMoney} & New balance : ${newBalance} `;
            console.log(p)

            document.getElementById('transaction-containar').appendChild(p)
     }else{
        alert('Failed to add the Money')
     }
})