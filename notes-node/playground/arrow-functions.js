
const square = (x) => {
    const result = x * x;
    return result;
}

const squareExpression = (x) => x * x;

console.log(square(9));
console.log(squareExpression(8));

const user = {
    name: 'Brad',
    sayHi: () => {
        console.log(arguments); //not what you expect
        console.log(`Hi. I'm ${this.name}`);  // Hi. I'm undefined -- no this
    },
    sayHiAlt () {
        console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
        console.log(`Hi. I'm ${this.name}`); // Hi. I'm Brad 
    }
};

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);

