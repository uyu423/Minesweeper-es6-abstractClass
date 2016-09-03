const ARROW_SET = Array();

ARROW_SET.push({ Row : -1, Col : 0 }); //상
ARROW_SET.push({ Row : -1, Col : 1 }); //우상
ARROW_SET.push({ Row : 0, Col : 1 }); //우
ARROW_SET.push({ Row : 1, Col : 1 }); //우하
ARROW_SET.push({ Row : 1, Col : 0 }); //하
ARROW_SET.push({ Row : 1, Col : -1 }); //좌하
ARROW_SET.push({ Row : 0, Col : -1 }); //좌
ARROW_SET.push({ Row : -1, Col : -1 }); //좌상

export default ARROW_SET;
