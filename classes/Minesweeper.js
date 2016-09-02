import { Field } from './components';

export default class Minesweeper {
  constructor(Row, Col, MineCnt)  {
    this.field = new Field(Row, Col, MineCnt);
    this.field.makeBlocks();
    this.field.printBlocks();
    this.field.clacBlocks();
    this.field.printBlocks();
  }
}
