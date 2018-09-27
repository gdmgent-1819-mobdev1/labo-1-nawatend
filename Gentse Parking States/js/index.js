/*
#FF873E - orange
#68FF4E - green
#FF4C3E - red
*/

let parkings = document.getElementsByClassName("parkings")[0];
// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

// get json data
getJSON(
  "https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json",
  function(error, data) {
    // show error
    if (error) {
      // do something here
      alert("Error Bitch");
      return false;
    }

    // loop through all parking places

    for (let i = 0; i < data.length; i++) {
      let totaalSpot = data[i].parkingStatus.totalCapacity;
      let currentAvailableSpot = data[i].parkingStatus.availableCapacity;
      let percent = (currentAvailableSpot / totaalSpot) * 100;

      let div = document.createElement("div");
      let h1 = document.createElement("h1");

      if (percent > 50 && percent < 100) {
        div.setAttribute("class", "parking parking-green");
      } else if (percent >= 20 && percent <= 50) {
        div.setAttribute("class", "parking parking-orange");
      } else {
        div.setAttribute("class", "parking parking-red");
      }
      h1.innerHTML += data[i].name;

      div.appendChild(h1);
      parkings.appendChild(div);
    }
  }
);
