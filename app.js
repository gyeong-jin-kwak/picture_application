const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// canvas 크기설정
// css로 크기 설정을 하지 않는 이유: 좋은 화질, 이미지를 위해서
canvas.width = 800;
canvas.height = 800;

///////////////////////////////////////
// canvas.getContext("2d")
// context.fillRect(10, 10, 100, 300);
///////////////////////////////////////

//////////////////////////////////////
// context.rect(50, 50, 100, 100);
// context.rect(150, 150, 100, 100);
// context.rect(250, 250, 100, 100);
// context.fill();

// context.beginPath();
// context.rect(350, 350, 100, 100);
// context.fillStyle = "red";
// context.fill();
///////////////////////////////////////


///////////////////////////////////////
// context.moveTo(50, 50);
// context.lineTo(150, 50);
// context.lineTo(150, 150);
// context.lineTo(50, 150);
// context.lineTo(50, 50);
// context.stroke();
// context.fill();
///////////////////////////////////////

// Drawing house
///////////////////////////////////////
// context.fillRect(200, 200, 30, 200);
// context.fillRect(500, 200, 30, 200);
// context.fillRect(200, 200, 300, 30);
// context.moveTo(200, 200);
// context.lineWidth="2";
// context.lineTo(370, 100);
// context.lineTo(530, 200);
// context.moveTo(320, 400);
// context.lineTo(320, 300);
// context.lineTo(400, 300);
// context.lineTo(400, 400);
// context.stroke();
///////////////////////////////////////

// Drawing person
///////////////////////////////////////
context.fillRect(300, 300, 25, 100);
context.fillRect(435, 300, 25, 100);
context.fillRect(340, 300, 80, 120);
context.arc(375, 245, 50, 0, 2 * Math.PI);
context.fill();
context.beginPath();
context.fillStyle="red";
context.arc(350, 250, 10, Math.PI, 2 * Math.PI);
context.arc(395, 250, 10, Math.PI, 2 * Math.PI);
context.fill();
///////////////////////////////////////