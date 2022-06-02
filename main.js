document.addEventListener('DOMContentLoaded', function() {
    //Declaro variables
    
    let puntosAFavor  = 0;
    let puntosEnContra = 0;
    let rondas = 5
    
    function resultadoFinal(puntosAFavor, puntosEnContra){
        return puntosAFavor - puntosEnContra;
    }
    
    alert("Bienvenido! Tendras que sumar puntos en la proximas 5 rondas")
    
    //Indicar la cantidad de puntos a favor por cinco rondas
    
    for(let i=1; i<=rondas; i++){
        alert("Ronda N° " + i)
        

        let puntosGanados = prompt('Cantidad de puntos ganados: ');

      while (isNaN(puntosGanados) == true || parseInt(puntosGanados) < 0 || puntosGanados == null || puntosGanados.length == 0 || /^\s+$/.test(puntosGanados)) {
       alert('No es válido. Sólo ingrese numéros mayores a 0.');
       puntosGanados = prompt('Indique la cantidad de puntos ganados:');
      }
        puntosAFavor += parseInt(puntosGanados);




        // let puntosGanados = prompt("Cantidad de puntos ganados: ");
        // puntosAFavor += parseInt(puntosGanados);
        
        // while (isNaN(puntosGanados) == true || parseInt(puntosGanados) < 0 || puntosGanados == null || puntosGanados.length == 0 || /^\s+$/.test(puntosGanados)){
        //     alert("No es válido. Sólo ingrese numéros mayores a 0.");
        //     puntosGanados = prompt("Indique la cantidad de puntos ganados: ");
        //     if (isNaN(puntosGanados) == false && (parseInt(puntosGanados) > 0)){
        //     }
        //     puntosAFavor += parseInt(puntosGanados);
        //     break;
        // }
    }
 
//Indicar la cantidad de puntos en contra por cinco rondas
 
for(let i=1; i<=rondas; i++){
    alert("Ronda N° " + i)

    let puntosPerdidos = prompt('Cantidad de puntos perdidos: ');

      while (isNaN(puntosPerdidos) == true || parseInt(puntosPerdidos) < 0 || puntosPerdidos == null || puntosPerdidos.length == 0 || /^\s+$/.test(puntosPerdidos)) {
       alert('No es válido. Sólo ingrese numéros mayores a 0.');
      puntosPerdidos = prompt('Indique la cantidad de puntos perdidos:');
      }
    puntosEnContra += parseInt(puntosPerdidos);






 
    //     let puntosPerdidos = prompt("Cantidad de puntos perdidos: ");
    //     puntosEnContra += + parseInt(puntosPerdidos);
 
    //     while (isNaN(puntosPerdidos) == true || parseInt(puntosPerdidos) < 0 || puntosPerdidos == null || puntosPerdidos.length == 0 || /^\s+$/.test(puntosPerdidos)){
    //         alert("No es válido. Sólo ingrese numéros mayores a 0.");
    //         puntosPerdidos = prompt("Indique la cantidad de puntos perdidos:");
    //         if (isNaN(puntosPerdidos) == false && (parseInt(puntosPerdidos) > 0)){
    //             puntosEnContra += parseInt(puntosPerdidos);
    //             break;
    //         }
    //     }
    }
  



    function puntos(partidos){
      let cantPuntos = 0
  
      for (let i = 0; i < partidos.lenght; i++){
          if(partidos[i][0] > partidos[i][2]) cantPuntos += 3
          else if(partidos[i][0] < partidos[i][2]) cantPuntos += 0
          else if(partidos[i][0] == partidos[i][2]) cantPuntos += 1
      }
  
      return cantPuntos;

    }
 
//Dar el total de puntos
 
// alert("Cantidad de puntos totales obtenidos: " + puntosAFavor);
// alert("Perdiste " + puntosEnContra + " puntos a lo largo de las rondas");
// alert("Por lo tanto, tu resultado final es: " + resultadoFinal(puntosAFavor, puntosEnContra))
    
}, false);   





// alert('Ronda N° ' + i);
// let puntosPerdidos = prompt('Cantidad de puntos perdidos: ');

//       while (isNaN(puntosPerdidos) == true || parseInt(puntosPerdidos) < 0 || puntosPerdidos == null || puntosPerdidos.length == 0 || /^\s+$/.test(puntosPerdidos)) {
//        alert('No es válido. Sólo ingrese numéros mayores a 0.');
//       puntosPerdidos = prompt('Indique la cantidad de puntos perdidos:');
//       }
// puntosEnContra += parseInt(puntosPerdidos);


