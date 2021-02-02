/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var num1;
var num2;
var sumar;

num1 = document.getElementById("txtIdNumeroUno").value;
num1 = parseInt(num1);

num2 = document.getElementById("txtIdNumeroDos").value;
num2 = parseInt(num2);

sumar = num1 + num2;

alert("La suma es de " + sumar);
	
}

function restar()
{
	var num1;
	var num2;
	var restar;
	
	num1 = document.getElementById("txtIdNumeroUno").value;
		
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	restar = num1 - num2;

	alert(typeof restar);
	
	alert("La resta es " + restar);
		



}

function multiplicar()
{ 

var num1;
var num2;
var multiplicar;

num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

multiplicar = num1 * num2;

alert("La multiplicacion es " + multiplicar);


	
}

function dividir()
{

var num1;
var num2;
var dividir;

num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

dividir = num1 / num2;

alert("La división es " + dividir);



	
}

