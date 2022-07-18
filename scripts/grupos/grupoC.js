document.addEventListener('DOMContentLoaded', function () {

  //declaro los botones de cada equipo en sus respectivos partidos

    const btn1C = document.getElementById('1c')
    const btn2C = document.getElementById('2c')
    const btn3C = document.getElementById('3c')
    const btn4C = document.getElementById('4c')
    const btn5C = document.getElementById('5c')
    const btn6C = document.getElementById('6c')
    const arg1 = document.getElementById('arg1')
    const arg2 = document.getElementById('arg2')
    const arg3 = document.getElementById('arg3')
    const ara1 = document.getElementById('arab1')
    const ara2 = document.getElementById('arab2')
    const ara3 = document.getElementById('arab3')
    const mex1 = document.getElementById('mex1')
    const mex2 = document.getElementById('mex2')
    const mex3 = document.getElementById('mex3')
    const pol1 = document.getElementById('pol1')
    const pol2 = document.getElementById('pol2')
    const pol3 = document.getElementById('pol3')

    // se veran los puntos que se sumen en la tabla del grupo
    
    let puntosArg = document.getElementById('ptsArg')
    let puntosArab = document.getElementById('ptsArab')
    let puntosMex = document.getElementById('ptsMex')
    let puntosPol = document.getElementById('ptsPol')

    // declaro el contador de puntos de cada partido
    
    let contadorArg = 0
    let contadorArab = 0
    let contadorMex = 0
    let contadorPol = 0

    // eventos para definir cada partido
    
    
    btn1C.onclick = () => {
      if (arg1.value > ara1.value) {
        puntosArg.innerHTML = `${contadorArg += 3}`
      } else {
        if (arg1.value == ara1.value) {
            puntosArg.innerHTML = `${contadorArg += 1}`
            puntosArab.innerHTML = `${contadorArab += 1}`
        } else {
          if (arg1.value < ara1.value) {
            puntosArab.innerHTML = `${contadorArab += 3}`
          }
        }
      }
    }
    
    btn2C.onclick = () => {
      if (mex1.value > pol1.value) {
        puntosMex.innerHTML = `${contadorMex += 3}`
      } else {
        if (mex1.value == pol1.value) {
            puntosMex.innerHTML = `${contadorMex += 1}`
            puntosPol.innerHTML = `${contadorPol += 1}`
        } else {
          if (mex1.value < pol1.value) {
            puntosPol.innerHTML = `${contadorPol += 3}`
          }
        }
      }
    }
    
    btn3C.onclick = () => {
      if (arg2.value > mex2.value) {
        puntosArg.innerHTML = `${contadorArg += 3}`
      } else {
        if (arg2.value == mex2.value) {
            puntosArg.innerHTML = `${contadorArg += 1}`
            puntosMex.innerHTML = `${contadorMex += 1}`
        } else {
          if (arg2.value < mex2.value) {
            puntosMex.innerHTML = `${contadorMex += 3}`
          }
        }
      }
    }
    
    btn4C.onclick = () => {
      if (pol2.value > ara2.value) {
        puntosPol.innerHTML = `${contadorPol += 3}`
      } else {
        if (pol2.value == ara2.value) {
            puntosPol.innerHTML = `${contadorPol += 1}`
            puntosArab.innerHTML = `${contadorArab += 1}`
        } else {
          if (pol2.value < ara2.value) {
            puntosArab.innerHTML = `${contadorArab += 3}`
          }
        }
      }
    }
    
    btn5C.onclick = () => {
      if (arg3.value > pol3.value) {
        puntosArg.innerHTML = `${contadorArg += 3}`
      } else {
        if (arg3.value == pol3.value) {
            puntosArg.innerHTML = `${contadorArg += 1}`
            puntosPol.innerHTML = `${contadorPol += 1}`
        } else {
          if (arg3.value < pol3.value) {
            puntosPol.innerHTML = `${contadorPol += 3}`
          }
        }
      }
    }
    
    btn6C.onclick = () => {
      if (mex3.value > ara3.value) {
        puntosMex.innerHTML = `${contadorMex += 3}`
      } else {
        if (mex3.value == ara3.value) {
            puntosMex.innerHTML = `${contadorMex += 1}`
            puntosArab.innerHTML = `${contadorArab += 1}`
        } else {
          if (mex3.value < ara3.value) {
            puntosArab.innerHTML = `${contadorArab += 3}`
          }
        }
      }
    }
    
    }, false);   