/** Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) 
 * y a través de condicionales if realice las siguientes operaciones: 
 * 
 * a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. 
 * Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”.
 *  Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje 
 * “La rueda es para un vehículo pequeño”.
 * 
 * b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 
 * pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es
 *  inferior al recomendado”
 * 
 * */


    const diametroRueda = document.getElementById('diametroRueda');
    const grosorRueda = document.getElementById('grosorRueda');
    const button = document.getElementById('button');
    
    button.addEventListener('click',function(e){

        const resultadoDiametro  = document.getElementById('ResultadoDiametro');
        const resultadoGrosor  = document.getElementById('ResultadoGrosor');
        
        resultadoDiametro.innerHTML = diametroRueda.value;
        resultadoGrosor.innerHTML = grosorRueda.value;

        resultadoDiametro.classList.add('default');
        resultadoGrosor.classList.add('default');

        CalcularDiametro();
        CalcularGrosor();
        
    });

  
    //Parte a del ejercicio
  function CalcularDiametro(){

    const VehiculoG = document.getElementById('VG');
    const VehiculoM = document.getElementById("VM");
    const VehiculoP = document.getElementById("VP");

     //Si el diametro es mayor a 1.4
      if(diametroRueda.value > 1.4)
      {
        VehiculoG.innerHTML = 'Si';
        VehiculoM.innerHTML = 'No';
        VehiculoP.innerHTML = 'No';
  
      VehiculoG.classList.remove('No');
        VehiculoG.classList.add('Si');
        VehiculoM.classList.add('No');
        VehiculoP.classList.add('No');
      }

      //Si es mayor a 0.8 y menor o igual a 1.4
    else if(diametroRueda.value>0.8 && diametroRueda.value<=1.4)
    {
        VehiculoG.innerHTML = 'No';
        VehiculoM.innerHTML = 'Si';
        VehiculoP.innerHTML = 'No';

        VehiculoG.classList.add('No');
        VehiculoM.classList.remove('No');
        VehiculoM.classList.add('Si');
        VehiculoP.classList.add('No');
    }
      //Si no se cumplen ninguna de las 2 condiciones de arriba
    else
    {
        VehiculoG.innerHTML = 'No';
        VehiculoM.innerHTML = 'No';
        VehiculoP.innerHTML = 'Si';

        VehiculoG.classList.add('No');
        VehiculoM.classList.add('No');
        VehiculoP.classList.remove('No');
        VehiculoP.classList.add('Si');
    }


  }
  //Parte b del ejercicio
  function CalcularGrosor(){
    const grosorRecomendado = document.getElementById('GrosorRecomendado');  

//Si el diametro > 1.4 y grosor <0.4 o diametro>0.8 y diametro<=1.4 y grosor >0.25
if(diametroRueda.value>1.4 && grosorRueda.value<0.4 || diametroRueda.value>0.8 && diametroRueda.value <= 1.4 && grosorRueda.value<0.25 ){
    
    grosorRecomendado.innerHTML = 'No';

    grosorRecomendado.classList.add('No');

}
//Si no se cumple la condicion de arriba, entonces el grosor es el recomendado
else
{
    grosorRecomendado.innerHTML = 'Si';

    grosorRecomendado.classList.remove('No');
    grosorRecomendado.classList.add('Si');
}

  }