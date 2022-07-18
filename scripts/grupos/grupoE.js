document.addEventListener('DOMContentLoaded', function () {

  //declaro los botones de cada equipo en sus respectivos partidos

    const btn1E = document.getElementById('1e')
    const btn2E = document.getElementById('2e')
    const btn3E = document.getElementById('3e')
    const btn4E = document.getElementById('4e')
    const btn5E = document.getElementById('5e')
    const btn6E = document.getElementById('6e')
    const esp1 = document.getElementById('esp1')
    const esp2 = document.getElementById('esp2')
    const esp3 = document.getElementById('esp3')
    const cos1 = document.getElementById('cos1')
    const cos2 = document.getElementById('cos2')
    const cos3 = document.getElementById('cos3')
    const ale1 = document.getElementById('ale1')
    const ale2 = document.getElementById('ale2')
    const ale3 = document.getElementById('ale3')
    const jap1 = document.getElementById('jap1')
    const jap2 = document.getElementById('jap2')
    const jap3 = document.getElementById('jap3')

    // se veran los puntos que se sumen en la tabla del grupo
    
    let puntosEsp = document.getElementById('ptsEsp')
    let puntosCos = document.getElementById('ptsCost')
    let puntosAle = document.getElementById('ptsAle')
    let puntosJap = document.getElementById('ptsJap')

    // declaro el contador de puntos de cada partido
    
    let contadorEsp = 0
    let contadorCos = 0
    let contadorAle = 0
    let contadorJap = 0

    // eventos para definir cada partido
    
    
    btn1E.onclick = () => {
      if (ale1.value > jap1.value) {
        puntosAle.innerHTML = `${contadorAle += 3}`
      } else {
        if (ale1.value == jap1.value) {
            puntosAle.innerHTML = `${contadorAle += 1}`
            puntosJap.innerHTML = `${contadorJap += 1}`
        } else {
          if (ale1.value < jap1.value) {
            puntosJap.innerHTML = `${contadorJap += 3}`
          }
        }
      }
    }
    
    btn2E.onclick = () => {
      if (esp1.value > cos1.value) {
        puntosEsp.innerHTML = `${contadorEsp += 3}`
      } else {
        if (esp1.value == cos1.value) {
            puntosEsp.innerHTML = `${contadorEsp += 1}`
            puntosCos.innerHTML = `${contadorCos += 1}`
        } else {
          if (esp1.value < cos1.value) {
            puntosCos.innerHTML = `${contadorCos += 3}`
          }
        }
      }
    }
    
    btn3E.onclick = () => {
      if (jap2.value > cos2.value) {
        puntosJap.innerHTML = `${contadorJap += 3}`
      } else {
        if (jap2.value == cos2.value) {
            puntosJap.innerHTML = `${contadorJap += 1}`
            puntosCos.innerHTML = `${contadorCos += 1}`
        } else {
          if (jap2.value < cos2.value) {
            puntosCos.innerHTML = `${contadorCos += 3}`
          }
        }
      }
    }
    
    btn4E.onclick = () => {
      if (esp2.value > ale2.value) {
        puntosEsp.innerHTML = `${contadorEsp += 3}`
      } else {
        if (esp2.value == ale2.value) {
            puntosEsp.innerHTML = `${contadorEsp += 1}`
            puntosAle.innerHTML = `${contadorAle += 1}`
        } else {
          if (esp2.value < ale2.value) {
            puntosAle.innerHTML = `${contadorAle += 3}`
          }
        }
      }
    }
    
    btn5E.onclick = () => {
      if (jap3.value > esp3.value) {
        puntosJap.innerHTML = `${contadorJap += 3}`
      } else {
        if (jap3.value == esp3.value) {
            puntosJap.innerHTML = `${contadorJap += 1}`
            puntosEsp.innerHTML = `${contadorEsp += 1}`
        } else {
          if (jap3.value < esp3.value) {
            puntosEsp.innerHTML = `${contadorEsp += 3}`
          }
        }
      }
    }
    
    btn6E.onclick = () => {
      if (cos3.value > ale3.value) {
        puntosCos.innerHTML = `${contadorCos += 3}`
      } else {
        if (cos3.value == ale3.value) {
            puntosCos.innerHTML = `${contadorCos += 1}`
            puntosAle.innerHTML = `${contadorAle += 1}`
        } else {
          if (cos3.value < ale3.value) {
            puntosAle.innerHTML = `${contadorAle += 3}`
          }
        }
      }
    }
    
    }, false);   