import colors from 'colors';

export default class Field {
  constructor(Row, Col) {
    this.row = Row;
    this.col = Col;
    this.map = Array(this.row);

    for(let i=0; i<this.map.length; i++) {
      this.map[i] = Array(this.col);
    }
  }

  retMap() {
    return this.map;
  }

  retClassName(row, col) {
    if(typeof this.map[row][col] == 'undefined') {
      console.log("Error. retClassName() : undefined Instance".red);
      process.exit(1);
    }
    else return this.map[row][col].constructor.name;
  }

  setBlock(row, col, obj) {
    this.map[row][col] = obj;
  }
}
