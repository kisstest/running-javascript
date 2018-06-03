export default class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    /* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
    this._userGears = ['P', 'N', 'R', 'D'];
    /* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
    this._userGear = this._userGears.indexOf(0);
  }

  get userGear() { return this._userGear; }

  set userGear(value) {
    if (this._userGears.indexOf(value) === -1) throw new Error(`invalid gear: ${value}`);
    this._userGears = value;
  }

  shift(gear) {
    this.userGear = gear;
  }
}
