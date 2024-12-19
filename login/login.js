const menuItems = document.querySelectorAll('.menu-item');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');


menuItems.forEach(item => {
  item.addEventListener('click', () => {
  
    menuItems.forEach(button => button.classList.remove('active'));

   
    item.classList.add('active');
  });
});


loginBtn.addEventListener('click', () => {
  loginForm.style.display = 'block';   
  registerForm.style.display = 'none'; 


  loginBtn.classList.add('active');
  registerBtn.classList.remove('active');

});


registerBtn.addEventListener('click', () => {
  loginForm.style.display = 'none';    
  registerForm.style.display = 'block'; 

 
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
});




function handleLogin(e) {
  e.preventDefault();
 
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  
 
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
      alert('Welcome to my website !');
      window.location.href = "../body/index.html";
     
  } else {
      alert('Invalid username or password. Please try again.');
  }
}

  


document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
      loginForm.addEventListener('submit', handleLogin);
  }
});


function handleRegister(e) {
  e.preventDefault();
  
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;   
  const email = document.getElementById('registerEmail').value;
  
  
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
 
  if (users.some(u => u.username === username)) {
      alert('Username already exists. Please choose a different one.');
      return;
  }
  if (users.some(u => u.email === email)) {
      alert('Email already registered. Please use a different email.');
      return;
  }
  

  users.push({ username, email, password });
  

  localStorage.setItem('users', JSON.stringify(users));
  
  alert('Registration successful! You can now log in.');
}


document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginForm) {
      loginForm.addEventListener('submit', handleLogin);
  }

  if (registerForm) {
      registerForm.addEventListener('submit', handleRegister);
  }
});
function clearLocalStorage() {
  if (confirm("Are you sure you want to clear all local storage? This will remove all user data.")) {
      localStorage.clear();
      alert("Local storage has been cleared.");
  }
}