function show() {
   document.querySelector('.popup').classList.add('active');
}

function remove() {
   document.querySelector('.popup.active').classList.remove('active');
}

function login() {
   var mail = document.getElementById('email').value;
   var pass = document.getElementById('password').value;
   // console.log(mail +' '+ pass);
   if (mail == 'user@gmail.com' && pass == '1234') {
      document.querySelector('.popup .form .form-element p').style.color = 'green';
      document.querySelector('.popup .form .form-element p').innerHTML = 'Inicio de sesión exitoso';
   } else {
      document.querySelector('.popup .form .form-element p').style.color = 'red';
      document.querySelector('.popup .form .form-element p').innerHTML = 'Datos incorrectos';
   }
}