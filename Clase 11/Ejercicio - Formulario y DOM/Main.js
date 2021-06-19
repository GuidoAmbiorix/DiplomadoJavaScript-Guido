/**Ejercicio en clase:
 * 
 * 
 * 
 */


   const buton = document.getElementById("button");

   buton.addEventListener('click',(e) =>{

    const ancho = document.getElementById("ancho");
    const altura = document.getElementById("altura");

   const contenedor = document.getElementById("contenedor");

   contenedor.style.width = ancho.value+"px";
   contenedor.style.height = altura.value+"px";

    contenedor.innerHTML = "El nuevo ancho es: "+ancho.value+"px Y el nuevo alto es: "+altura.value+"px";
   
    randomColor(contenedor);

    contenedor.style.transitionProperty = 'width,height,background';
    contenedor.style.transitionDuration = '2s';
    randomColor.style.transitionProperty = 'background';
    randomColor.style.transitionDuration = '2s';

})


function randomColor(contenedor){

  let random = Math.random().toString(16).substring(2,8);

  const randomColor = document.getElementById("Random");

  contenedor.style.background = "#" + random;
  contenedor.style.color = 'white';
  randomColor.value = "#" + random;
  randomColor.style.color = "white";
  randomColor.style.background = '#' + random; 

}