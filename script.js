// Ejercicio 1: suma los tres números ingresados.
function calcularSuma() {
    const n1 = parseFloat(document.getElementById("suma1").value);
    const n2 = parseFloat(document.getElementById("suma2").value);
    const n3 = parseFloat(document.getElementById("suma3").value);

    if ([n1, n2, n3].some(Number.isNaN)) {
        document.getElementById("resultadoSuma").textContent = "Ingrese los tres números.";
        return;
    }

    const suma = n1 + n2 + n3;
    document.getElementById("resultadoSuma").textContent =
        "La suma de los valores ingresados es: " + suma;
}

// Ejercicio 2: calcula el número elevado al cuadrado.
function calcularCuadrado() {
    const numero = parseFloat(document.getElementById("numeroCuadrado").value);

    if (Number.isNaN(numero)) {
        document.getElementById("resultadoCuadrado").textContent = "Ingrese un número.";
        return;
    }

    const cuadrado = numero * numero;
    document.getElementById("resultadoCuadrado").textContent =
        "El cuadrado de " + numero + " es: " + cuadrado;
}

// Ejercicio 3: calcula el promedio de tres calificaciones.
function calcularPromedio() {
    const nombre = document.getElementById("nombre").value.trim();
    const n1 = parseFloat(document.getElementById("nota1").value);
    const n2 = parseFloat(document.getElementById("nota2").value);
    const n3 = parseFloat(document.getElementById("nota3").value);

    if (nombre === "" || [n1, n2, n3].some(Number.isNaN)) {
        document.getElementById("resultadoPromedio").textContent =
            "Ingrese el nombre y las tres calificaciones.";
        return;
    }

    const promedio = (n1 + n2 + n3) / 3;
    document.getElementById("resultadoPromedio").textContent =
        "El promedio de " + nombre + " es: " + promedio.toFixed(2) + " puntos";
}

// Ejercicio 4: convierte metros a centímetros y kilómetros.
function convertirMetros() {
    const metros = parseFloat(document.getElementById("metros").value);

    if (Number.isNaN(metros) || metros < 0) {
        document.getElementById("resultadoMetros").textContent =
            "Ingrese una cantidad válida de metros.";
        return;
    }

    const centimetros = metros * 100;
    const kilometros = metros / 1000;
    document.getElementById("resultadoMetros").textContent =
        metros + " metros equivalen a " + centimetros +
        " centímetros y " + kilometros + " kilómetros.";
}

// Ejercicio 5: identifica el mayor, el menor y la diferencia.
function compararValores() {
    const n1 = parseFloat(document.getElementById("valor1").value);
    const n2 = parseFloat(document.getElementById("valor2").value);

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        document.getElementById("resultadoComparacion").textContent =
            "Ingrese los dos números.";
        return;
    }

    const mayor = Math.max(n1, n2);
    const menor = Math.min(n1, n2);
    const diferencia = mayor - menor;

    if (n1 === n2) {
        document.getElementById("resultadoComparacion").textContent =
            "Los dos números son iguales: " + n1 + ". La diferencia es 0.";
    } else {
        document.getElementById("resultadoComparacion").textContent =
            "El número mayor es " + mayor + ", el menor es " + menor +
            ", y su diferencia es " + diferencia + ".";
    }
}
