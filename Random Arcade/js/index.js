let arcadeCharacter = [];

let charbox = document.getElementsByClassName("charbox")[0];
let randomNr;
for (let i = 0; i < 7; i++) {
  charbox.innerHTML += "<br>";
  for (let n = 0; n < 7; n++) {
    let div = document.createElement("div");
    randomNr = Math.floor(Math.random() * 2);
    console.log(randomNr);
    if (randomNr != 0) {
      div.setAttribute("class", "whitebox");
    } else {
      div.setAttribute("class", "smallblackbox");
    }
    charbox.appendChild(div);
  }
}
