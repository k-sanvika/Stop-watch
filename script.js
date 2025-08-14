let h1 = document.getElementById("h1");
let stop = document.getElementById("stop");
let start = document.getElementById("start");
let reset = document.getElementById("reset");

let sec = 00;
let mins = 00;
let hrs = 00;
let timerId = null;

// console.log("hello");

stop.addEventListener("click", () => {
  console.log("working");
  clearInterval(timerId);
});

start.addEventListener("click", () => {
  console.log("working");
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 1000);
});

reset.addEventListener("click", () => {
  console.log("working");
  clearInterval(timerId);
  h1.innerHTML = `00 : 00 : 00`;
  mins = 00;
  sec = 00;
  hrs = 00;
});

function startTimer() {
  sec++;
  if (sec === 60) {
    sec = 0;
    mins++;
    if (mins === 60) {
      mins = 0;
      hrs++;
    }
  }

  let secStr = sec < 10 ? `0${sec}` : sec;
  let minStr = mins < 10 ? `0${mins}` : mins;
  let hrStr = hrs < 10 ? `0${hrs}` : hrs;
  h1.innerHTML = `${hrStr} : ${minStr} : ${secStr}`;
}
