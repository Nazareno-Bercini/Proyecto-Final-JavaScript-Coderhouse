document.addEventListener('DOMContentLoaded', function () {

  //declaro los botones de cada equipo en sus respectivos partidos

    const btn1F = document.getElementById('1f')
    const btn2F = document.getElementById('2f')
    const btn3F = document.getElementById('3f')
    const btn4F = document.getElementById('4f')
    const btn5F = document.getElementById('5f')
    const btn6F = document.getElementById('6f')
    const bel1 = document.getElementById('bel1')
    const bel2 = document.getElementById('bel2')
    const bel3 = document.getElementById('bel3')
    const can1 = document.getElementById('can1')
    const can2 = document.getElementById('can2')
    const can3 = document.getElementById('can3')
    const mar1 = document.getElementById('mar1')
    const mar2 = document.getElementById('mar2')
    const mar3 = document.getElementById('mar3')
    const cro1 = document.getElementById('cro1')
    const cro2 = document.getElementById('cro2')
    const cro3 = document.getElementById('cro3')

    // se veran los puntos que se sumen en la tabla del grupo
    
    let puntosBel = document.getElementById('ptsBel')
    let puntosCan = document.getElementById('ptsCan')
    let puntosMar = document.getElementById('ptsMar')
    let puntosCro = document.getElementById('ptsCro')

    // declaro el contador de puntos de cada partido
    
    let contadorBel = 0
    let contadorCan = 0
    let contadorMar = 0
    let contadorCro = 0

    // eventos para definir cada partido
    
    
    btn1F.onclick = () => {
      if (mar1.value > cro1.value) {
        puntosMar.innerHTML = `${contadorMar += 3}`
      } else {
        if (mar1.value == cro1.value) {
            puntosMar.innerHTML = `${contadorMar += 1}`
            puntosCro.innerHTML = `${contadorCro += 1}`
        } else {
          if (mar1.value < cro1.value) {
            puntosCro.innerHTML = `${contadorCro += 3}`
          }
        }
      }
    }
    
    btn2F.onclick = () => {
      if (bel1.value > can1.value) {
        puntosBel.innerHTML = `${contadorBel += 3}`
      } else {
        if (bel1.value == can1.value) {
            puntosBel.innerHTML = `${contadorBel += 1}`
            puntosCan.innerHTML = `${contadorCan += 1}`
        } else {
          if (bel1.value < can1.value) {
            puntosCan.innerHTML = `${contadorCan += 3}`
          }
        }
      }
    }
    
    btn3F.onclick = () => {
      if (bel2.value > mar2.value) {
        puntosBel.innerHTML = `${contadorBel += 3}`
      } else {
        if (bel2.value == mar2.value) {
            puntosBel.innerHTML = `${contadorBel += 1}`
            puntosMar.innerHTML = `${contadorMar += 1}`
        } else {
          if (bel2.value < mar2.value) {
            puntosMar.innerHTML = `${contadorMar += 3}`
          }
        }
      }
    }
    
    btn4F.onclick = () => {
      if (cro2.value > can2.value) {
        puntosCro.innerHTML = `${contadorCro += 3}`
      } else {
        if (cro2.value == can2.value) {
            puntosCro.innerHTML = `${contadorCro += 1}`
            puntosCan.innerHTML = `${contadorCan += 1}`
        } else {
          if (cro2.value < can2.value) {
            puntosCan.innerHTML = `${contadorCan += 3}`
          }
        }
      }
    }
    
    btn5F.onclick = () => {
      if (cro3.value > bel3.value) {
        puntosCro.innerHTML = `${contadorCro += 3}`
      } else {
        if (cro3.value == bel3.value) {
            puntosCro.innerHTML = `${contadorCro += 1}`
            puntosBel.innerHTML = `${contadorBel += 1}`
        } else {
          if (cro3.value < bel3.value) {
            puntosBel.innerHTML = `${contadorBel += 3}`
          }
        }
      }
    }
    
    btn6F.onclick = () => {
      if (can3.value > mar3.value) {
        puntosCan.innerHTML = `${contadorCan += 3}`
      } else {
        if (can3.value == mar3.value) {
            puntosCan.innerHTML = `${contadorCan += 1}`
            puntosMar.innerHTML = `${contadorMar += 1}`
        } else {
          if (can3.value < mar3.value) {
            puntosMar.innerHTML = `${contadorMar += 3}`
          }
        }
      }
    }
    
    }, false);   