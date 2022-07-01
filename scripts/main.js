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
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    warnings.innerHTML = ''
    if (nombre.value.length <= 7) {
      warnings += 'El nombre debe tener mas de 6 caracteres <br>'
      entrar = true
    }
    if (!regexEmail.test(email.value)) {
      warnings = 'Email no valido <br>'
      entrar = true
    }
    if (contrasena.value.lenght < 8) {
      warnings += 'Contraseña no valida'
      entrar = true
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

  const clasificados = document.getElementById('selecClasif')

    fetch('./storageJSON/datos.json')
        .then((res) => res.json())
        .then((data) => {

            data.forEach((seleccion) => {
                const card = document.createElement('card')
                card.innerHTML = `
                <h3>${seleccion.equipo}</h3>
                <h4>Continente: ${seleccion.continente}</h4>
                <h5>Grupo: ${seleccion.grupo}</h5>
                <hr/>
            `

                clasificados.append(card)
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
  let puntosArg = document.getElementById('ptsArg')
  let puntosArab = document.getElementById('ptsArab')
  let puntosMex = document.getElementById('ptsMex')
  let puntosPol = document.getElementById('ptsPol')
  let contadorArg = 0
  let contadorArab = 0
  let contadorMex = 0
  let contadorPol = 0

  btnUno.onclick = () => {
    if (argentina.value > arabia.value) {
      puntosArg.innerHTML = `${contadorArg += 3}`
    } else {
      if (argentina.value == arabia.value) {
        puntosArg.innerHTML = `${contadorArg += 1}`
        puntosArab.innerHTML = `${contadorArab += 1}`
      } else {
        if (argentina.value < arabia.value) {
          puntosArab.innerHTML = `${contcontadorArabador += 3}`
        }
      }
    }
  }

  btnDos.onclick = () => {
    if (argentinaDos.value > mexico.value) {
      puntosArg.innerHTML = `${contadorArg += 3}`
    } else {
      if (argentinaDos.value == mexico.value) {
        puntosArg.innerHTML = `${contadorArg += 1}`
        puntosMex.innerHTML = `${contadorMex += 1}`
      } else {
        if (argentinaDos.value < mexico.value) {
          puntosMex.innerHTML = `${contadorMex += 3}`
        }
      }
    }
  }

  btnTres.onclick = () => {
    if (argentinaTres.value > polonia.value) {
      puntosArg.innerHTML = `${contadorArg += 3}`
    } else {
      if (argentinaTres.value == polonia.value) {
        puntosArg.innerHTML = `${contadorArg += 1}`
        puntosPol.innerHTML = `${contadorPol += 1}`
      } else {
        if (argentinaTres.value < polonia.value) {
          puntosPol.innerHTML = `${contador += 3}`
        }
      }
    }
  }



}, false);   
