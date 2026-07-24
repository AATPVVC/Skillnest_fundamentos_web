# 📚 Lección: Objetos en JavaScript

## 🎯 Objetivos de Aprendizaje

Al finalizar esta lección serás capaz de:

- Comprender qué es un objeto en JavaScript.
- Diferenciar un objeto de un arreglo.
- Crear objetos con distintas propiedades.
- Acceder y modificar propiedades utilizando la notación de punto (`.`).
- Agregar nuevas propiedades a un objeto.
- Crear métodos (funciones) dentro de un objeto.
- Comprender el funcionamiento de la palabra clave **`this`**.
- Modelar situaciones del mundo real utilizando objetos.

---

# 🤔 ¿Qué son los objetos?

Hasta ahora hemos utilizado:

- Variables → almacenan un solo dato.
- Arreglos → almacenan muchos datos del mismo tipo.

Pero...

¿Qué ocurre cuando necesitamos guardar **información relacionada sobre una misma entidad**?

Por ejemplo:

Un estudiante tiene:

- Nombre
- Edad
- Curso
- Promedio
- Correo

Podríamos hacerlo así:

```javascript
let nombre = "Pedro";
let edad = 17;
let curso = "4° Medio";
let promedio = 6.2;
```

Sin embargo, todas esas variables pertenecen al mismo estudiante.

La mejor solución consiste en agruparlas dentro de un **objeto**.

---

# 📦 ¿Qué es un objeto?

Un **objeto** es una estructura de datos que permite almacenar información relacionada mediante pares **clave : valor**.

Su sintaxis es la siguiente:

```javascript
let objeto = {

    propiedad: valor,
    propiedad: valor

};
```

Cada dato recibe el nombre de **propiedad**.

---

# 👨‍🎓 Primer ejemplo

```javascript
let estudiante = {

    nombre: "Pedro",
    edad: 17,
    curso: "4° Medio",
    promedio: 6.2

};
```

Visualmente sería algo similar a esto:

| Propiedad | Valor |
|-----------|-------|
| nombre | Pedro |
| edad | 17 |
| curso | 4° Medio |
| promedio | 6.2 |

---

# 📌 Objetos vs Arreglos

## Arreglo

```javascript
let alumnos = [

    "Pedro",
    "María",
    "Ana"

];
```

Los datos se identifican mediante un **índice**.

```javascript
alumnos[0];
```

---

## Objeto

```javascript
let alumno = {

    nombre: "Pedro",
    edad: 17

};
```

Los datos se identifican mediante un **nombre**.

```javascript
alumno.nombre
```

Esta es la principal diferencia.

---

# 🍔 Ejemplo del mundo real

Imaginemos que estamos desarrollando una aplicación para un restaurante.

Cada hamburguesa posee distintas características.

```javascript
let hamburguesaClasica = {

    pan: "Pan de sésamo",
    carne: "Res 100%",
    queso: "Cheddar",

    extras: [
        "Lechuga",
        "Tomate",
        "Cebolla",
        "Salsa especial"
    ]

};
```

Observa que una propiedad incluso puede contener un **arreglo**.

---

# 🔎 Acceder a las propiedades

Utilizamos la notación de punto.

```javascript
console.log(hamburguesaClasica.pan);

console.log(hamburguesaClasica.carne);

console.log(hamburguesaClasica.queso);
```

Resultado

```text
Pan de sésamo

Res 100%

Cheddar
```

---

También podemos acceder al arreglo.

```javascript
console.log(hamburguesaClasica.extras);
```

Resultado

```text
["Lechuga","Tomate","Cebolla","Salsa especial"]
```

---

Si queremos mostrar los ingredientes de forma más elegante:

```javascript
console.log(

    hamburguesaClasica.extras.join(", ")

);
```

Resultado

```text
Lechuga, Tomate, Cebolla, Salsa especial
```

---

# ✏️ Modificar una propiedad

Las propiedades pueden cambiar.

```javascript
let estudiante = {

    nombre: "Pedro",
    promedio: 5.6

};

estudiante.promedio = 6.4;

console.log(estudiante);
```

Resultado

```text
{

nombre:"Pedro",

promedio:6.4

}
```

---

# ➕ Agregar nuevas propiedades

Los objetos pueden crecer.

```javascript
let estudiante = {

    nombre: "Pedro"

};

estudiante.edad = 17;

estudiante.curso = "4° Medio";

console.log(estudiante);
```

Resultado

```text
{

nombre:"Pedro",

edad:17,

curso:"4° Medio"

}
```

---

# 🗑️ Eliminar propiedades

Podemos eliminar propiedades utilizando `delete`.

```javascript
let estudiante = {

    nombre:"Pedro",
    edad:17,
    curso:"4° Medio"

};

delete estudiante.edad;

console.log(estudiante);
```

Resultado

```text
{

nombre:"Pedro",

curso:"4° Medio"

}
```

---

# ⚙️ Métodos

Hasta ahora nuestros objetos solamente almacenan datos.

Pero un objeto también puede **hacer cosas**.

Para ello agregamos funciones llamadas **métodos**.

```javascript
let persona = {

    nombre:"Ana",

    saludar:function(){

        console.log("Hola");

    }

};
```

Llamamos al método.

```javascript
persona.saludar();
```

Resultado

```text
Hola
```

---

# 🍔 Método en una hamburguesa

```javascript
let hamburguesaEspecial = {

    pan:"Pan brioche",

    carne:"Pollo crujiente",

    queso:"Suizo",

    extras:[

        "Lechuga",

        "Pepinos",

        "Miel"

    ],

    mostrarIngredientes:function(){

        console.log("Pan:",this.pan);

        console.log("Carne:",this.carne);

        console.log("Queso:",this.queso);

        console.log(

            "Extras:",

            this.extras.join(", ")

        );

    }

};
```

Llamada.

```javascript
hamburguesaEspecial.mostrarIngredientes();
```

Resultado.

```text
Pan: Pan brioche

Carne: Pollo crujiente

Queso: Suizo

Extras: Lechuga, Pepinos, Miel
```

---

# 🧠 ¿Qué significa `this`?

Esta es una de las palabras más importantes de JavaScript.

Dentro de un objeto,

```javascript
this
```

significa:

> **"Este mismo objeto".**

Cuando escribimos

```javascript
this.pan
```

es exactamente igual a escribir

```javascript
hamburguesaEspecial.pan
```

Pero utilizando `this` el método sirve para cualquier hamburguesa.

---

# 🎯 Ejemplo

```javascript
let hamburguesaVegana = {

    pan:"Integral",

    carne:"Proteína vegetal",

    queso:"Vegano",

    extras:[

        "Tomate",

        "Rúcula"

    ],

    mostrarIngredientes:function(){

        console.log(this.pan);

        console.log(this.carne);

        console.log(this.queso);

    }

};
```

Ahora ambos objetos utilizan exactamente el mismo tipo de método.

```javascript
hamburguesaEspecial.mostrarIngredientes();

hamburguesaVegana.mostrarIngredientes();
```

Cada uno mostrará su propia información.

Eso es posible gracias a `this`.

---

# 💡 Otro ejemplo: un automóvil

```javascript
let auto = {

    marca:"Toyota",

    modelo:"Corolla",

    año:2023,

    encender:function(){

        console.log(

            "Encendiendo",

            this.marca,

            this.modelo

        );

    }

};
```

Resultado.

```text
Encendiendo Toyota Corolla
```

---

# 🏠 Otro ejemplo: una casa

```javascript
let casa = {

    direccion:"Av. Siempre Viva 742",

    habitaciones:4,

    baños:2,

    mostrarInformacion:function(){

        console.log(

            this.direccion

        );

    }

};
```

---

# 📚 Buenas prácticas

✅ Utiliza nombres descriptivos.

```javascript
let estudiante;

let producto;

let cliente;
```

✅ Agrupa únicamente información relacionada.

✅ Utiliza métodos cuando el objeto necesite realizar acciones.

✅ Utiliza siempre `this` para acceder a las propiedades del propio objeto.

---

# 📋 Resumen

Un objeto:

- Agrupa información relacionada.
- Está formado por propiedades.
- Las propiedades poseen un nombre y un valor.
- Puede contener números, textos, arreglos e incluso otros objetos.
- Puede contener funciones llamadas **métodos**.
- Utiliza `this` para acceder a sus propias propiedades.

Los objetos representan prácticamente cualquier entidad del mundo real:

- Personas
- Productos
- Vehículos
- Libros
- Películas
- Empresas
- Animales
- Videojuegos
- Dispositivos electrónicos

Por esta razón son una de las estructuras más importantes de JavaScript.

---

# 💻 Ejercicios

## Ejercicio 1

Crea un objeto llamado **libro** con las siguientes propiedades.

- título
- autor
- año
- editorial
- páginas

Luego muestra todas sus propiedades utilizando `console.log()`.

---

## Ejercicio 2

Crea un objeto llamado **celular**.

Debe contener:

- marca
- modelo
- almacenamiento
- color

Posteriormente:

- Cambia el color.
- Agrega una propiedad llamada `precio`.
- Elimina la propiedad `almacenamiento`.

Finalmente muestra el objeto completo.

---

## Ejercicio 3

Crea un objeto llamado **videojuego**.

Debe contener:

- nombre
- género
- plataforma

Agrega un método llamado `mostrarInformacion()` que imprima todas sus propiedades utilizando `this`.

---

# 🚀 Desafío 1 — Sistema de Estudiantes

Crea un objeto llamado **estudiante** con:

- nombre
- edad
- curso
- promedio
- asistencia

Agrega un método llamado `mostrarResumen()` que muestre un resumen como el siguiente:

```text
Nombre: Pedro

Curso: 4° Medio

Promedio: 6.2

Asistencia: 95%
```

Utiliza `this` para acceder a todas las propiedades.

---

# 🚀 Desafío 2 — Catálogo de Productos

Crea un objeto llamado **producto**.

Debe contener:

- nombre
- precio
- stock
- categoría
- descuento

Agrega un método llamado `precioFinal()` que calcule el precio con descuento y muestre:

```text
Producto: Notebook

Precio original: $650000

Descuento: 10%

Precio final: $585000
```

---

# 🚀 Desafío 3 — Personaje de Videojuego ⭐

Diseña un objeto llamado **personaje**.

Debe contener:

- nombre
- vida
- ataque
- defensa
- nivel
- inventario (arreglo)

Además debe tener los siguientes métodos:

- `mostrarEstado()`
- `subirNivel()`
- `recibirDaño(cantidad)`
- `agregarObjeto(objeto)`

El programa debe permitir realizar acciones como:

```javascript
personaje.mostrarEstado();

personaje.subirNivel();

personaje.recibirDaño(25);

personaje.agregarObjeto("Espada Legendaria");

personaje.mostrarEstado();
```

### ⭐ Desafío Extra

Investiga cómo funcionan los **objetos anidados** (objetos dentro de objetos) y crea un objeto llamado **empresa** con la siguiente estructura:

- Nombre de la empresa.
- Dirección.
- Un objeto llamado `gerente`.
- Un arreglo llamado `empleados`.
- Un método llamado `mostrarEmpresa()` que muestre toda la información utilizando `this`.

> **Próxima lección recomendada:** Objetos + Arreglos, donde aprenderás a trabajar con **listas de objetos**, una estructura utilizada en prácticamente todas las aplicaciones web modernas (usuarios, productos, pedidos, estudiantes, etc.).