import Minesweeper from './classes/Minesweeper';

const Row = 30;
const Col = 30;
const MineCnt = 100;

const app = new Minesweeper(Row, Col, MineCnt, (mesg) => {
  console.log(mesg);
});

app.execute('pretty', (mesg) => {
  console.log(mesg);
});
