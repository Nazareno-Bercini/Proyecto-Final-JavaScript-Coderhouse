document.addEventListener('DOMContentLoaded', function () {

  //declaro los botones de cada equipo en sus respectivos partidos

    const btn1H = document.getElementById('1h')
    const btn2H = document.getElementById('2h')
    const btn3H = document.getElementById('3h')
    const btn4H = document.getElementById('4h')
    const btn5H = document.getElementById('5h')
    const btn6H = document.getElementById('6h')
    const por1 = document.getElementById('por1')
    const por2 = document.getElementById('por2')
    const por3 = document.getElementById('por3')
    const gha1 = document.getElementById('gha1')
    const gha2 = document.getElementById('gha2')
    const gha3 = document.getElementById('gha3')
    const uru1 = document.getElementById('uru1')
    const uru2 = document.getElementById('uru2')
    const uru3 = document.getElementById('uru3')
    const cor1 = document.getElementById('cor1')
    const cor2 = document.getElementById('cor2')
    const cor3 = document.getElementById('cor3')

    // se veran los puntos que se sumen en la tabla del grupo
    
    let puntosPor = document.getElementById('ptsPor')
    let puntosGha = document.getElementById('ptsGha')
    let puntosUru = document.getElementById('ptsUru')
    let puntosCor = document.getElementById('ptsCor')

    // declaro el contador de puntos de cada partido
    
    let contadorPor = 0
    let contadorGha = 0
    let contadorUru = 0
    let contadorCor = 0

    // eventos para definir cada partido
    
    
    btn1H.onclick = () => {
      if (uru1.value > cor1.value) {
        puntosUru.innerHTML = `${contadorUru += 3}`
      } else {
        if (uru1.value == cor1.value) {
            puntosUru.innerHTML = `${contadorUru += 1}`
            puntosCor.innerHTML = `${contadorCor += 1}`
        } else {
          if (uru1.value < cor1.value) {
            puntosCor.innerHTML = `${contadorCor += 3}`
          }
        }
      }
    }
    
    btn2H.onclick = () => {
      if (por1.value > gha1.value) {
        puntosPor.innerHTML = `${contadorPor += 3}`
      } else {
        if (por1.value == gha1.value) {
            puntosPor.innerHTML = `${contadorPor += 1}`
            puntosGha.innerHTML = `${contadorGha += 1}`
        } else {
          if (por1.value < gha1.value) {
            puntosGha.innerHTML = `${contadorGha += 3}`
          }
        }
      }
    }
    
    btn3H.onclick = () => {
      if (cor2.value > gha2.value) {
        puntosCor.innerHTML = `${contadorCor += 3}`
      } else {
        if (cor2.value == gha2.value) {
            puntosCor.innerHTML = `${contadorCor += 1}`
            puntosGha.innerHTML = `${contadorGha += 1}`
        } else {
          if (cor2.value < gha2.value) {
            puntosGha.innerHTML = `${contadorGha += 3}`
          }
        }
      }
    }
    
    btn4H.onclick = () => {
      if (por2.value > uru2.value) {
        puntosPor.innerHTML = `${contadorPor += 3}`
      } else {
        if (por2.value == uru2.value) {
            puntosPor.innerHTML = `${contadorPor += 1}`
            puntosUru.innerHTML = `${contadorUru += 1}`
        } else {
          if (por2.value < uru2.value) {
            puntosUru.innerHTML = `${contadorUru += 3}`
          }
        }
      }
    }
    
    btn5H.onclick = () => {
      if (cor3.value > por3.value) {
        puntosCor.innerHTML = `${contadorCor += 3}`
      } else {
        if (cor3.value == por3.value) {
            puntosCor.innerHTML = `${contadorCor += 1}`
            puntosPor.innerHTML = `${contadorPor += 1}`
        } else {
          if (cor3.value < por3.value) {
            puntosPor.innerHTML = `${contadorPor += 3}`
          }
        }
      }
    }
    
    btn6H.onclick = () => {
      if (gha3.value > uru3.value) {
        puntosGha.innerHTML = `${contadorGha += 3}`
      } else {
        if (gha3.value == uru3.value) {
            puntosGha.innerHTML = `${contadorGha += 1}`
            puntosUru.innerHTML = `${contadorUru += 1}`
        } else {
          if (gha3.value < uru3.value) {
            puntosUru.innerHTML = `${contadorUru += 3}`
          }
        }
      }
    }
    
    }, false);   