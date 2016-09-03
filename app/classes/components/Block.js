class Block {
  constructor() {
    this.value = null;
  }
  toString() {
    return this.value;
  }
  setValue(val) {
    this.value = val;
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

class Danger extends Block {
  constructor() {
    super();
    super.setValue(1);
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

export { Mine, Danger }
