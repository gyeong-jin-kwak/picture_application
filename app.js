const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// canvas 크기설정
// css로 크기 설정을 하지 않는 이유: 좋은 화질, 이미지를 위해서
canvas.width = 800;
canvas.height = 800;

// canvas.getContext("2d")
context.fillRect(10, 10, 100, 300);