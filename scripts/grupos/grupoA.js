document.addEventListener('DOMContentLoaded', function () {

//declaro los botones de cada equipo en sus respectivos partidos

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

// se veran los puntos que se sumen en la tabla del grupo

let puntosQat = document.getElementById('ptsQat')
let puntosEcu = document.getElementById('ptsEcu')
let puntosSen = document.getElementById('ptsSen')
let puntosPai = document.getElementById('ptsPai')

// declaro el contador de puntos de cada partido

let contadorQat = 0
let contadorEcu = 0
let contadorSen = 0
let contadorPai = 0

// eventos para definir cada partido

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