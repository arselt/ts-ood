export abstract class Animal {
    constructor(protected name: string) {}

    move () {
        console.log('moving along!');
    }

    greeting() {
        return `Hello, I'm ${this.name}`;
    }

    doSomething() {
        console.log('doooooooooooooo')
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
            console.log(`wooof! ${this.name}`)
            // if name was private we couldn't access it from a inherited class
        }
        this.doSomething()
    }

    move() {
        console.log('moving as a dog')
        super.move() // calls method from parent
    }
}

const doug = new Dog('Doug', 'Avery');
doug.move();
console.log(doug.greeting());
doug.woof(5);
console.log(doug.owner);

// doug.name = 'Aya'; can't modify if it's protected
doug.woof(2);
console.log(doug.greeting());
doug.move()