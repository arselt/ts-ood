export class MyDate {
  constructor(
    public year: number = 2000,
    public month: number = 12,
    private _day: number = 22,
  ) { }

  private addPadding(value: number) {
    if (value < 10 && value > 0) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this._day += amount;
        break;
      case 'months':
        this.month += amount;
        break;
      case 'years':
        this.year += amount;
    }
  }

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  // Getters executes methods but they're consumed as properties outside the scope
  // This is to access private properties without the risk of mutting or modify them
  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

export const myDate = new MyDate()
console.log(myDate.printFormat())
// myDate.day = 12;
console.log("is the year leap? ", myDate.isLeapYear)

export const myDate2 = new MyDate(1345, 6, 5)
console.log(myDate2.printFormat())
console.log("is the year leap? ", myDate2.isLeapYear)

