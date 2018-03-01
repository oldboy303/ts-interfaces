interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function greet(person: NamedPerson): void {
    console.log(`Hello ${ person.firstName}`);
}

function changeName(person: NamedPerson): void {
    person.firstName = 'Bob';
}

let person = {
    firstName: 'San',
    age: 42,
    greet(lastName: string): void {
        console.log(`Hello ${ this.firstName} ${ lastName }`);
    }
};

// greet({ firstName: 'San', age: 42 });
changeName(person);
greet(person);
person.greet('Will');

class Person implements NamedPerson {
    firstName: string;
    greet(lastName: string) {
        console.log(`Hello ${ this.firstName} ${ lastName }`);
    }
}

let myPerson = new Person();
myPerson.firstName = 'Sani';
greet(myPerson);
myPerson.greet('Boy');

// Function Types
interface MultiplyFunc {
    (num1: number, num2: number): number;
}

let myMultiFunc: MultiplyFunc;
myMultiFunc = (val1: number, val2: number) => val1 * val2;

console.log(myMultiFunc(10, 2));

// Interface Inheritance
interface AgedPerson extends NamedPerson {
    age: number;
}

let oldPerson: AgedPerson = {
    age: 101,
    firstName: 'Cengiz',
    greet(lastName: string): void {
        console.log(`Hello ${ this.firstName } ${ lastName }`);
    }
};
oldPerson.greet('Guyer');