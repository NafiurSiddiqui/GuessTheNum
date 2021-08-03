
    // document.addEventListener('DOMContentLoaded', () => {
    //    ;
    // })

 const timeLeftDisplay = document.querySelector('#time-left');
const startBtn = document.querySelector('#start-button');
const stopBtn =document.querySelector('#stop-button');
const timerHeader = document.querySelector('.timer-header');



let timeleft = 60;
//decrement 👆 number to somewhat 4 or lower according to your development need.to test things out.
const countDown = function(){
    setInterval(function(){
  if(timeleft <= 0){
    clearInterval(countDown);
    timerHeader.classList.remove('active');
    //this removes the active class from the timer-header class so that the text gets hidden.check style sheet for the interrealtion.
    timeLeftDisplay.innerHTML = "You died a horrible a death!";
  } else {
   timeLeftDisplay.innerHTML =`${timeleft}`;
  }
  timeleft -= 1;
}, 1000);
};


    //   const stopCountdown = ()=>{
    //       console.log('no way!');
    //       clearInterval(countDown)
    //   }

startBtn.addEventListener('click', countDown);
// stopBtn.addEventListener('click',stopCountdown);