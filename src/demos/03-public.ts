export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
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
}

export const myDate = new MyDate(2036, 8, 13);
console.log(myDate.printFormat());
myDate.add(12, 'days');
console.log('adding days: ', myDate.printFormat());
myDate.add(-14, 'years');
console.log('removing days: ', myDate.printFormat());

myDate.day = 99;
console.log('modifying days: ', myDate.printFormat());
