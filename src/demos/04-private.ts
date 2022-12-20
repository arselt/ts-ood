export class MyDate {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  private addPadding(value: number) {
    if (value < 10 && value > 0) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this.day += amount;
        break;
      case 'months':
        this.month += amount;
        break;
      case 'years':
        this.year += amount;
    }
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  getDay() {
    return this.day;
  }
}

export const myDate = new MyDate(2036, 8, 13)
console.log(myDate.printFormat())
// myDate.day = 99; attribute is private, can't modify them out of the scope
console.log('modifying days: ', myDate.printFormat());
// modify a private property
myDate.add(-92, 'days');
console.log('adding days: ', myDate.printFormat());

// addPdding(2); can't call method, it's private
// console.log(myDate.day); Property 'day' is private and only accessible within class 'MyDate'.
console.log('Day: ', myDate.getDay())
