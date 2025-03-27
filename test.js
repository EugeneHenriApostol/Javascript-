let sum = (a ,b) => {
    return a + b;
}

let difference = (c, d) => c - d;

// use of arrow functions with 0 arguments
let randomNumber = () => {
    return Math.random();
}

console.log(sum(5, 5));

console.log(difference(10, 5));

class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log("Arrow: " + this.name);
        }, 100);
    }

    printNameFunction() {
        setTimeout(function() {
            console.log("Function: " + this.name);
        }, 100)
    }
}

let person = new Person('Bob');
person.printNameArrow(); // this prints bob
person.printNameFunction(); // this doesn't