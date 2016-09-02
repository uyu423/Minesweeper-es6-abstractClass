class Block {
  constructor() {
    this.value = null;
  }
  toString() {
    return this.value;
  }
  setValue(val) {
    this.value = val;
    console.log("Adjust Value : ", this.value)
  }
}

class Mine extends Block {
  constructor() {
    super();
    super.setValue('M');
  }
  toString() {
    return this.value;
  }
}

class Empty extends Block {
  constructor() {
    super();
    super.setValue(0);
  }
  toString() {
    return this.value.toString();
  }
  getNumber() {
    return this.value;
  }
  setValue(value) {
    super.setValue(value);
  }
}

export { Mine, Empty }
