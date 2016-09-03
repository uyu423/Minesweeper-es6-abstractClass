import colors from 'colors';
import { Field, Mine, Danger } from './components';
import ARROW_SETS from './config/ArrowSet';

class Minesweeper {
  constructor(Row, Col, MineCnt, callback) {
    this.field = new Field(Row, Col);
    this.mineMeta = Array();
    this.maxMine = MineCnt;

    this.setMine(Row, Col, MineCnt);
    this.calcNearMine(Row, Col);
    callback("Minesweeper class init OK".blue);
  }

  setMine(Row, Col, MineCnt) {
    for(let i=0; i<MineCnt; i++) {
      let ranRow = Math.floor(Math.random() * Row);
      let ranCol = Math.floor(Math.random() * Col);
      if(typeof this.field.retMap()[ranRow][ranCol] != 'undefined') {
        i--; continue;
      } else {
        this.field.setBlock(ranRow, ranCol, new Mine());
        this.mineMeta.push({ row : ranRow, col : ranCol });
      }
    }
   // console.log(this.field.retMap()[1][1].constructor.name);
  }

  calcNearMine(maxRow, maxCol) {
    // console.log(this.mineMeta);
    for(let i=0; i<this.mineMeta.length; i++) {
      for(let j=0; j<ARROW_SETS.length; j++) {
        let row = this.mineMeta[i].row + ARROW_SETS[j].Row;
        let col = this.mineMeta[i].col + ARROW_SETS[j].Col;
        // console.log(i + ", " + j + " Check " + row + ", " + col);
        if(row < 0 || col < 0 || row >= maxRow || col >= maxCol) {
          // console.log("lange overflow. continue".red);
          continue;
        } 
        else {
          if(typeof this.field.retMap()[row][col] != 'undefined') {
            if(this.field.retClassName(row, col) == 'Mine')
              continue;
            else if(this.field.retClassName(row, col) == 'Danger') {
              // console.log("alredy Danger. execute Adder".green);
              let value = this.field.retMap()[row][col].getNumber();
              this.field.retMap()[row][col].setValue(value + 1);
            }
            else {
              // console.log("Exception Error".red);
              process.exit(1);
            }
          } 
          else {
            // console.log((typeof this.field.retMap()[row][col]) + ". new Danger()".blue);
            this.field.setBlock(row, col, new Danger());
          }
        }
      }
    }
  }

  execute(mode, callback) {
    if(this.mineMeta.length != this.maxMine) {
      callback(("Error : Mine Count is not " + this.maxMine + ", now " + this.mineMeta.length).red);
      return;
    }

    const map = this.field.retMap();
    switch(mode) { 
      case 'pretty':
        for(let i=0; i<map.length; i++) {
          for(let j=0; j<map.length; j++) {
            let val = typeof map[i][j] == 'undefined' ? '0' : map[i][j].toString();
            process.stdout.write((val === 'M' ? val.red : (val === '0' ? ' ' : val )) + " ");
          }
          console.log();
        }
        break;
      default:
        console.log(map);
    }
    callback("Done.".rainbow);
  }
}

export default Minesweeper;
