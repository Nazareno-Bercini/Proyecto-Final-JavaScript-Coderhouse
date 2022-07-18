document.addEventListener('DOMContentLoaded', function () {

  //declaro los botones de cada equipo en sus respectivos partidos

    const btn1D = document.getElementById('1d')
    const btn2D = document.getElementById('2d')
    const btn3D = document.getElementById('3d')
    const btn4D = document.getElementById('4d')
    const btn5D = document.getElementById('5d')
    const btn6D = document.getElementById('6d')
    const fra1 = document.getElementById('fra1')
    const fra2 = document.getElementById('fra2')
    const fra3 = document.getElementById('fra3')
    const aus1 = document.getElementById('aus1')
    const aus2 = document.getElementById('aus2')
    const aus3 = document.getElementById('aus3')
    const din1 = document.getElementById('din1')
    const din2 = document.getElementById('din2')
    const din3 = document.getElementById('din3')
    const tun1 = document.getElementById('tun1')
    const tun2 = document.getElementById('tun2')
    const tun3 = document.getElementById('tun3')

    // se veran los puntos que se sumen en la tabla del grupo
    
    let puntosFra = document.getElementById('ptsFra')
    let puntosAus = document.getElementById('ptsAus')
    let puntosDin = document.getElementById('ptsDin')
    let puntosTun = document.getElementById('ptsTun')

    // declaro el contador de puntos de cada partido
    
    let contadorFra = 0
    let contadorAus = 0
    let contadorDin = 0
    let contadorTun = 0

    // eventos para definir cada partido
    
    
    btn1D.onclick = () => {
      if (fra1.value > aus1.value) {
        puntosFra.innerHTML = `${contadorFra += 3}`
      } else {
        if (fra1.value == aus1.value) {
            puntosFra.innerHTML = `${contadorFra += 1}`
            puntosAus.innerHTML = `${contadorAus += 1}`
        } else {
          if (fra1.value < aus1.value) {
            puntosAus.innerHTML = `${contadorAus += 3}`
          }
        }
      }
    }
    
    btn2D.onclick = () => {
      if (din1.value > tun1.value) {
        puntosDin.innerHTML = `${contadorDin += 3}`
      } else {
        if (din1.value == tun1.value) {
            puntosDin.innerHTML = `${contadorDin += 1}`
            puntosTun.innerHTML = `${contadorTun += 1}`
        } else {
          if (din1.value < tun1.value) {
            puntosTun.innerHTML = `${contadorTun += 3}`
          }
        }
      }
    }
    
    btn3D.onclick = () => {
      if (tun2.value > aus2.value) {
        puntosTun.innerHTML = `${contadorTun += 3}`
      } else {
        if (tun2.value == aus2.value) {
            puntosTun.innerHTML = `${contadorTun += 1}`
            puntosAus.innerHTML = `${contadorAus += 1}`
        } else {
          if (tun2.value < aus2.value) {
            puntosAus.innerHTML = `${contadorAus += 3}`
          }
        }
      }
    }
    
    btn4D.onclick = () => {
      if (fra2.value > din2.value) {
        puntosFra.innerHTML = `${contadorFra += 3}`
      } else {
        if (fra2.value == din2.value) {
            puntosFra.innerHTML = `${contadorFra += 1}`
            puntosDin.innerHTML = `${contadorDin += 1}`
        } else {
          if (fra2.value < din2.value) {
            puntosDin.innerHTML = `${contadorDin += 3}`
          }
        }
      }
    }
    
    btn5D.onclick = () => {
      if (tun3.value > fra3.value) {
        puntosTun.innerHTML = `${contadorTun += 3}`
      } else {
        if (tun3.value == fra3.value) {
            puntosTun.innerHTML = `${contadorTun += 1}`
            puntosFra.innerHTML = `${contadorFra += 1}`
        } else {
          if (tun3.value < fra3.value) {
            puntosFra.innerHTML = `${contadorFra += 3}`
          }
        }
      }
    }
    
    btn6D.onclick = () => {
      if (aus3.value > din3.value) {
        puntosAus.innerHTML = `${contadorAus += 3}`
      } else {
        if (aus3.value == din3.value) {
            puntosAus.innerHTML = `${contadorAus += 1}`
            puntosDin.innerHTML = `${contadorDin += 1}`
        } else {
          if (aus3.value < din3.value) {
            puntosDin.innerHTML = `${contadorDin += 3}`
          }
        }
      }
    }
    
    }, false);   