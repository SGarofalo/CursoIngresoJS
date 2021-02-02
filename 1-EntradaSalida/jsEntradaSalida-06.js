/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

/*var x = "30";
var y = 20;
var z;

z = x + y;
alert(z);*/

//DECLARO LAS VARIABLES
var num1;
var num2;
var resultado;


//OPERO LAS VARIBLES
//num1 = document.getElementById("txtIdNumeroUno").value;
//num1 = parseInt(num1); QUEDARIA ASI:

num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

num2 = document.getElementById("txtIdNumeroDos").value;

num2 = parseInt(num2);

resultado = num1 + num2;


//MUESTRO EL RESULTADO
alert("La suma es de " + resultado);





}

