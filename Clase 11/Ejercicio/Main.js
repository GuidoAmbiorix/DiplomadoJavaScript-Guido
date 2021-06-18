/**Ejercicio en clase:
 * 
 * 
 * 
 */


   const buton = document.getElementById("button");

   buton.addEventListener('click',(e) =>{

    let random = Math.random().toString(16).substring(2,8);
   

    const ancho = document.getElementById("ancho");
    const altura = document.getElementById("altura");
    const randomColor = document.getElementById("Random");

   const contenedor = document.getElementById("contenedor");

   contenedor.style.width = ancho.value+"px";
   contenedor.style.height = altura.value+"px";


    contenedor.innerHTML = "El nuevo ancho es: "+ancho.value+"px Y el nuevo alto es: "+altura.value+"px";
    contenedor.style.background = "#" + random;
    contenedor.style.color = 'white';
    randomColor.value = "#" + random;
    randomColor.style.color = "white";
    randomColor.style.background = '#' + random; 
  
    console.log(ancho.value,altura.value);

})