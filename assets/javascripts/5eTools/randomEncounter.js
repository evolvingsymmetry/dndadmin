


function randomChance(){
  var i = Math.random();
  if (i < 0.02) {
    console.log("Disaster!");
    document.getElementById("encountertype").innerHTML = "Disaster!";
    document.getElementById("encounterText").innerHTML = arrSearch(disasters);
  }
  else if (i < 0.17) {
    console.log("Hostile Encounter!");
    document.getElementById("encountertype").innerHTML = "Hostile Encounter!";
    document.getElementById("encounterText").innerHTML = arrSearch(hostileencounters);
  }
  else if (i < 0.24) {
    console.log("Complications!");
    document.getElementById("encountertype").innerHTML = "Complications!";
    document.getElementById("encounterText").innerHTML = arrSearch(complications);
  }
  else if (i < 0.44) {
    console.log("Nothing of note.");
    document.getElementById("encountertype").innerHTML = "Nothing of note.";
    document.getElementById("encounterText").innerHTML = "An uneventful few hours of travel.";
  }
  else if (i < 0.89) {
    console.log("Random Encounter!");
    document.getElementById("encountertype").innerHTML = "Random Encounter!";
    document.getElementById("encounterText").innerHTML = arrSearch(randomencounter);
  }
  else if (i < 0.97) {
    console.log("Chance Encounter!");
    document.getElementById("encountertype").innerHTML = "Chance Encounter!";
    document.getElementById("encounterText").innerHTML = arrSearch(chanceencounter);
  }
  else {
    console.log("Stroke of luck!");
    document.getElementById("encountertype").innerHTML = "Stroke of Luck!";
    document.getElementById("encounterText").innerHTML = arrSearch(luck);
  }
}

console.log(randomChance());



////////// Randomize List ///////////
/* This function selects a random item from a list */

function randomEl(list) {
  var i = Math.floor(Math.random() * list.length);
  return list[i];
}

var Gender = "";




////////// Random Name ////////////////

var nameButton = document.querySelector('#encounterButton');
var nameObj = {
  fName: "",
  lName: "",
};

function arrSearch(arrName) {
  return arrName[Math.floor(Math.random() * arrName.length)];
  }

function nameDisplay() {
  $(document).ready(function(){
    var name = (nameObj.fName + " " + nameObj.lName);
    document.getElementById("encounterText").innerHTML = name;
  });
}




///////////////////////////////////
// Wilderness /////////////////////
///////////////////////////////////

function getRandomEncounter(){
  if(document.getElementById('encounterOption').value == "1") {
    document.getElementById("encounterText").innerHTML = arrSearch(wilderness);
  }
  if(document.getElementById('encounterOption').value == "2") {
    document.getElementById("encounterText").innerHTML = arrSearch(dungeon);
  }
  if(document.getElementById('encounterOption').value == "3") {
    document.getElementById("encounterText").innerHTML = arrSearch(sea);
  }
  if(document.getElementById('encounterOption').value == "4") {
    document.getElementById("encounterText").innerHTML = arrSearch(city);
  }
  if(document.getElementById('encounterOption').value == "5") {
    document.getElementById("encounterText").innerHTML = arrSearch(road);
  }
}
