// Telephone class
class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = new Set();
  }
  //   Telephone methods
  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber);
  }
  DialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.has(phoneNumber)) {
      this.observers.forEach((observer) => observer.notify(phoneNumber));
    }
  }
  // Observer methods
  addObserver(observer) {
    this.observers.add(observer);
  }
  removeObserver(observer) {
    this.observers.delete(observer);
  }
}

// Observer class
class Observer {
  constructor(type) {
    this.type = type;
  }
  // notify method
  notify(phoneNumber) {
    if (this.type === "firstObserver") {
      console.log(phoneNumber);
    } else if (this.type === "secondObserver") {
      console.log(`Now Dialling ${phoneNumber}`);
    } else {
      throw new Error("Unknown observer type");
    }
  }
}
const firstObserver = new Observer("firstObserver");
const secondObserver = new Observer("secondObserver");

const telephone = new Telephone();
telephone.addObserver(firstObserver);
telephone.addObserver(secondObserver);
telephone.addPhoneNumber("2347023232");
telephone.DialPhoneNumber("2347023232");
