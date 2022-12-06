///validacion delo nombre
const nombre= document.getElementsByClassName("cuadnom");

const mail = document.getElementsByClassName("mail");

const listo  = document.getElementsByClassName("terminos");

const form = document.getElementsByName("form");

const advertencia = document.getElementById("warnings");



form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings=" ";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length <3){
       warnings += `El nombre es muy corto`;
       entrar = true;
    }
    if (!regexEmail.test(mail.value)) {
        warnings += `El correo electronico no es valido`;
        entrar=true;
    }
    if (entrar) {
        advertencia.innerHTML=warnings;
    }else{
        advertencia.innerHTML="Enviado";
    }
});


//validacion del check de termino
$('form').submit(function(e){
    
    if ($('input[type=checkbox]:checked').length === 0) {
        e.preventDefault();
        alert('Tienes que aceptar nuestros Terminos y condiciones');
    }
});