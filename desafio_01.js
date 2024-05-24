/**
- [x]  A soma dos dois números;
- [x]  A subtração dos dois números;
- [x]  A multiplicação dos dois números;
- [x]  A divisão dos dois números;
- [x]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [x]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [x]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
 * 
 */

let number_a = 11
let number_b = 10
let sum = number_a + number_b
let subtraction = number_a - number_b
let multiplication = number_a * number_b
let divion = number_a / number_b
let module = number_a % number_b

let isEven = (number_a % number_b == 0)
let areTheSame = (number_a == number_b)
alert(`
soma: ${sum}
subtraction: ${subtraction}
multiplication: ${multiplication}
division: ${divion}
module: ${module}
is even: ${isEven?'is even':'is odd'}
are the same: ${areTheSame?'are the same':'are different'}
`)

