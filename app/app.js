import Minesweeper from './classes/Minesweeper';

const Row = 10;
const Col = 10;
const MineCnt = 10;

const app = new Minesweeper(Row, Col, MineCnt, (mesg) => {
  console.log(mesg);
});

app.execute('pretty', (mesg) => {
  console.log(mesg);
});

