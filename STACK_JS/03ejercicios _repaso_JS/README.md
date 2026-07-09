# Tarea: Práctica de Condicionales en JavaScript (Parte 2)

## Objetivo de Aprendizaje

Desarrollar programas utilizando estructuras condicionales en JavaScript para resolver distintos problemas mediante el uso de:

- if
- else if
- else
- operadores de comparación
- operadores lógicos
- variables
- funciones
- prompt()
- alert()

---

# Instrucciones Generales

Crear una página web utilizando:

- HTML
- CSS
- JavaScript

Cada ejercicio debe:

- Tener su propio botón con `onclick`
- Tener una función independiente en `script.js`
- Solicitar datos mediante `prompt()`
- Mostrar resultados utilizando `alert()`
- Utilizar estructuras condicionales correctamente
- Aplicar operadores de comparación y operadores lógicos cuando corresponda

---

# Estructura del Proyecto

```
condicionales_js_parte2
│
├── index.html
├── README.md
├── static
│   ├── css
│   │   └── style.css
│   └── js
│       └── script.js
```

---

# Ejercicio 1: Calculadora de Envío

## Enunciado

Una empresa de despacho cobra el envío dependiendo del peso del paquete.

Solicitar:

- Nombre del cliente
- Peso del paquete (kg)

Condiciones:

- Hasta 2 kg
- Más de 2 kg y hasta 5 kg
- Más de 5 kg y hasta 10 kg
- Más de 10 kg

El programa debe indicar:

- Nombre del cliente
- Categoría del envío
- Valor correspondiente al despacho

---

# Ejercicio 2: Acceso a Biblioteca

## Enunciado

Una biblioteca posee dos tipos de usuarios:

- Estudiante
- Profesor

Solicitar:

- Tipo de usuario
- Cantidad de libros solicitados

Condiciones:

Cada tipo de usuario posee un límite distinto de préstamos.

El programa debe indicar:

- Si el préstamo está permitido.
- Si supera el límite permitido.
- Mostrar un mensaje diferente según el tipo de usuario.

Utilizar operadores lógicos para realizar las validaciones.

---

# Ejercicio 3: Clasificación Deportiva

## Enunciado

Solicitar:

- Nombre del participante
- Edad

Clasificar al participante según su edad.

Debe existir al menos cuatro categorías distintas.

Finalmente mostrar:

- Nombre
- Edad
- Categoría asignada

---

# Ejercicio 4: Sistema de Bonificación

## Enunciado

Una empresa entrega bonos según los años trabajados.

Solicitar:

- Nombre del trabajador
- Años de servicio

Clasificar según distintos rangos de antigüedad.

Mostrar:

- Nombre
- Nivel de antigüedad
- Mensaje indicando si recibe o no bonificación.

---

# Ejercicio 5: Evaluación de Velocidad

## Enunciado

Solicitar:

- Nombre del conductor
- Velocidad registrada

Condiciones:

Clasificar la velocidad en distintos rangos.

Además:

Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

Mostrar:

- Nombre del conductor
- Velocidad
- Clasificación obtenida

---

# Requisitos Técnicos

Cada ejercicio debe cumplir con:

- Una función independiente.
- Uso de prompt().
- Uso de alert().
- Uso de variables.
- Uso de if.
- Uso de else if.
- Uso de else.
- Uso de operadores de comparación.
- Uso de operadores lógicos cuando corresponda.

---

# Desafío Extra

Agregar una o más de las siguientes mejoras:

- Validación de campos vacíos.
- Validación de datos numéricos.
- Mostrar mensajes utilizando emojis.
- Mostrar resultados dentro del HTML utilizando `innerHTML`.
- Cambiar colores o estilos mediante JavaScript según el resultado obtenido.



## index.html
```<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Condicionales - Parte 2</title>

    <link rel="stylesheet" href="static/css/style.css">
</head>

<body>

    <div class="contenedor">

        <h1>Práctica de Condicionales</h1>

        <div class="card">
            <h2>Ejercicio 1</h2>
            <p>Calculadora de envío.</p>
            <button onclick="ejercicio1()">Ejecutar</button>
        </div>

        <div class="card">
            <h2>Ejercicio 2</h2>
            <p>Acceso a biblioteca.</p>
            <button onclick="ejercicio2()">Ejecutar</button>
        </div>

        <div class="card">
            <h2>Ejercicio 3</h2>
            <p>Clasificación deportiva.</p>
            <button onclick="ejercicio3()">Ejecutar</button>
        </div>

        <div class="card">
            <h2>Ejercicio 4</h2>
            <p>Sistema de bonificación.</p>
            <button onclick="ejercicio4()">Ejecutar</button>
        </div>

        <div class="card">
            <h2>Ejercicio 5</h2>
            <p>Evaluación de velocidad.</p>
            <button onclick="ejercicio5()">Ejecutar</button>
        </div>

    </div>

    <script src="static/js/script.js"></script>

</body>

</html>
```
## static/css/style.css
```
body{
    margin:0;
    padding:20px;
    font-family:Arial, Helvetica, sans-serif;
    background:#f2f4f8;
}

.contenedor{
    max-width:800px;
    margin:auto;
}

h1{
    text-align:center;
    margin-bottom:30px;
}

.card{
    background:white;
    padding:20px;
    margin-bottom:20px;
    border-radius:10px;
    box-shadow:0 2px 5px rgba(0,0,0,.2);
}

button{
    background:#2563eb;
    color:white;
    border:none;
    padding:10px 18px;
    border-radius:5px;
    cursor:pointer;
}

button:hover{
    background:#1d4ed8;
}
```