document.addEventListener('DOMContentLoaded', function() {

    //declaro constantes para el formulario
    
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    const contrasena = document.getElementById('contrasena')
    const form = document.getElementById('registro')
    const warnings = document.getElementById('warnings')

    form.addEventListener('submit', e =>{
        e.preventDefault()
        let warnings = ''
        let entrar = false
        let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        warnings.innerHTML = ''
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
            warnings.innerHTML = warnings
        } else{
            warnings.innerHTML = "Registrado"
        }

    })
    let boton = document.getElementById('botonform')
    boton.addEventListener('click',()=>{

      
      Swal.fire({
        title: 'Confirmar registro',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero registrarme'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Registrado!',
            'Bienvenido a nuestra pagina.',
            'success'
          )
        }
      })
    
    })
      


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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Argentina gano. Se lleva los 3 puntos',
          showConfirmButton: false,
          timer: 2000
        })
      } else{
        if (argentina.value == arabia.value){
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Argentina empato. Se lleva 1 punto',
            showConfirmButton: false,
            timer: 2000
          })
        } else{
          if (argentina.value < arabia.value){
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Argentina perdio. No se lleva ningun punto',
              showConfirmButton: false,
              timer: 2000
            })
          }
        }
      }
    }
  
    btnDos.onclick = () =>{
      if(argentinaDos.value > mexico.value){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Argentina gano. Se lleva los 3 puntos',
          showConfirmButton: false,
          timer: 2000
        })
      } else{
        if (argentinaDos.value == mexico.value){
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Argentina empato. Se lleva 1 punto',
            showConfirmButton: false,
            timer: 2000
          })
        } else{
          if (argentinaDos.value < mexico.value){
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Argentina perdio. No se lleva ningun punto',
              showConfirmButton: false,
              timer: 2000
            })
          }
        }
      }
    }
  
    btnTres.onclick = () =>{
      if(argentinaTres.value > polonia.value){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Argentina gano. Se lleva los 3 puntos',
          showConfirmButton: false,
          timer: 2000
        })
      } else{
        if (argentinaTres.value == polonia.value){
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Argentina empato. Se lleva 1 punto',
            showConfirmButton: false,
            timer: 2000
          })
        } else{
          if (argentinaTres.value < polonia.value){
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Argentina perdio. No se lleva ningun punto',
              showConfirmButton: false,
              timer: 2000
            })
          }
        }
      }
    }
  

  
  }, false);   
