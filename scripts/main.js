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
    if (nombre.value.length < 6) {
      warnings += 'El nombre debe tener mas de 6 caracteres <br>'
      entrar = true
      localStorage.setItem('nombre', nombre)
    }
    if (!regexEmail.test(email.value)) {
      warnings = 'Email no valido <br>'
      entrar = true
      localStorage.setItem('email', email)
    }
    if (contrasena.value.lenght < 8) {
      warnings += 'Contraseña debe tener mas de 8 caracteres'
      entrar = true
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






  // const clasificados = document.getElementById('selecClasif')

  //   fetch('./storageJSON/datos.json')
  //       .then((res) => res.json())
  //       .then((data) => {

  //           data.forEach((seleccion) => {
  //               const card = document.createElement('card')
  //               card.innerHTML = `
  //               <h3>${seleccion.equipo}</h3>
  //               <h4>Continente: ${seleccion.continente}</h4>
  //               <h5>Grupo: ${seleccion.grupo}</h5>
  //               <hr/>
  //           `

  //               clasificados.append(card)
  //           })
  //       })

  

  // declaro las constantes para el fixture

  const btnUno = document.getElementById('verResultado123')
  const btnDos = document.getElementById('verResultadoDos123')
  const btnTres = document.getElementById('verResultadoTres123')
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
          puntosPol.innerHTML = `${contadorPol += 3}`
        }
      }
    }
  }


  

const btn1A = document.getElementById('1a')
const btn2A = document.getElementById('2a')
const btn3A = document.getElementById('3a')
const btn4A = document.getElementById('4a')
const btn5A = document.getElementById('5a')
const btn6A = document.getElementById('6a')
const qat1 = document.getElementById('qat1')
const qat2 = document.getElementById('qat2')
const qat3 = document.getElementById('qat3')
const ecu1 = document.getElementById('ecu1')
const ecu2 = document.getElementById('ecu2')
const ecu3 = document.getElementById('ecu3')
const sen1 = document.getElementById('sen1')
const sen2 = document.getElementById('sen2')
const sen3 = document.getElementById('sen3')
const pai1 = document.getElementById('pai1')
const pai2 = document.getElementById('pai2')
const pai3 = document.getElementById('pai3')

let puntosQat = document.getElementById('ptsQat')
let puntosEcu = document.getElementById('ptsEcu')
let puntosSen = document.getElementById('ptsSen')
let puntosPai = document.getElementById('ptsPai')

let contadorQat = 0
let contadorEcu = 0
let contadorSen = 0
let contadorPai = 0

let golesQat = document.getElementById('gfQat')
let golesEcu = document.getElementById('gfEcu')
let golesSen = document.getElementById('gfSen')
let golesPai = document.getElementById('gfPai')

let contadorGFQat = 0
let contadorGFEcu = 0
let contadorGFSen = 0
let contadorGFPai = 0





btn1A.onclick = () => {
  if (sen1.value > pai1.value) {
    puntosSen.innerHTML = `${contadorSen += 3}`
  } else {
    if (sen1.value == pai1.value) {
      puntosSen.innerHTML = `${contadorSen += 1}`
      puntosPai.innerHTML = `${contadorPai += 1}`
    } else {
      if (sen1.value < pai1.value) {
        puntosPai.innerHTML = `${contadorPai += 3}`
      }
    }
  }
  sen1.value == contadorGFSen;
  pai1.value == contadorGFPai
}

btn2A.onclick = () => {
  if (qat1.value > ecu1.value) {
    puntosQat.innerHTML = `${contadorQat += 3}`
  } else {
    if (qat1.value == ecu1.value) {
      puntosQat.innerHTML = `${contadorQat += 1}`
      puntosEcu.innerHTML = `${contadorEcu += 1}`
    } else {
      if (qat1.value < ecu1.value) {
        puntosEcu.innerHTML = `${contadorEcu += 3}`
      }
    }
  }
}

btn3A.onclick = () => {
  if (qat2.value > sen2.value) {
    puntosQat.innerHTML = `${contadorQat += 3}`
  } else {
    if (qat2.value == sen2.value) {
        puntosQat.innerHTML = `${contadorQat += 1}`
        puntosSen.innerHTML = `${contadorSen += 1}`
    } else {
      if (qat2.value < sen2.value) {
        puntosSen.innerHTML = `${contadorSen += 3}`
      }
    }
  }
}

btn4A.onclick = () => {
  if (pai2.value > ecu2.value) {
    puntosPai.innerHTML = `${contadorPai += 3}`
  } else {
    if (pai2.value == ecu2.value) {
        puntosPai.innerHTML = `${contadorPai += 1}`
        puntosEcu.innerHTML = `${contadorEcu += 1}`
    } else {
      if (pai2.value < ecu2.value) {
        puntosEcu.innerHTML = `${contadorEcu += 3}`
      }
    }
  }
}

btn5A.onclick = () => {
  if (pai3.value > qat3.value) {
    puntosPai.innerHTML = `${contadorPai += 3}`
  } else {
    if (pai3.value == qat3.value) {
        puntosPai.innerHTML = `${contadorPai += 1}`
        puntosQat.innerHTML = `${contadorQat += 1}`
    } else {
      if (pai3.value < qat3.value) {
        puntosQat.innerHTML = `${contadorQat += 3}`
      }
    }
  }
}

btn6A.onclick = () => {
  if (ecu3.value > sen3.value) {
    puntosEcu.innerHTML = `${contadorEcu += 3}`
  } else {
    if (ecu3.value == sen3.value) {
        puntosEcu.innerHTML = `${contadorEcu += 1}`
        puntosSen.innerHTML = `${contadorSen += 1}`
    } else {
      if (ecu3.value < sen3.value) {
        puntosSen.innerHTML = `${contadorSen += 3}`
      }
    }
  }
}




}, false);   
