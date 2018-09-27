let clockBinary = document.getElementsByClassName("clock-binary")[0];
let clockDigital = document.getElementsByClassName("clock-digital")[0];
let hourB = "";
let minuteB = "";
let secondB = "";

function formatIn6Bits(binary) {
  if (binary.length != 6) {
    for (let i = binary.length; i < 6; i++) {
      binary = "0" + binary.toString();
    }

    return binary;
  } else {
    return binary;
  }
}
function ConvertIntToBinary6Bits(int) {
  let binary = parseInt(int, 10).toString(2);

  return binary;
}
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
  // converting times to binary
  hourB = formatIn6Bits(ConvertIntToBinary6Bits(timeNow.getHours()));
  minuteB = formatIn6Bits(ConvertIntToBinary6Bits(timeNow.getMinutes()));
  secondB = formatIn6Bits(ConvertIntToBinary6Bits(timeNow.getSeconds()));

  //hours binary visual
  let bitHour = document.getElementsByClassName("bitHour");
  let bitMinute = document.getElementsByClassName("bitMinute");
  let bitSecond = document.getElementsByClassName("bitSecond");
  let totaalBits = 6;
  console.log(hourB);
  for (let i = 0; i < totaalBits; i++) {
    hourB[i] == 0
      ? (bitHour[i].style.backgroundColor = "black")
      : (bitHour[i].style.backgroundColor = "red");

    minuteB[i] == 0
      ? (bitMinute[i].style.backgroundColor = "black")
      : (bitMinute[i].style.backgroundColor = "red");
    secondB[i] == 0
      ? (bitSecond[i].style.backgroundColor = "black")
      : (bitSecond[i].style.backgroundColor = "red");
  }
}

setInterval(UpdateClock, 1000);
