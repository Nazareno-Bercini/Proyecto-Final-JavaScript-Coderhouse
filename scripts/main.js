document.addEventListener('DOMContentLoaded', function () {


  

  //declaro constantes para el formulario

  const nombre = document.getElementById('nombre')
  const email = document.getElementById('email')
  const contrasena = document.getElementById('contrasena')
  const form = document.getElementById('registro')
  const cartel = document.getElementById('warnings')

  form.addEventListener('submit', e => {
    e.preventDefault()
    let warnings = ''
    let entrar = false

    // caracteres para validar un email
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    warnings.innerHTML = ''

    // validacion de nombre
    if (nombre.value.length < 6) {
      warnings += 'El nombre debe tener mas de 6 caracteres <br>'
      entrar = true

      //guardo el nombre en el LocalStorage
      localStorage.setItem('nombre', nombre)
    }

    //validacion de email
    if (!regexEmail.test(email.value)) {
      warnings = 'Email no valido <br>'
      entrar = true

      //guardo el email en el LocalStorage
      localStorage.setItem('email', email)
    }

    //validacion de contraseña
    if (contrasena.value.lenght < 8) {
      warnings += 'Contraseña debe tener mas de 8 caracteres'
      entrar = true

      //guardo la contraseña en el LocalStorage
      localStorage.setItem('pass', contrasena)
    }
    if (entrar) {
      cartel.innerHTML = warnings
    } else {
      warnings.innerHTML = "Registrado"
      Swal.fire({
        title: 'Confirmar registro',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero registrarme'
      }).then((result) => {
        if (result.isConfirmed) {
          let boton = document.getElementById('botonform')
          boton.addEventListener('click', () => {
        
        
        
          })
          Swal.fire(
            'Registrado!',
            'Bienvenido a nuestra pagina.',
            'success'
          )
        }
      })
    }

  })

  document.getElementById('campeones').addEventListener('click', mostrarCampeones)

//ralizo dos peticiones de datos que se encuentran en los archivos storageJSON para mostrar estadisticas
  function mostrarCampeones(){
      fetch('./storageJSON/estadisticas.json')
      .then((res) => res.json())
      .then((data) => {
          let html = '';
          data.forEach(function (campeones) {
              html += `
                  <li>${campeones.equipo}: ${campeones.veces} titulos</li>`;

          })
          document.getElementById('cuadro').innerHTML = html;
          
      })
      .catch(function(error) {
          console.log(error)
      })


  }

  document.getElementById('goleadores').addEventListener('click', mostrarGoleadores)


  function mostrarGoleadores(){
      fetch('./storageJSON/goleadores.json')
      .then((res) => res.json())
      .then((data) => {
          let html = '';
          data.forEach(function (goleadores) {
              html += `
                  <li>${goleadores.jugador}: ${goleadores.goles} goles</li>`;

          })
          document.getElementById('cuadro').innerHTML = html;
          
      })
      .catch(function(error) {
          console.log(error)
      })


  }


}, false);   
