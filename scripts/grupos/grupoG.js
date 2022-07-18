document.addEventListener('DOMContentLoaded', function () {

  //declaro los botones de cada equipo en sus respectivos partidos

    const btn1G = document.getElementById('1g')
    const btn2G = document.getElementById('2g')
    const btn3G = document.getElementById('3g')
    const btn4G = document.getElementById('4g')
    const btn5G = document.getElementById('5g')
    const btn6G = document.getElementById('6g')
    const bra1 = document.getElementById('bra1')
    const bra2 = document.getElementById('bra2')
    const bra3 = document.getElementById('bra3')
    const ser1 = document.getElementById('ser1')
    const ser2 = document.getElementById('ser2')
    const ser3 = document.getElementById('ser3')
    const sui1 = document.getElementById('sui1')
    const sui2 = document.getElementById('sui2')
    const sui3 = document.getElementById('sui3')
    const cam1 = document.getElementById('cam2')
    const cam2 = document.getElementById('cam2')
    const cam3 = document.getElementById('cam3')

    // se veran los puntos que se sumen en la tabla del grupo
    
    let puntosBra = document.getElementById('ptsBra')
    let puntosSer = document.getElementById('ptsSer')
    let puntosSui = document.getElementById('ptsSui')
    let puntosCam = document.getElementById('ptsCam')

    // declaro el contador de puntos de cada partido
    
    let contadorBra = 0
    let contadorSer = 0
    let contadorSui = 0
    let contadorCam = 0

    // eventos para definir cada partido
    
    
    btn1G.onclick = () => {
      if (sui1.value > cam1.value) {
        puntosSui.innerHTML = `${contadorSui += 3}`
      } else {
        if (sui1.value == cam1.value) {
            puntosSui.innerHTML = `${contadorSui += 1}`
            puntosCam.innerHTML = `${contadorCam += 1}`
        } else {
          if (sui1.value < cam1.value) {
            puntosCam.innerHTML = `${contadorCam += 3}`
          }
        }
      }
    }
    
    btn2G.onclick = () => {
      if (bra1.value > ser1.value) {
        puntosBra.innerHTML = `${contadorBra += 3}`
      } else {
        if (bra1.value == ser1.value) {
            puntosBra.innerHTML = `${contadorBra += 1}`
            puntosSer.innerHTML = `${contadorSer += 1}`
        } else {
          if (bra1.value < ser1.value) {
            puntosSer.innerHTML = `${contadorSer += 3}`
          }
        }
      }
    }
    
    btn3G.onclick = () => {
      if (cam2.value > ser2.value) {
        puntosCam.innerHTML = `${contadorCam += 3}`
      } else {
        if (cam2.value == ser2.value) {
            puntosCam.innerHTML = `${contadorCam += 1}`
            puntosSer.innerHTML = `${contadorSer += 1}`
        } else {
          if (cam2.value < ser2.value) {
            puntosSer.innerHTML = `${contadorSer += 3}`
          }
        }
      }
    }
    
    btn4G.onclick = () => {
      if (bra2.value > sui2.value) {
        puntosBra.innerHTML = `${contadorBra += 3}`
      } else {
        if (bra2.value == sui2.value) {
            puntosBra.innerHTML = `${contadorBra += 1}`
            puntosSui.innerHTML = `${contadorSui += 1}`
        } else {
          if (bra2.value < sui2.value) {
            puntosSui.innerHTML = `${contadorSui += 3}`
          }
        }
      }
    }
    
    btn5G.onclick = () => {
      if (cam3.value > bra3.value) {
        puntosCam.innerHTML = `${contadorCam += 3}`
      } else {
        if (cam3.value == bra3.value) {
            puntosCam.innerHTML = `${contadorCam += 1}`
            puntosBra.innerHTML = `${contadorBra += 1}`
        } else {
          if (cam3.value < bra3.value) {
            puntosBra.innerHTML = `${contadorBra += 3}`
          }
        }
      }
    }
    
    btn6G.onclick = () => {
      if (ser3.value > sui3.value) {
        puntosSer.innerHTML = `${contadorSer += 3}`
      } else {
        if (ser3.value == sui3.value) {
            puntosSer.innerHTML = `${contadorSer += 1}`
            puntosSui.innerHTML = `${contadorSui += 1}`
        } else {
          if (ser3.value < sui3.value) {
            puntosSui.innerHTML = `${contadorSui += 3}`
          }
        }
      }
    }
    
    }, false);   