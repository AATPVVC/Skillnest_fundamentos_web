console.log("Conexion exitosa...")


function contar() {
    for (let i = 1; i <= 100; i++) {
        let divisionDe3 = i % 3
        let divisionDe5 = i % 5
        if (divisionDe3 == 0 && divisionDe5 == 0) {
            alert(`${i} FizzBuzz`);
        } else if (divisionDe3 == 0) {
            alert(`${i} Fizz`)
        } else if (divisionDe5 == 0) {
            alert(`${i} Buzz`)
        } else {
            alert(i);
        }
    }
}