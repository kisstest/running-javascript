class Vehicle {
  constructor() {
    this._test = null;
    this.passengers = [];
    console.log('Vehicle create');
  }
  addPassenger(p) {
    this.passengers.push(p);
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    console.log('Car create');
  }
  deployAirbags() {
    console.log('BWOOSH', this);
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super();
    console.log('Motorcycle create');
  }
}

export { Vehicle, Car, Motorcycle };
