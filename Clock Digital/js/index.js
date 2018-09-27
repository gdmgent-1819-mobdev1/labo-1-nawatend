let clockDigital = document.getElementsByClassName("clock-digital")[0];

function UpdateClock() {
  let timeNow = new Date();
  let hours = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let seconds = timeNow.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let time = hours + ":" + minutes + ":" + seconds;

  clockDigital.textContent = time;
}

setInterval(UpdateClock, 100);
