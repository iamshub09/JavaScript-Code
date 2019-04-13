let ball = document.getElementById('float-circle');

// Write your code below
let up = function() {
  ball.style.bottom = '250px';
};
let down = function() {
  ball.style.bottom = '50px';  
};
document.onkeydown = up;
document.onkeyup = down;

// it is not work by using target elemnt reason is 
//event not able to focus on a paricular div . target elemnt work on any input elemnts .