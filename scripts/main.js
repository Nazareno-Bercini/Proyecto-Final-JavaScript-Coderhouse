document.addEventListener('DOMContentLoaded', function() {

    //declaro constantes para el formulario
    
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    const contrasena = document.getElementById('contrasena')
    const resgistro = document.getElementById('registro')
    const warnings = document.getElementById('warnings')

    form.addEventListener('submit', e =>{
        e.preventDefault()
        let warnings = ''
        let entrar = false
        let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        parrafo.innerHTML = ''
        if (nombre.value.length <= 7){
            warnings += 'El nombre debe tener mas de 6 caracteres <br>'
            entrar = true
        }
        if (!regexEmail.test(email.value)){
            warnings = 'Email no valido <br>'
            entrar = true
        }
        if (contrasena.value.lenght < 8){
            warnings += 'Contraseña no valida'
            entrar = true
        }
        if(entrar) {
            parrafo.innerHTML = warnings
        } else{
            parrafo.innerHTML = "Registrado"
        }

    })
    
    // cuando se pulsa en "agregar a favoritos"
document.getElementById("seleccion").addEventListener("click", function(e) {

    e.preventDefault();
  
    // leo el id del equipo y lo guardo en un objeto
    let datos = {
      id: document.getElementById('selec1', 'selec2', 'selec3', 'selec4').value,
    };
  
    // leo los favoritos del localStorage
    let favoritos = localStorage.getItem("favoritos") || "[]";
    favoritos = JSON.parse(favoritos);
  
    // busco el equipo en la lista de favoritos
    let posLista = favoritos.findIndex(function(e) { return e.id == datos.id; });
    if (posLista > -1) {
      // si está, lo quito
      favoritos.splice(posLista, 1);
    } else {
      // si no está, lo añado
      favoritos.push(datos);
    }
// guardo la lista de favoritos 
localStorage.setItem("favoritos", JSON.stringify(favoritos));

});  

    // declaro las constantes para el fixture
    
    const btnUno = document.getElementById('verResultado')
    const btnDos = document.getElementById('verResultadoDos')
    const btnTres = document.getElementById('verResultadoTres')
    const argentina = document.getElementById('arg1')
    const argentinaDos = document.getElementById('arg2')
    const argentinaTres = document.getElementById('arg3')
    const arabia = document.getElementById('arab1')
    const mexico = document.getElementById('mex2')
    const polonia = document.getElementById('pol3')
  
    btnUno.onclick = () =>{
      if(argentina.value > arabia.value){
        alert('Gano Argentina')
      } else{
        if (argentina.value == arabia.value){
          alert ('Empate')
        } else{
          if (argentina.value < arabia.value){
            alert ('Gano Arabia Saudita')
          }
        }
      }
    }
  
    btnDos.onclick = () =>{
      if(argentinaDos.value > mexico.value){
        alert('Gano Argentina')
      } else{
        if (argentinaDos.value == mexico.value){
          alert ('Empate')
        } else{
          if (argentinaDos.value < mexico.value){
            alert ('Gano Mexico')
          }
        }
      }
    }
  
    btnTres.onclick = () =>{
      if(argentinaTres.value > polonia.value){
        alert('Gano Argentina')
      } else{
        if (argentinaTres.value == polonia.value){
          alert ('Empate')
        } else{
          if (argentinaTres.value < polonia.value){
            alert ('Gano Polonia')
          }
        }
      }
    }


  
  }, false);   
