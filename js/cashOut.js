
document.getElementById('btn-cash-out').addEventListener('click', function(event){
      event.preventDefault()
      const cashOutAmount = getInputFieldValueById('input-cash-out')
      const pinNumber = getInputFieldValueById('input-pin-cash-out')  

      console.log('cash out amount:', cashOutAmount)

      if (isNaN(cashOutAmount)) {
            alert('Money can not cash out')
            return null
      }

      if (pinNumber === 1234) {

      
            const balance = getTextFieldValueById('account-balance')

            if (cashOutAmount > balance) {
                  alert('Failed to cash Out');
                  return null
            }

            const newBalance = balance - cashOutAmount
            getBalanceByIdnewBalance('account-balance', newBalance)

            // add to transaction

            const div = document.createElement('div')
            div.classList.add('bg-blue-300')
            div.innerHTML = `
                  <h3 class='text-xl text-center font-bold'>Cash Out</h3>
                  <p>${cashOutAmount} : Money Withdraw. new balance: ${newBalance}</p>
            `;
            document.getElementById('transaction-containar').appendChild(div)
      }else{
            alert('pls try again')
      }
})