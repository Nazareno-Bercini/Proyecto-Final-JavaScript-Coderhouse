document.addEventListener('DOMContentLoaded', function() {

  class Partidos {
      constructor(){
          this.resultados = [ ];
      }
      
      agregarResultados(resultados){
        this.resultados.push(resultado)
  
      }
  
  }
  

// Le asigno a cada grupo 4 equipos 

  const grupoA =["Qatar", "Paises Bajos", "Senegal", "Ecuador" ];
  const grupoB =["Inglaterra", "EEUU", "Iran", "Gales" ];
  const grupoC =["Argentina", "Mexico", "Polonia", "Arabia" ];
  const grupoD =["Francia", "Dinamarca", "Tunez", "Peru" ];
  const grupoE =["España", "Alemania", "Japon", "Nueva Zelanda" ];
  const grupoF =["Belgica", "Croacia", "Marruecos", "Canada" ];
  const grupoG =["Brasil", "Serbia", "Suiza", "Camerun" ];
  const grupoH =["Portugal", "Uruguay", "Corea", "Ghana" ];
  
  
  let encontrado = grupoC.filter((equipo) => equipo.includes("Ar"));
  console.log(encontrado);
  
  
  
  let golesAFavor  = [];
  let golesEnContra = [];
  let partidos = 3
  
  
  // Indico la cantidad de goles por partido
  
  for(let i=1; i<=partidos; i++){
      alert("Partido N° " + i)
     
      let golesConvertidos = prompt('Cantidad de goles convertidos: ');
      let golesRecibidos = prompt('Cantidad de goles recibidos: ');
      
      while (isNaN(golesConvertidos) == true || parseInt(golesConvertidos) < 0 || golesConvertidos == null || golesConvertidos.length == 0 || /^\s+$/.test(golesConvertidos)) {
          alert('No es válido. Sólo ingrese numéros mayores a 0.');
          golesConvertidos = prompt('Indique la cantidad de goles convertidos: ');
            break;
      
      }
      golesAFavor.push(golesConvertidos);
     
      while (isNaN(golesRecibidos) == true || parseInt(golesRecibidos) < 0 || golesRecibidos == null || golesRecibidos.length == 0 || /^\s+$/.test(golesRecibidos)) {
          alert('No es válido. Sólo ingrese numéros mayores a 0.');
          golesEnContra = prompt('Indique la cantidad de goles recibidos: ');
            break;
        }
      golesEnContra.push(golesRecibidos);
  
  }
  
  function resultadoFinal(golesAFavor, golesEnContra){
    let resultado = golesAFavor + ":" + golesEnContra
      console.log(resultado);
  }
  //Saco la cantidad de puntos ganados por equipo
  
  function puntos(resultado){
      let cantPuntos = 0
      
      for (let i = 0; i < resultado.lenght; i++){
          if(resultadoFinal[i][0] > resultado[i][2]) cantPuntos += 3
          else if(resultadoFinal[i][0] < resultado[i][2]) cantPuntos += 0
          else if(resultadoFinal[i][0] == resultado[i][2]) cantPuntos += 1
      }
  
      console.log(cantPuntos);
  }


  
  }, false);   
