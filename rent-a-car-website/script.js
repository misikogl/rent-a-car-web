$(document).ready(function(){
    $("#formId").submit(function(event){
      event.preventDefault();
      var formData = $(this).serialize();
  
      $.ajax({
        type: "POST",
        url: "submitForm.php",
        data: formData,
        success: function(response){
          console.log("Form başarıyla gönderildi: " + response);
        },
        error: function(){
          console.log("Form gönderimi başarısız.");
        }
      });
    });
  });
  
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var adres = document.getElementById('adres').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log('adres:', adres); 
    console.log('E-posta:', email);
    console.log('Şifre:', password);
});


function showTime() {
    var date = new Date();
    var hours = date.getHours(); // 0 - 23
    var minutes = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59

    var session = "AM";

    if(hours === 0){
        hours = 12;
    }

    if(hours > 12){
        hours = hours - 12;
        session = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var time = hours + ":" + minutes + ":" + seconds + " " + session;
    document.getElementById("liveClock").innerText = time;
    document.getElementById("liveClock").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();