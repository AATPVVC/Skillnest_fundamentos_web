//📋 Instrucciones 
//👨‍🍳 Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:

//corteza: tipo de corteza de la pizza.
//salsa: tipo de salsa utilizada.
//quesos: un arreglo con los tipos de queso que tiene la pizza.
//ingredientes: un arreglo con los ingredientes adicionales.
//🍕 Usa la función para crear las siguientes pizzas:

//Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella y 
// los ingredientes pepperoni y salchicha.
//Una pizza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y 
// cebollas.
//Crea dos pizzas más con tus ingredientes favoritos.
//💻 Muestra en consola los objetos de cada pizza creada.
function CrearPizza() {
    function pizzaOven(masa, salsa, queso, extra) {
        let pizza = {};
        pizza.masa = masa;
        pizza.salsa = salsa;
        pizza.queso = queso;
        pizza.extra = extra;
        return pizza;
    }
    let estiloChicago = pizzaOven(
        "Tradicional",
        "Tradicional",
        "mozzarella",
        ["Peperoni", "Salchicha"],
    );
    let lanzadaMano = pizzaOven(
        "Tradicional",
        "Salsa Marinara",
        "Mozzarella y feta",
        ["Campiñones", "Aceitunas", "Cabollas"],
    );
    console.log(estiloChicago);
    alert(`ingredientes de la segunda pizza:
    Masa: ${lanzadaMano.masa}
    Salsa: ${lanzadaMano.salsa}
    Queso: ${lanzadaMano.queso}
    Extras: ${lanzadaMano.extra}`)
}
