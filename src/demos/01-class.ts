class MyPlant {
  age: number;
  specie: string;
  region: string;

  constructor(age: number, specie: string, region: string) {
    this.age = age;
    this.specie = specie;
    this.region = region;
  }
}

const myPlant = new MyPlant(0.6, 'Sequoiadendron Giganteum', 'Sierra Nevada Mountains in California')

console.log(myPlant)
