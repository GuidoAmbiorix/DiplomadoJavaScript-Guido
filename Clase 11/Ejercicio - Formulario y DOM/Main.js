const button = document.getElementById("button");
  
button.addEventListener('click',(e) =>{
    const ancho = document.getElementById("ancho");
    const altura = document.getElementById("altura");
      
    const contenedor = document.getElementById("contenedor");

    randomColor(contenedor);
    cambiarContenedor(contenedor,ancho,altura);
});


function cambiarContenedor(contenedor,ancho,altura){
  contenedor.style.width = ancho.value+"px";
  contenedor.style.height = altura.value+"px";
  contenedor.innerHTML = "El nuevo ancho es: "+ancho.value+"px Y el nuevo alto es: "+altura.value+"px";
  
   contenedor.style.transitionProperty = 'width,height,background';
   contenedor.style.transitionDuration = '2s';

   contenedor.style.fontFamily =  'Georgia', 'Times New Roman', 'Times', 'serif';
   contenedor.style.fontSize = '20px';
}


function randomColor(contenedor){
  let random = Math.random().toString(16).substring(2,8);;


  console.log(random);

  const randomColor = document.getElementById("Random");

  contenedor.style.background = "#" + random;
  contenedor.style.color = 'white';
  
  randomColor.value = "#" + random;
  randomColor.style.color = "white";
  randomColor.style.background = '#' + random; 
  randomColor.style.transitionProperty = 'background';
  randomColor.style.transitionDuration = '2s';
}

