

document.getElementById('btn-addMoney').addEventListener('click',function(e){

    e.preventDefault()
    


    const bankName = document.getElementById('bank-name').value;


    const accountNumber = document.getElementById('account-no').value;

    const addAmount = parseInt(document.getElementById('add-amount').value);

    const addPin = document.getElementById('add-pin').value;
    
    const addBalance = parseInt(document.getElementById('balance').innerText);


    const tatalBalance = addAmount + addBalance;


    document.getElementById('balance').innerText = tatalBalance;
    
})