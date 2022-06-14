function validateForm(form) {
   let email = document.forms["myForm"]["email"].value;
   let pass = document.forms["myForm"]["password"].value;
   if (email == "" || pass == '') {
      alert("Correo o contraseña faltante");
      return false;
   } else{
      form.action = "Index.html";
   }
}