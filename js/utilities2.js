

function getInputFieldValueById(id){
      const inputValue = document.getElementById(id).value;
      const inputNumber = parseFloat(inputValue)
      return inputNumber
}

function getTextFieldValueById(id){
      const textValue = document.getElementById(id).innerText;
      const textNumber = parseFloat(textValue);
      return textNumber;
}

function getBalanceByIdnewBalance(id, balance){
     return document.getElementById(id).innerText = balance
}

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transaction-section').classList.add('hidden')


    document.getElementById(id).classList.remove('hidden')
}