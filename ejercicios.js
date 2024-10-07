console.log('Hola, el archivo se vinculo correctamente');


// 1. Hacer programa que reciba 2 numeros del usuario y los sume.

// Es una Secuencia


/*let numero1 = 0;
let numero2 = 0;
let resultado = 0;


//variable = asignacion
//TODO LO QUE VIENE DE PROMPTS O DEL USUARIO VIENE COMO STRING
// Vamos a convertir el texto en numero
//paseint -> convierte a enteros
//parsefloat -> convierte a decimales

/*numero1 = prompt('Ingrese el primer numero');
numero2 = prompt('Ingrese el segundo numero');
resultado = parseFloat(numero1) + parseFloat(numero2);

//FINAL PRIMER EJERCICIO--------------------------------------------------------------------


alert('El resultado de la suma de: ' + numero1 + '+' + numero2 + 'es' + resultado);

 2. Hacer un programa que reciba un nombre por parte del usuario, si se recibio nombre por parte del usuario, saludarlo con nombre, si no, solo decir 'HOLA'*/

// if -> si se cumple una condicion haga
// Else -> sino se cumple haga otra cosa
/*let nombreUsuario = prompt( 'Ingrese su Nombre');
if(nombreUsuario){
    alert('Hola: ' + nombreUsuario);
    console.log('se cumple la condicion');
}else {
    alert('Hola');
    console.log('No se cumple la condicion')
} */

//FINAL SEGUNDO EJERCICIO-----------------------------------------------------------------

//3. Hacer un programa que pida al usuario un número entero y muestre los valores desde cero hasta el número ingresado.

/* let numero = parseInt(prompt('Ingrese un numero entero'));
for(let i = 0 ; i<= numero ; i++){
    console.log(i);

}*/

// FINAL TERCER EJERCICIO----------------------------------------------------------------

//4. Hacer un programa que solicite al usuario un texto, si el usuario no ingresa nada seguir solicitando hasta que lo haga.

/*let text= "";

while (true) {
    let texto = prompt("Escriba en el espacio Lo que sea");
    if (texto) {
        alert("Te lo agradezco");
        break;
    } else {
        alert("Escriba lgo que sea valido");
    }
}*/

//FINAL CUARTO EJERCICIO----------------------------------------------------------------


//5. Hacer un programa que muestre los días de la semana.

/*let diaSemana=["lunes", "martes", "miercoles", "jueves", "viernes", "sabado","domingo"];
diaSemana.forEach(
    (dia) => {
    console.log(dia);
    }
)*/

// FINAL QUINTO EJERCICIO---------------------------------------------------------------

//6. Hacer un programa que pida al usuario dos números, mostrar la suma y la resta del primer número y el segundo número.
/*let num1= parseFloat(prompt("Escribe el numero uno"))

let num2= parseFloat(prompt("Escribe el numero dos"))

let suma= num1 + num2

let resta= num1 - num2

alert("La operacion de " + num1 + " + " + num2 + " = " + suma + "\n" +
    "La operacion de " + num1 + " - " + num2 + " = " + resta);*/

//FINAL SEXTO EJERCICIO-------------------------------------------------------------