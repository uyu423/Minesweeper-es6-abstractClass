import { Mine, Empty } from './Block';
import colors from 'colors';

export default class Field {
  constructor(Row, Col, MineCnt) {
    this.row = Row;
    this.col = Col;
    this.maxCnt = MineCnt;
    this.blocks = null;
    this.mineCnt = 0;
    this.mineMeta = Array();
    this.adder = (row, col) => {
//      console.log("pos : " + row + ", " + col)
      if(row < 0 || col < 0 || row >= this.row || col >= this.col) return;
      else {
        if(this.blocks[row][col].toString() === 'M') return
        else {
          this.blocks[row][col].setValue(this.blocks[row][col].getNumber() + 1);
        }
      }
    }
    this.setMines = () => {
      for(let i=0; i<this.blocks.length; i++) {
        for(let j=0; j<this.blocks[i].length; j++) {
          if(this.mineCnt >= this.maxCnt) return;
          if(this.blocks[i][j].toString() === 'M') continue;
          let rn = Math.floor(Math.random() * this.maxCnt);
          if(rn == 0) {
            this.blocks[i][j] = new Mine();
            this.mineMeta.push({Row: i, Col: j});
            this.mineCnt++;
          }
        }
      }
    }
  }
  makeBlocks() {
    this.blocks = new Array(this.row);
    for(let i=0; i<this.blocks.length; i++) {
      this.blocks[i] = new Array(this.col);
      for(let j=0; j<this.blocks[i].length; j++) {
        this.blocks[i][j] = new Empty();
      }
    }
    while(this.mineCnt < this.maxCnt) {
      this.setMines();
    }
    console.log("Mine Cnt : ", this.mineCnt);
    console.log("Mine Meta : ", this.mineMeta);
  }

  clacBlocks() {
    for(let i=0; i<this.mineMeta.length; i++) {
      let mine = this.mineMeta[i];
      this.adder(mine.Row-1, mine.Col);
      this.adder(mine.Row-1, mine.Col+1);
      this.adder(mine.Row, mine.Col+1);
      this.adder(mine.Row+1, mine.Col+1);
      this.adder(mine.Row+1, mine.Col);
      this.adder(mine.Row+1, mine.Col-1);
      this.adder(mine.Row, mine.Col-1);
      this.adder(mine.Row-1, mine.Col-1);
      console.log(i + "mine calc ok");
    }
  }

  printBlocks() {
    for(let i=0; i<this.blocks.length; i++) {
      for(let j=0; j<this.blocks[i].length; j++) {
        let val = this.blocks[i][j].toString();
        process.stdout.write((val === 'M' ? val.red : (val === '0' ? ' ' : val )) + " ");
      }
      console.log();
    }
  }
}
