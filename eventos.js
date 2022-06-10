document.addEventListener('DOMContentLoaded', function() {

//Creo el grupo

let GrupoC = [
    'Argentina',
    'Arabia Saudita',
    'Mexico',
    'Polonia'
]

let divDestino = document.getElementById('grupoC')

for(equipo of GrupoC){
    let nuevali = document.createElement('li')
    nuevali.innerHTML = `<p>${equipo}</p>`
    divDestino.append(nuevali)
}

//Indico el resultado de cada partido


let form = document.getElementById('partido1')
let argentina = document.getElementById('arg1','arg2','arg3')
let arabia = document.getElementById('arab1')
let mexico = document.getElementById('mex2')
let polonia = document.getElementById('pol3')


form.addEventListener('submit',(evento) => {
    evento.preventDefault()
    console.log(argentina.value, arabia.value, mexico.value, polonia.value)
    if(argentina.value === '' ||argentina.value === null ||argentina.value === 'undefined' || argentina.value <= 0){
        alert('Por favor, indique la cantidad de goles. Tiene que ser mayor a 0')
    } else{
        if(arabia.value === '' ||arabia.value === null ||arabia.value === 'undefined' || arabia.value <= 0){
            alert('Por favor, indique la cantidad de goles. Tiene que ser mayor a 0')
    } else{
        if(mexico.value === '' ||mexico.value === null ||mexico.value === 'undefined' || mexico.value <= 0){
            alert('Por favor, indique la cantidad de goles. Tiene que ser mayor a 0')
    } else{
        if(polonia.value === '' ||polonia.value === null ||polonia.value === 'undefined' || polonia.value <= 0){
            alert('Por favor, indique la cantidad de goles. Tiene que ser mayor a 0')
    }
    else{
        alert('Los resultados se hicieron correctamente')
    }
}
}
}

    
})

// Calculo los puntos obtenidos de Argentina (primer partido)

function puntos(){
    let cantPuntos = 0
    
    for (let i = 0; i < resultado.lenght; i++){
        if(argentina.value > arabia.value) cantPuntos += 3
        else if(argentina.value < arabia.value) cantPuntos += 0
        else if(argentina.value == arabia.value) cantPuntos += 1
    }

    console.log(cantPuntos);
}



}, false);  