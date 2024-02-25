document.getElementById("maafButton").addEventListener("click", function() {
    var phoneNumber = "6281283031559";
    var message = "Aku mau jalan!! ayo ayaa";
  
    var whatsappURL = "whatsapp://send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
  
    window.location.href = whatsappURL;
  });
  