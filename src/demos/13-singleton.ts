export class MySerivce {
    
    // static property to hold the single instance of the class
    static instace: MySerivce | null = null;

    // private constructor so that new instances can't be created
    private constructor(private name: string) {

    }

    // getter method to access the private name property
    getName() {
        return this.name;
    }

    // static method to create an instance of the class
    static create(name: string) {
        // check if an instance already exists
        if (MySerivce.instace === null) {
            console.log('Just One Time') // this will only be printed once
                                        // as there'll be only one instance
            // create a new instance and assign it to the static property
            MySerivce.instace = new MySerivce(name);
        }
        // return the existing instance
        return MySerivce.instace;
    }
}

// const notSingleton = new MySerivce;
// Constructor of class 'MySerivce' is private and only accessible within the class declaration.

const myService1 = MySerivce.create('service 1')
console.log(myService1) // MySerivce { name: 'service 1' }

const myService2 = MySerivce.create('service 2')
console.log(myService2) // MySerivce { name: 'service 1' }

const myService3 = MySerivce.create('service 3')
console.log(myService3) // MySerivce { name: 'service 1' }

console.log (myService1 === myService2) // true