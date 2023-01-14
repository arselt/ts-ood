export class Animal {
    constructor(public name: string) {}

    move () {
        console.log('moving along!');
    }

    greeting() {
        return `Hello, I'm ${this.name}`;
    }
}

export class Dog extends Animal {

    constructor(
        name: string,
        public owner: string
    ) {
        super(name);
    }

    woof(times: number){
        for (let index = 0; index < times; index++) {
            console.log('wooof!')
        }
    }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const doug = new Dog('Doug', 'Avery');
doug.move();
console.log(doug.greeting());
doug.woof(5);
console.log(doug.owner)