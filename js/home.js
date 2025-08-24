
document.getElementById('log-Out').addEventListener('click',function(e){
    e.preventDefault()
    window.location.href = './index.html'
})



 const PinChack = 1234

document.getElementById('btn-addMoney').addEventListener('click',function(e){

    e.preventDefault()
    


    const bankName = document.getElementById('bank-name').value;


    const accountNumber = document.getElementById('account-no').value;

    const addAmount = parseInt(document.getElementById('add-amount').value);

    const addPin = parseInt(document.getElementById('add-pin').value);
    
    const addBalance = parseInt(document.getElementById('balance').innerText);

    if(accountNumber.length < 11){
        alert('Please 11 Digit Number')
        return;
    }else if ( accountNumber.length > 11){
        alert('Please 11 Digit No')
        return;
    }


    if(addPin != PinChack){
        alert('PIN Not Match')
        return;
    }
    const tatalBalance = addAmount + addBalance;


    document.getElementById('balance').innerText = tatalBalance;
    
});





document.getElementById('btn-add-money').addEventListener('click',function(e){
    e.preventDefault()

    document.getElementById('cash-out-parents').style.display = 'none';
    document.getElementById('add-money-parents').style.display = 'block';
})
document.getElementById('btn-cashout').addEventListener('click',function(e){
    e.preventDefault()

    document.getElementById('add-money-parents').style.display = 'none';
    document.getElementById('cash-out-parents').style.display = 'block';
})





