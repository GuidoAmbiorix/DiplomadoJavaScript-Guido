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

//Solicitar diametro de la rueda
let diametroRueda = prompt("Digite el diametro de la rueda: ");

//Solicitar grosor de la rueda
let grosorRueda = prompt("Digite el grosor de la rueda: ");

//Si es mayor a 1.4
if(diametroRueda  > 1.4){alert("La rueda es para un Vehiculo grande");}

//Si es mayor a 0.8 y menor o igual a 1.4
else if(diametroRueda>0.8 && diametroRueda<=1.4){alert("La rueda es para un vehiculo mediano");}

//Si no se cumplen ninguna de las 2 condiciones de arriba
else{alert("La rueda es para un vehiculo pequeño");}

//Si el diametro > 1.4 y grosor <0.4 o diametro>0.8 y diametro<=1.4 y grosor >0.25
if(diametroRueda>1.4 && grosorRueda<0.4 || diametroRueda>0.8 && diametroRueda <= 1.4 && grosorRueda<0.25 ){
    alert("El grosor para esta rueda es inferior al recomendado");

}
//Si no se cumple la condicion de arriba, entonces el grosor es el recomendado
else{alert("El grosor para esta rueda es el recomendado");}


