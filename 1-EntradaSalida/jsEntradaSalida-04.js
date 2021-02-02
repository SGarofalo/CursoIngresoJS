/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

//todo programa se rige por entradas (dadas por el usuario), 
//procesos (para realizar el programa) y 
//salidas que le informan al usuario algo en particular

//txtIdNombre



var nombre;
nombre = prompt("Ingrese su nombre");

//copiar el valor de la var nombre como contenido de esa caja de texto, entonces

document.getElementById("txtIdNombre").value = nombre;

	alert("ok");
}

