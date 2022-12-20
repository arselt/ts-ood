export class MyDate {
  constructor(
    public year: number = 2000,
    private _month: number = 12,
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
        this._month += amount;
        break;
      case 'years':
        this.year += amount;
    }
  }

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }

  get day() {
    return this._day;
  }

  get month() {
    return this._month;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error("Month out of range");
    }
  }
  // setters are void, they can't return values
  // they also can set rules to modifications
}

export const myDate = new MyDate();
console.log(myDate.printFormat());
console.log("is the year leap? ", myDate.isLeapYear);

myDate.month = 7;
console.log('month after modification is: ', myDate.month);
myDate.month = 78; // Throws error, MONTH is out of range
console.log(myDate.month);
