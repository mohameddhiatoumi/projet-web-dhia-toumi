document.getElementById('profile-pic').addEventListener('click', function() {
  document.getElementById('profile-pic-input').click();
});

document.getElementById('profile-pic-input').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          document.getElementById('profile-pic').src = e.target.result;
      };
      reader.readAsDataURL(file);
  }
});

document.getElementById('about-photo').addEventListener('click', function() {
  document.getElementById('about-photo-input').click();
});

document.getElementById('about-photo-input').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          document.getElementById('about-photo').src = e.target.result;
      };
      reader.readAsDataURL(file);
  }
});
document.getElementById("redirect-button").onclick = function() {
  window.location.href = "../portfolio/portfolio.html"; 
};


docudment.getElementById("clear-form-button").onclick = function() {
  const form = document.querySelector("form");
  form.reset(); 
};