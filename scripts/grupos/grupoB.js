document.addEventListener('DOMContentLoaded', function () {

  //declaro los botones de cada equipo en sus respectivos partidos

    const btn1B = document.getElementById('1b')
    const btn2B = document.getElementById('2b')
    const btn3B = document.getElementById('3b')
    const btn4B = document.getElementById('4b')
    const btn5B = document.getElementById('5b')
    const btn6B = document.getElementById('6b')
    const ing1 = document.getElementById('ing1')
    const ing2 = document.getElementById('ing2')
    const ing3 = document.getElementById('ing3')
    const ira1 = document.getElementById('ira1')
    const ira2 = document.getElementById('ira2')
    const ira3 = document.getElementById('ira3')
    const usa1 = document.getElementById('usa1')
    const usa2 = document.getElementById('usa2')
    const usa3 = document.getElementById('usa3')
    const gal1 = document.getElementById('gal1')
    const gal2 = document.getElementById('gal2')
    const gal3 = document.getElementById('gal3')

    // se veran los puntos que se sumen en la tabla del grupo
    
    let puntosIng = document.getElementById('ptsIng')
    let puntosIra = document.getElementById('ptsIran')
    let puntosUsa = document.getElementById('ptsUsa')
    let puntosGal = document.getElementById('ptsGal')

    // declaro el contador de puntos de cada partido
    
    let contadorIng = 0
    let contadorIra = 0
    let contadorUsa = 0
    let contadorGal = 0

    // eventos para definir cada partido
    
    
    btn1B.onclick = () => {
      if (ing1.value > ira1.value) {
        puntosIng.innerHTML = `${contadorIng += 3}`
      } else {
        if (ing1.value == ira1.value) {
            puntosIng.innerHTML = `${contadorIng += 1}`
            puntosIra.innerHTML = `${contadorIra += 1}`
        } else {
          if (ing1.value < ira1.value) {
            puntosIra.innerHTML = `${contadorIra += 3}`
          }
        }
      }
    }
    
    btn2B.onclick = () => {
      if (usa1.value > gal1.value) {
        puntosUsa.innerHTML = `${contadorUsa += 3}`
      } else {
        if (usa1.value == gal1.value) {
            puntosUsa.innerHTML = `${contadorUsa += 1}`
            puntosGal.innerHTML = `${contadorGal += 1}`
        } else {
          if (usa1.value < gal1.value) {
            puntosGal.innerHTML = `${contadorGal += 3}`
          }
        }
      }
    }
    
    btn3B.onclick = () => {
      if (gal2.value > ira2.value) {
        puntosGal.innerHTML = `${contadorGal += 3}`
      } else {
        if (gal2.value == ira2.value) {
            puntosGal.innerHTML = `${contadorGal += 1}`
            puntosIra.innerHTML = `${contadorIra += 1}`
        } else {
          if (gal2.value < ira2.value) {
            puntosIra.innerHTML = `${contadorIra += 3}`
          }
        }
      }
    }
    
    btn4B.onclick = () => {
      if (ing2.value > usa2.value) {
        puntosIng.innerHTML = `${contadorIng += 3}`
      } else {
        if (ing2.value == usa2.value) {
            puntosIng.innerHTML = `${contadorIng += 1}`
            puntosUsa.innerHTML = `${contadorUsa += 1}`
        } else {
          if (ing2.value < usa2.value) {
            puntosUsa.innerHTML = `${contadorUsa += 3}`
          }
        }
      }
    }
    
    btn5B.onclick = () => {
      if (gal3.value > ing3.value) {
        puntosGal.innerHTML = `${contadorGal += 3}`
      } else {
        if (gal3.value == ing3.value) {
            puntosGal.innerHTML = `${contadorGal += 1}`
            puntosIng.innerHTML = `${contadorIng += 1}`
        } else {
          if (gal3.value < ing3.value) {
            puntosIng.innerHTML = `${contadorIng += 3}`
          }
        }
      }
    }
    
    btn6B.onclick = () => {
      if (ira3.value > usa3.value) {
        puntosIra.innerHTML = `${contadorIra += 3}`
      } else {
        if (ira3.value == usa3.value) {
            puntosIra.innerHTML = `${contadorIra += 1}`
            puntosUsa.innerHTML = `${contadorUsa += 1}`
        } else {
          if (ira3.value < usa3.value) {
            puntosUsa.innerHTML = `${contadorUsa += 3}`
          }
        }
      }
    }
    
    }, false);   