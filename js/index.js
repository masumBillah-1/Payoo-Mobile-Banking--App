// loging button functionality

document.getElementById('btn-login').addEventListener('click',function(e){
    e.preventDefault();
     document.getElementById('spinner').classList.remove('hidden');

  // চাইলে কিছু সময় পর স্পিনার লুকানোও যাবে
  setTimeout(() => {
    document.getElementById('spinner').classList.add('hidden');
  }, 3000);

    const mobileNumber = 17801325170
    const pinNumber = 1234


    const mobileNomberValue = document.getElementById('input-mobile').value

    const mobileNomberConvert = parseInt(mobileNomberValue);



    const pinNumberValue = document.getElementById('input-pin').value

    const pinValueConvert = parseInt(pinNumberValue);

   
    if(mobileNomberConvert === mobileNumber && pinValueConvert === pinNumber){
        window.location.href="home.html"
    }else{
        alert('Not Match')
    }










   
})



