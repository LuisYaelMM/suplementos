const nombre = document.getElementById("exampleInputName")
const email = document.getElementById("exampleInputEmail1")
const pass = document.getElementById("exampleInputPassword1")
const form = document.getElementById("form1")

form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings=""
    let entrar = false
    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.ariaValueMax.length<6){
        warnings += `El nombre no es valido <br>`
    }
})