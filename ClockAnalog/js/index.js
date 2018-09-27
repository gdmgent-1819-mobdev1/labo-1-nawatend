let analogDigital = document.getElementsByClassName("clock-analog")[0];

let nums = document.getElementsByClassName("num");
let rotateSelfNum = document.getElementsByClassName("rotateSelfNum");
let degree = 30;

let hourArrow = document.getElementsByClassName("hourArrow")[0];
let minuteArrow = document.getElementsByClassName("minuteArrow")[0];
let secondArrow = document.getElementsByClassName("secondArrow")[0];

function UpdateClock() {
  let timeNow = new Date();
  let hours = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let seconds = timeNow.getSeconds();

  if (hours > 12) {
    hours -= 12;
  }
  UpdateArrows(timeNow);
}

function getHourDegree(timeNow) {
  let degree = timeNow.getHours() * 30 - 90 + timeNow.getMinutes() * 0.5;
  return degree;
}

function getMinuteDegree(timeNow) {
  let degree = timeNow.getMinutes() * 6 - 90;
  return degree;
}

function getSecondDegree(timeNow) {
  let degree = timeNow.getSeconds() * 6 - 90;
  return degree;
}

function UpdateArrows(timeNow) {
  hourArrow.style.transform = "rotate(" + getHourDegree(timeNow) + "deg)";
  minuteArrow.style.transform = "rotate(" + getMinuteDegree(timeNow) + "deg)";
  secondArrow.style.transform = "rotate(" + getSecondDegree(timeNow) + "deg)";
}

setInterval(UpdateClock, 100);
for (let i = 0; i < nums.length; i++) {
  nums[i].style.transform = "rotate(" + degree + "deg)";
  rotateSelfNum[i].style.transform = "rotate(" + -1 * degree + "deg)";

  degree += 30;
}
