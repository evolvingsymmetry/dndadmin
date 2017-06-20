var npcalignment = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil"];
var npcraces = ["Aarakocra", "Aasimar", "Bugbear", "Changeling", "Dragonborn", "Mountain Dwarf", "Hill Dwarf", "Drow", "Eladrin", "High Elf", "Wood Elf", "Firbolg", "Genasi", "Deep Gnome", "Forest Gnome", "Rock Gnome", "Goblin", "Goliath", "Half-Elf", "Half-Orc", "Halfling", "Hobgoblin", "Human", "Kenku", "Kobold", "Lizardfolk", "Minotaur", "Orc", "Revenant", "Shifter", "Tabaxi", "Tiefling", "Triton", "Warforged", "Yaun-ti"];
var npcracesClassic = ["Dragonborn", "Mountain Dwarf", "Hill Dwarf", "Drow", "Eladrin", "High Elf", "Wood Elf", "Deep Gnome", "Forest Gnome", "Goblin", "Half-Elf", "Half-Orc", "Halfling", "Human", "Orc", "Tiefling"];
var npcGender = ["Male", "Female"];




function npcJob(){
  document.getElementById("npcJob").innerHTML = arrSearch(npcBackground);
}

function randomColor(){
  document.getElementById("haircolor").innerHTML = arrSearch(colors);
}

function eyeColor(){
  document.getElementById("eyecolor").innerHTML = arrSearch(eyecolor);
}



////////// Randomize List ///////////
/* This function selects a random item from a list */

function randomEl(list) {
  var i = Math.floor(Math.random() * list.length);
  return list[i];
}

var Gender = "";




////////// Random Name ////////////////

var nameButton = document.querySelector('#npcButton');
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
    document.getElementById("npcName").innerHTML = name;
  });
}



///////////////////////////////////
// Aarakocra //////////////////////
///////////////////////////////////

function aarakocraNameDisplay() {
  $('#npcButton').click(function(){
    var i;
    rnd = Math.random() * nm1.length | 0;
    rnd2 = Math.random() * nm2.length | 0;
    rnd3 = Math.random() * nm5.length | 0;
    if(i < 5){
      while(nm1[rnd] === nm3[rnd3]){
        rnd3 = Math.random() * nm5.length | 0;
      }
      nameObj.fName = nm1[rnd] + nm2[rnd2] + nm5[rnd3];
    }else{
      rnd4 = Math.random() * nm3.length | 0;
      rnd5 = Math.random() * nm4.length | 0;
      nameObj.fName = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd3];
    }
    nameDisplay();
  })
}


///////////////////////////////////
// Aasimar ////////////////////////
///////////////////////////////////

function maleaasimarNameDisplay() {
  $('#npcButton').click(function(){
    var i;
    arnd = Math.random() * anm1.length | 0;
    arnd2 = Math.random() * anm2.length | 0;
    arnd3 = Math.random() * anm3.length | 0;
    arnd4 = Math.random() * anm4.length | 0;
    arnd5 = Math.random() * anm6.length | 0;
    if(i < 6){
      while(anm3[arnd3] === anm1[arnd] || anm3[arnd3] === anm6[arnd5]){
        arnd3 = Math.random() * anm3.length | 0;
      }
      nameObj.fName = anm1[arnd] + anm2[arnd2] + anm3[arnd3] + anm4[arnd4] + anm6[arnd5];
    }else{
      arnd6 = Math.random() * anm5.length | 0;
      arnd7 = Math.random() * anm4.length | 0;
      while(anm5[arnd6] === anm3[arnd3] || anm5[arnd6] === anm6[arnd5]){
        arnd6 = Math.random() * anm5.length | 0;
      }
      nameObj.lName = anm1[arnd] + anm2[arnd2] + anm3[arnd3] + anm4[arnd4] + anm5[arnd6] + anm4[arnd7] + anm6[arnd5];
    }
    nameDisplay();
  })
}


///////////////////////////////////
// Dragonborn /////////////////////
///////////////////////////////////

function maledragonbornNameDisplay() {
  $('#npcButton').click(function(){
    nameObj.fName = arrSearch(dragonbornName1) + arrSearch(dragonbornName2);
    nameObj.lName = arrSearch(dragonbornName3)+arrSearch(dragonbornName4);
    nameDisplay();
  });
};

function femaledragonbornNameDisplay() {
  $('#npcButton').click(function(){
    nameObj.fName = arrSearch(dragonbornName1) + arrSearch(dragonbornName2);
    nameObj.lName = arrSearch(dragonbornName3)+arrSearch(dragonbornName4);
    nameDisplay();
  });
};


///////////////////////////////////
// Human //////////////////////////
///////////////////////////////////

function malehumanNameDisplay() {
  $('#npcButton').click(function(){
    if (Math.random() > 0.8) {
      nameObj.fName = arrSearch(malehumanFNames) + " " + arrSearch(malehumanFNames);
    }
    else {
      nameObj.fName = arrSearch(malehumanFNames);
    }
    nameObj.lName = arrSearch(humanLNames);
    nameDisplay();
  });
};

function femalehumanNameDisplay() {
  $('#npcButton').click(function(){
    if (Math.random() > 0.8) {
      nameObj.fName = arrSearch(femalehumanFNames) + " " + arrSearch(femalehumanFNames);
    }
    else {
      nameObj.fName = arrSearch(femalehumanFNames);
    }
    nameObj.lName = arrSearch(humanLNames);
    nameDisplay();
  });
};


///////////////////////////////////
// Elf ////////////////////////////
///////////////////////////////////

function maleelfNameDisplay() {
  $('#npcButton').click(function(){
    nameObj.fName = arrSearch(maleelfFNames);
    nameObj.lName = arrSearch(elfLNames);
    nameDisplay();
  });
};

function femaleelfNameDisplay() {
  $('#npcButton').click(function(){
    nameObj.fName = arrSearch(femaleelfFNames);
    nameObj.lName = arrSearch(elfLNames);
    nameDisplay();
  });
};

///////////////////////////////////
// Goblin /////////////////////////
///////////////////////////////////

function malegoblinNameDisplay() {
  $('#npcButton').click(function(){
    nameObj.fName = arrSearch(goblinFN1) + arrSearch(goblinFN2) + arrSearch(goblinFN3);
    nameObj.lName = arrSearch(goblinLN1)+arrSearch(goblinLN2);
    nameDisplay();
  });
};

function femalegoblinNameDisplay() {
  $('#npcButton').click(function(){
    nameObj.fName = arrSearch(goblinFN1) + arrSearch(goblinFN2) + arrSearch(goblinFN3);
    nameObj.lName = arrSearch(goblinLN1)+arrSearch(goblinLN2);
    nameDisplay();
  });
};


///////////////////////////////////
// Goliath ////////////////////////
///////////////////////////////////

function malegoliathNameDisplay() {
  $('#npcButton').click(function(){
    nameObj.fName = arrSearch(maleGoliathFN) + arrSearch(maleGoliathFN2);
    nameObj.lName = arrSearch(goliathMid) + " " + arrSearch(goliathSurF) + arrSearch(goliathSurL);
    nameDisplay();
  });
};

function femalegoliathNameDisplay() {
  $('#npcButton').click(function(){
    nameObj.fName = arrSearch(femaleGoliathFN) + arrSearch(femaleGoliathFN2);
    nameObj.lName = arrSearch(goliathMid) + " " + arrSearch(goliathSurF) + arrSearch(goliathSurL);
    nameDisplay();
  });
};

///////////////////////////////////
// Minotaur ///////////////////////
///////////////////////////////////

function maleminotaurNameDisplay() {
  $('#npcButton').click(function(){
    var i;
    if(i < 5){
      rnd = Math.floor(Math.random() * nmFF.length);
      rnd2 = Math.floor(Math.random() * nmFL.length);
      nameObj.fName = nmFF[rnd] + nmFL[rnd2];
    }else{
      rnd = Math.floor(Math.random() * nmMF.length);
      rnd2 = Math.floor(Math.random() * nmML.length);
      nameObj.fName = nmMF[rnd] + nmML[rnd2];
    }

    nameDisplay();
  })
}


///////////////////////////////////
// Orc ////////////////////////////
///////////////////////////////////

function maleorcNameDisplay() {
  $('#npcButton').click(function(){
    if (Math.random() > 0.8) {
      nameObj.fName = arrSearch(maleorcFNames) + " " + arrSearch(maleorcFNames);
    }
    else {
      nameObj.fName = arrSearch(maleorcFNames);
    }
    nameObj.lName = arrSearch(orcLNames);
    nameDisplay();
  });
};

function femaleorcNameDisplay() {
  $('#npcButton').click(function(){
    if (Math.random() > 0.8) {
      nameObj.fName = arrSearch(femaleorcFNames) + " " + arrSearch(femaleorcFNames);
    }
    else {
      nameObj.fName = arrSearch(femaleorcFNames);
    }
    nameObj.lName = arrSearch(orcLNames);
    nameDisplay();
  });
};


///////////////////////////////////
// Tiefling ///////////////////////
///////////////////////////////////

function maletieflingNameDisplay() {
  $('#npcButton').click(function(){
    nameObj.fName = arrSearch(tieflingFN1) + arrSearch(tieflingFN2);
    nameObj.lName = arrSearch(tieflingLN1) + arrSearch(tieflingLN2);
    nameDisplay();
  });
};

function femaletieflingNameDisplay() {
  $('#npcButton').click(function(){
    nameObj.fName = arrSearch(tieflingFN1) + arrSearch(tieflingFN2);
    nameObj.lName = arrSearch(tieflingLN1) + arrSearch(tieflingLN2);
    nameDisplay();
  });
};



///////////////////////////////////
// Yaun Ti ////////////////////////
///////////////////////////////////


function yauntiNameDisplay() {
  $('#npcButton').click(function(){
    var i;
    yrnd = Math.random() * ynm1.length | 0;
    yrnd2 = Math.random() * ynm2.length | 0;
    yrnd3 = Math.random() * ynm3.length | 0;
    yrnd4 = Math.random() * ynm5.length | 0;
    yrnd5 = Math.random() * ynm6.length | 0;
    if(i < 6){
      while(ynm1[yrnd] === ynm3[yrnd3] || ynm3[yrnd3] === ynm6[yrnd5]){
        yrnd3 = Math.random() * ynm3.length | 0;
      }
      ynMs = ynm1[yrnd] + ynm2[yrnd2] + ynm3[yrnd3] + ynm5[yrnd4] + ynm6[yrnd5];
    }else{
      yrnd6 = Math.random() * ynm4.length | 0;
      yrnd7 = Math.random() * ynm2.length | 0;
      while(ynm3[yrnd4] === ynm4[yrnd6] || ynm4[yrnd6] === ynm6[yrnd5]){
        yrnd6 = Math.random() * ynm4.length | 0;
      }
      nameObj.fName = arrSearch(yuantiFN1) + arrSearch(yuantiFN2); 
      nameObj.lName = ynm1[yrnd] + ynm2[yrnd2] + ynm3[yrnd3] + ynm2[yrnd7] + ynm4[yrnd6] + ynm5[yrnd4] + ynm6[yrnd5];
    }

    nameDisplay();
  })
}





////////// Random Stats ///////////////
/* This function selects a random number between 1 and 20 and applies it to each stat */

function getRandomStat() {
    document.getElementById("strstat").innerHTML = Math.floor(Math.random() * 19) + 2;
    document.getElementById("dexstat").innerHTML = Math.floor(Math.random() * 19) + 2;
    document.getElementById("constat").innerHTML = Math.floor(Math.random() * 19) + 2;
    document.getElementById("intstat").innerHTML = Math.floor(Math.random() * 19) + 2;
    document.getElementById("wisstat").innerHTML = Math.floor(Math.random() * 19) + 2;
    document.getElementById("chastat").innerHTML = Math.floor(Math.random() * 19) + 2;
}


///////// Random Alignment /////////////

function getRandomAlignment(){
  if(document.getElementById('alignmentOption').value == "random") {
    document.getElementById("randomAlignment").innerHTML = randomEl(npcalignment);
  }
  if(document.getElementById('alignmentOption').value == "0") {
    document.getElementById("randomAlignment").innerHTML = "Lawful Good";
  }
  if(document.getElementById('alignmentOption').value == "1") {
    document.getElementById("randomAlignment").innerHTML = "Neutral Good";
  }
  if(document.getElementById('alignmentOption').value == "2") {
    document.getElementById("randomAlignment").innerHTML = "Chaotic Good";
  }
  if(document.getElementById('alignmentOption').value == "3") {
    document.getElementById("randomAlignment").innerHTML = "Lawful Neutral";
  }
  if(document.getElementById('alignmentOption').value == "4") {
    document.getElementById("randomAlignment").innerHTML = "Neutral";
  }
  if(document.getElementById('alignmentOption').value == "5") {
    document.getElementById("randomAlignment").innerHTML = "Chaotic Neutral";
  }
  if(document.getElementById('alignmentOption').value == "6") {
    document.getElementById("randomAlignment").innerHTML = "Lawful Evil";
  }
  if(document.getElementById('alignmentOption').value == "7") {
    document.getElementById("randomAlignment").innerHTML = "Neutral Evil";
  }
  if(document.getElementById('alignmentOption').value == "8") {
    document.getElementById("randomAlignment").innerHTML = "Chaotic Evil";
  }
}


///////// Random Race /////////////

function getRandomRace(){
  // if(document.getElementById('raceOption').value == "randomClassic") {
  //   document.getElementById("randomRace").innerHTML = randomEl(npcracesClassic);
  // }
  // if(document.getElementById('raceOption').value == "randomAll") {
  //   document.getElementById("randomRace").innerHTML = randomEl(npcraces);
  // }
  if(document.getElementById('raceOption').value == "aarakocra") {
    document.getElementById("randomRace").innerHTML = "Aarakocra";
  }
  if(document.getElementById('raceOption').value == "aasimar") {
    document.getElementById("randomRace").innerHTML = "Aasimar";
  }
  if(document.getElementById('raceOption').value == "dragonborn") {
    document.getElementById("randomRace").innerHTML = "Dragonborn";
  }
  if(document.getElementById('raceOption').value == "hilldwarf") {
    document.getElementById("randomRace").innerHTML = "Hill Dwarf";
  }
  if(document.getElementById('raceOption').value == "mountaindwarf") {
    document.getElementById("randomRace").innerHTML = "Mountain Dwarf";
  }
  if(document.getElementById('raceOption').value == "drow") {
    document.getElementById("randomRace").innerHTML = "Drow";
  }
  if(document.getElementById('raceOption').value == "eladrin") {
    document.getElementById("randomRace").innerHTML = "Eladrin";
  }
  if(document.getElementById('raceOption').value == "woodelf") {
    document.getElementById("randomRace").innerHTML = "Wood Elf";
  }
  if(document.getElementById('raceOption').value == "genasi") {
    document.getElementById("randomRace").innerHTML = "Genasi";
  }
  if(document.getElementById('raceOption').value == "deepgnome") {
    document.getElementById("randomRace").innerHTML = "Deep Gnome";
  }
  if(document.getElementById('raceOption').value == "forestgnome") {
    document.getElementById("randomRace").innerHTML = "Forest Gnome";
  }
  if(document.getElementById('raceOption').value == "rockgnome") {
    document.getElementById("randomRace").innerHTML = "Rock Gnome";
  }
  if(document.getElementById('raceOption').value == "goblin") {
    document.getElementById("randomRace").innerHTML = "Goblin";
  }
  if(document.getElementById('raceOption').value == "goliath") {
    document.getElementById("randomRace").innerHTML = "Goliath";
  }
  if(document.getElementById('raceOption').value == "halfelf") {
    document.getElementById("randomRace").innerHTML = "Half-Elf";
  }
  if(document.getElementById('raceOption').value == "halforc") {
    document.getElementById("randomRace").innerHTML = "Half-Orc";
  }
  if(document.getElementById('raceOption').value == "halfling") {
    document.getElementById("randomRace").innerHTML = "Halfling";
  }
  if(document.getElementById('raceOption').value == "human") {
    document.getElementById("randomRace").innerHTML = "Human";
  }
  if(document.getElementById('raceOption').value == "kenku") {
    document.getElementById("randomRace").innerHTML = "Kenku";
  }
  if(document.getElementById('raceOption').value == "kobold") {
    document.getElementById("randomRace").innerHTML = "Kobold";
  }
  if(document.getElementById('raceOption').value == "lizardfolk") {
    document.getElementById("randomRace").innerHTML = "Lizardfolk";
  }
  if(document.getElementById('raceOption').value == "minotaur") {
    document.getElementById("randomRace").innerHTML = "Minotaur";
  }
  if(document.getElementById('raceOption').value == "orc") {
    document.getElementById("randomRace").innerHTML = "Orc";
  }
  if(document.getElementById('raceOption').value == "revenant") {
    document.getElementById("randomRace").innerHTML = "Revenant";
  }
  if(document.getElementById('raceOption').value == "shifter") {
    document.getElementById("randomRace").innerHTML = "Shifter";
  }
  if(document.getElementById('raceOption').value == "tabaxi") {
    document.getElementById("randomRace").innerHTML = "Tabaxi";
  }
  if(document.getElementById('raceOption').value == "tiefling") {
    document.getElementById("randomRace").innerHTML = "Tiefling";
  }
  if(document.getElementById('raceOption').value == "triton") {
    document.getElementById("randomRace").innerHTML = "Triton";
  }
  if(document.getElementById('raceOption').value == "warforged") {
    document.getElementById("randomRace").innerHTML = "Warforged";
  }
  if(document.getElementById('raceOption').value == "yuanti") {
    document.getElementById("randomRace").innerHTML = "Yuan-Ti";
  }
}

////////// Random Gender ///////////

function getRandomGender(){
  if(document.getElementById('genderOption').value == "random") {
    document.getElementById("randomGender").innerHTML = randomEl(npcGender);
    console.log(npcGender);
  }
  if(document.getElementById('genderOption').value == "0") {
    document.getElementById("randomGender").innerHTML = "male";
    var Gender = "Male";
    maleNPCname();
  }
  if(document.getElementById('genderOption').value == "1") {
    document.getElementById("randomGender").innerHTML = "female";
    var Gender = "Female";
    femaleNPCname();
  }
}


function maleNPCname(){
  Gender = "Male";
  document.getElementById("npcPronoun1").innerHTML = "He";
  document.getElementById("npcPronoun2").innerHTML = "He";
  document.getElementById("npcPronoun3").innerHTML = "He";
  console.log(Gender);
  if (document.getElementById('raceOption').value == "aarakocra") {
    aarakocraNameDisplay();
  }
  if (document.getElementById('raceOption').value == "aasimar") {
    maleaasimarNameDisplay();
  }
  if (document.getElementById('raceOption').value == "dragonborn") {
    maledragonbornNameDisplay();
  }
  if (document.getElementById('raceOption').value == "drow") {
    maleelfNameDisplay();
  }
  if (document.getElementById('raceOption').value == "eladrin") {
    maleelfNameDisplay();
  }
  if (document.getElementById('raceOption').value == "woodelf") {
    maleelfNameDisplay();
  }
  if (document.getElementById('raceOption').value == "goblin") {
    malegoblinNameDisplay();
  }
  if (document.getElementById('raceOption').value == "goliath") {
    malegoliathNameDisplay();
  }
  if (document.getElementById('raceOption').value == "halfelf") {
    maleelfNameDisplay();
  }
  if (document.getElementById('raceOption').value == "human") {
    malehumanNameDisplay();
  }
  if (document.getElementById('raceOption').value == "minotaur") {
    maleminotaurNameDisplay();
  }
  if (document.getElementById('raceOption').value == "orc") {
    maleorcNameDisplay();
  }
  if (document.getElementById('raceOption').value == "tiefling") {
    maletieflingNameDisplay();
  }
  if (document.getElementById('raceOption').value == "yuanti") {
    yauntiNameDisplay();
  }
}

function femaleNPCname(){
  Gender = "Female";
  document.getElementById("npcPronoun1").innerHTML = "She";
  document.getElementById("npcPronoun2").innerHTML = "She";
  document.getElementById("npcPronoun3").innerHTML = "She";
  console.log(Gender);

  if (document.getElementById('raceOption').value == "aarakocra") {
    aarakocraNameDisplay();
  }
  if (document.getElementById('raceOption').value == "dragonborn") {
    femaledragonbornNameDisplay();
  }
  if (document.getElementById('raceOption').value == "drow") {
    femaleelfNameDisplay();
  }
  if (document.getElementById('raceOption').value == "eladrin") {
    femaleelfNameDisplay();
  }
  if (document.getElementById('raceOption').value == "woodelf") {
    femaleelfNameDisplay();
  }
  if (document.getElementById('raceOption').value == "goblin") {
    femalegoblinNameDisplay();
  }
  if (document.getElementById('raceOption').value == "goliath") {
    femalegoliathNameDisplay();
  }
  if (document.getElementById('raceOption').value == "halfelf") {
    femaleelfNameDisplay();
  }
  if (document.getElementById('raceOption').value == "human") {
    femalehumanNameDisplay();
  }
  if (document.getElementById('raceOption').value == "orc") {
    femaleorcNameDisplay();
  }
  if (document.getElementById('raceOption').value == "tiefling") {
    femaletieflingNameDisplay();
  }
  if (document.getElementById('raceOption').value == "yuanti") {
    yauntiNameDisplay();
  }
}


///////////////////////////////
// Age ////////////////////////
///////////////////////////////

function randomAge(){
  if (document.getElementById('raceOption').value == "aarakocra") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 30) + 18;
  }
  if (document.getElementById('raceOption').value == "aasimar") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 110) + 18;
  }
  if (document.getElementById('raceOption').value == "dragonborn") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 80) + 15;
  }
  if (document.getElementById('raceOption').value == "hilldwarf") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 350) + 45;
  }
  if (document.getElementById('raceOption').value == "mountaindwarf") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 350) + 45;
  }
  if (document.getElementById('raceOption').value == "drow") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 750) + 25;
  }
  if (document.getElementById('raceOption').value == "eladrin") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 300) + 25;
  }
  if (document.getElementById('raceOption').value == "woodelf") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 750) + 25;
  }
  if (document.getElementById('raceOption').value == "genasi") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 80) + 18;
  }
  if (document.getElementById('raceOption').value == "deepgnome") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 250) + 20;
  }
  if (document.getElementById('raceOption').value == "forestgnome") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 450) + 40;
  }
  if (document.getElementById('raceOption').value == "rockgnome") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 450) + 40;
  }
  if (document.getElementById('raceOption').value == "goblin") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 80) + 18;
  }
  if (document.getElementById('raceOption').value == "goliath") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 100) + 18;
  }
  if (document.getElementById('raceOption').value == "halfelf") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 180) + 18;
  }
  if (document.getElementById('raceOption').value == "halforc") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 80) + 10;
  }
  if (document.getElementById('raceOption').value == "halfling") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 150) + 18;
  }
  if (document.getElementById('raceOption').value == "human") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 90) + 18;
  }
  if (document.getElementById('raceOption').value == "kenku") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 60) + 12;
  }
  if (document.getElementById('raceOption').value == "kobold") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 100) + 5;
  }
  if (document.getElementById('raceOption').value == "lizardfolk") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 120) + 12;
  }
  if (document.getElementById('raceOption').value == "minotaur") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 150) + 18;
  }
  if (document.getElementById('raceOption').value == "orc") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 75) + 14;
  }
  if (document.getElementById('raceOption').value == "revenant") {
    document.getElementById("ageNumber").innerHTML = "1";
  }
  if (document.getElementById('raceOption').value == "shifter") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 80) + 18;
  }
  if (document.getElementById('raceOption').value == "tabaxi") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 80) + 18;
  }
  if (document.getElementById('raceOption').value == "tiefling") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 80) + 18;
  }
  if (document.getElementById('raceOption').value == "triton") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 200) + 18;
  }
  if (document.getElementById('raceOption').value == "warforged") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 200) + 1;
  }
  if (document.getElementById('raceOption').value == "yuanti") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 200) + 13;
  }
}

///////////////////////////////
// Desciptions ////////////////
///////////////////////////////

function randomDescription(){
  if (document.getElementById('raceOption').value == "aarakocra") {
    document.getElementById("npcdescription1").innerHTML = arrSearch(aarakocraFeathers);
    document.getElementById("npcdescription2").innerHTML = arrSearch(aarakocraEye);
    document.getElementById("npcdescription3").innerHTML = arrSearch(aarakocraCities);
    document.getElementById("npcdescription4").innerHTML = arrSearch(aarakocraReligion);
  }
  if (document.getElementById('raceOption').value == "aasimar") {
    document.getElementById("npcdescription1").innerHTML = arrSearch(aasimarHair);
    document.getElementById("npcdescription2").innerHTML = arrSearch(aasimarEye) + ", " + arrSearch(aasimarSkin);
    document.getElementById("npcdescription3").innerHTML = arrSearch(aasimarCities);

  }
  if (document.getElementById('raceOption').value == "dragonborn") {
    document.getElementById("npcdescription1").innerHTML = arrSearch(dragonbornScales);
    document.getElementById("npcdescription2").innerHTML = arrSearch(dragonbornEye);
    document.getElementById("npcdescription3").innerHTML = arrSearch(dragonbornCities);
    document.getElementById("npcdescription4").innerHTML = arrSearch(dragonbornReligion);
  }
  if (document.getElementById('raceOption').value == "hilldwarf") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 350) + 45;
  }
  if (document.getElementById('raceOption').value == "mountaindwarf") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 350) + 45;
  }
  if (document.getElementById('raceOption').value == "drow") {
    document.getElementById("npcdescription1").innerHTML = arrSearch(drowHair);
    document.getElementById("npcdescription2").innerHTML = arrSearch(drowEye);
    document.getElementById("npcdescription3").innerHTML = arrSearch(drowSkin);
    document.getElementById("npcdescription4").innerHTML = arrSearch(drowReligion);
  }
  if (document.getElementById('raceOption').value == "eladrin") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 300) + 25;
  }
  if (document.getElementById('raceOption').value == "woodelf") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 750) + 25;
  }
  if (document.getElementById('raceOption').value == "genasi") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 80) + 18;
  }
  if (document.getElementById('raceOption').value == "deepgnome") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 250) + 20;
  }
  if (document.getElementById('raceOption').value == "forestgnome") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 450) + 40;
  }
  if (document.getElementById('raceOption').value == "rockgnome") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 450) + 40;
  }
  if (document.getElementById('raceOption').value == "goblin") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 80) + 18;
  }
  if (document.getElementById('raceOption').value == "goliath") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 100) + 18;
  }
  if (document.getElementById('raceOption').value == "halfelf") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 180) + 18;
  }
  if (document.getElementById('raceOption').value == "halforc") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 80) + 10;
  }
  if (document.getElementById('raceOption').value == "halfling") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 150) + 18;
  }
  if (document.getElementById('raceOption').value == "human") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 90) + 18;
  }
  if (document.getElementById('raceOption').value == "kenku") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 60) + 12;
  }
  if (document.getElementById('raceOption').value == "kobold") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 100) + 5;
  }
  if (document.getElementById('raceOption').value == "lizardfolk") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 120) + 12;
  }
  if (document.getElementById('raceOption').value == "minotaur") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 150) + 18;
  }
  if (document.getElementById('raceOption').value == "orc") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 75) + 14;
  }
  if (document.getElementById('raceOption').value == "revenant") {
    document.getElementById("ageNumber").innerHTML = "1";
  }
  if (document.getElementById('raceOption').value == "shifter") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 80) + 18;
  }
  if (document.getElementById('raceOption').value == "tabaxi") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 80) + 18;
  }
  if (document.getElementById('raceOption').value == "tiefling") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 80) + 18;
  }
  if (document.getElementById('raceOption').value == "triton") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 200) + 18;
  }
  if (document.getElementById('raceOption').value == "warforged") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 200) + 1;
  }
  if (document.getElementById('raceOption').value == "yuanti") {
    document.getElementById("ageNumber").innerHTML = Math.floor(Math.random() * 200) + 13;
  }
}



// ////////// NPC Descriptions ///////////

// $('#npcbutton').click(function() {
//   $('#npcname').text(randomEl(npcnames) + ' ' + randomEl(npcnames));
//   $('#npcdescription').text('A ' + randomEl(genders) + ' ' + randomEl(races));
//   selectElementContents($('#npcdescription')[0]);
// });

// function selectElementContents(el) {
//   var range = document.createRange();
//   range.selectNodeContents(el);
//   var sel = window.getSelection();
//   sel.removeAllRanges();
//   sel.addRange(range);
// }


// ////////////////////////////////////////////////////////////////
// //  Random Name Generators//////////////////////////////////////
// ////////////////////////////////////////////////////////////////


// var nameButton = document.querySelector('#npcButton');
// var nameObj = {
//   fName: "",
//   lName: "",
// };

// function arrSearch(arrName) {
//   return arrName[Math.floor(Math.random() * arrName.length)];
//   }

// function nameDisplay() {
//   $(document).ready(function(){
//     var name = (nameObj.fName + " " + nameObj.lName);
//     $("#name").fadeOut('slow', function(){
//       $("#name").html(name).fadeIn('slow');
//     });
//   });
// }



// /// Display Male Dragonborn Name ///

// function maledragonbornNameDisplay() {
//   $('#npcButton').click(function(){
//     nameObj.fName = arrSearch(dragonbornName1) + arrSearch(dragonbornName2);
//     nameObj.lName = arrSearch(dragonbornName3)+arrSearch(dragonbornName4);
//     nameDisplay();
//   });
// };

// function femaledragonbornNameDisplay() {
//   $('#npcButton').click(function(){
//     nameObj.fName = arrSearch(dragonbornName1) + arrSearch(dragonbornName2);
//     nameObj.lName = arrSearch(dragonbornName3)+arrSearch(dragonbornName4);
//     nameDisplay();
//   });
// };



// /// Display Dwarf Name ///

// function dwarfNameDisplay() {
//   $('#npcButton').click(function(){
//     nameObj.fName = arrSearch(dwarfFNames);
//     nameObj.lName = arrSearch(dwarfLNames1) + arrSearch(dwarfLNames2);
//     if (Math.random() > 0.9) {
//       nameObj.lName = nameObj.lName + " " + "'" + arrSearch(dwarfCog) + "'";
//     }
//     nameDisplay();
//   });
// };


// /// Display Male Elf Name ///

// function maleelfNameDisplay() {
//   $('#npcButton').click(function(){
//     nameObj.fName = arrSearch(maleelfFNames);
//     nameObj.lName = arrSearch(elfLNames);
//     nameDisplay();
//   });
// };


// /// Display Female Elf Name ///

// function femaleelfNameDisplay() {
//   $('#npcButton').click(function(){
//     nameObj.fName = arrSearch(femaleelfFNames);
//     nameObj.lName = arrSearch(elfLNames);
//     nameDisplay();
//   });
// };





// function getRandomName(){
//   document.getElementById('randomRaceNames').addEventListener("change", function() {
//       if(document.getElementById('randomRaceNames').value == "dwarfName") {
//           console.log(this.value);
//           nameButton.addEventListener('click', dwarfNameDisplay());
//           document.getElementById("npcgenderandrace").innerHTML = "Male Dwarf";
//       }
//       else if(document.getElementById('randomRaceNames').value == "maleelfName") {
//           console.log(this.value);
//           nameButton.addEventListener('click', maleelfNameDisplay());
//           document.getElementById("npcgenderandrace").innerHTML = "Male Elf";
//       }
//       else if(document.getElementById('randomRaceNames').value == "femaleelfName") {
//           console.log(this.value);
//           nameButton.addEventListener('click', femaleelfNameDisplay());
//           document.getElementById("npcgenderandrace").innerHTML = "Female Elf";
//       }
//       else if(document.getElementById('randomRaceNames').value == "malehumanName") {
//           console.log(this.value);
//           nameButton.addEventListener('click', malehumanNameDisplay());
//           document.getElementById("npcgenderandrace").innerHTML = "Male Human";
//       }
//       else if(document.getElementById('randomRaceNames').value == "femalehumanName") {
//           console.log(this.value);
//           nameButton.addEventListener('click', femalehumanNameDisplay());
//           document.getElementById("npcgenderandrace").innerHTML = "Female Human";
//       }
//       else if(document.getElementById('randomRaceNames').value == "maleorcName") {
//           console.log(this.value);
//           nameButton.addEventListener('click', maleorcNameDisplay());
//           document.getElementById("npcgenderandrace").innerHTML = "Male Orc";
//       }
//       else if(document.getElementById('randomRaceNames').value == "femaleorcName") {
//           console.log(this.value);
//           nameButton.addEventListener('click', femaleorcNameDisplay());
//           document.getElementById("npcgenderandrace").innerHTML = "Female Orc";
//       }
//       else if(document.getElementById('randomRaceNames').value == "malegoliathName") {
//           console.log(this.value);
//           nameButton.addEventListener('click', malegoliathNameDisplay());
//           document.getElementById("npcgenderandrace").innerHTML = "Male Goliath";
//       }
//       else if(document.getElementById('randomRaceNames').value == "femalegoliathName") {
//           console.log(this.value);
//           nameButton.addEventListener('click', femalegoliathNameDisplay());
//           document.getElementById("npcgenderandrace").innerHTML = "Female Goliath";
//       }
//       else if(document.getElementById('randomRaceNames').value == "maledragonbornName") {
//           console.log(this.value);
//           nameButton.addEventListener('click', maledragonbornNameDisplay());
//           document.getElementById("npcgenderandrace").innerHTML = "Male Dragonborn";
//       }
//       else if(document.getElementById('randomRaceNames').value == "femaledragonbornName") {
//           console.log(this.value);
//           nameButton.addEventListener('click', femaledragonbornNameDisplay());
//           document.getElementById("npcgenderandrace").innerHTML = "Female Dragonborn";
//       }
//       else if(document.getElementById('randomRaceNames').value == "malegoblinName") {
//           console.log(this.value);
//           nameButton.addEventListener('click', malegoblinNameDisplay());
//           document.getElementById("npcgenderandrace").innerHTML = "Male Goblin";
//       }
//       else if(document.getElementById('randomRaceNames').value == "femalegoblinName") {
//           console.log(this.value);
//           nameButton.addEventListener('click', femalegoblinNameDisplay());
//           document.getElementById("npcgenderandrace").innerHTML = "Female Goblin";
//       }
//       else if(document.getElementById('randomRaceNames').value == "maletieflingName") {
//           console.log(this.value);
//           nameButton.addEventListener('click', maletieflingNameDisplay());
//           document.getElementById("npcgenderandrace").innerHTML = "Male Tiefling";
//       }
//       else if(document.getElementById('randomRaceNames').value == "femaletieflingName") {
//           console.log(this.value);
//           nameButton.addEventListener('click', femaletieflingNameDisplay());
//           document.getElementById("npcgenderandrace").innerHTML = "Female Tiefling";
//       }
//       showDiv();
//       document.getElementById("npcalignment").innerHTML = pickAlignment();
//   });
// }

// getRandomName();



// /// Random Skills

// function getRandomStat() {
//     document.getElementById("strstat").innerHTML = Math.floor(Math.random() * 19) + 2;
//     document.getElementById("dexstat").innerHTML = Math.floor(Math.random() * 19) + 2;
//     document.getElementById("constat").innerHTML = Math.floor(Math.random() * 19) + 2;
//     document.getElementById("intstat").innerHTML = Math.floor(Math.random() * 19) + 2;
//     document.getElementById("wisstat").innerHTML = Math.floor(Math.random() * 19) + 2;
//     document.getElementById("chastat").innerHTML = Math.floor(Math.random() * 19) + 2;
// }



// /// Alignment

// function pickAlignment(){
//   document.getElementById("npcalignment").innerHTML = npcalignment[Math.floor(Math.random()*npcalignment.length)];
// }


// /// Traits

// function pickTrait(){
//   document.getElementById("npcTrait").innerHTML = npctraits[Math.floor(Math.random()*npctraits.length)];
// }


// /// Backgrounds

// function pickBackground(){
//   document.getElementById("npcBackground").innerHTML = npcbackground[Math.floor(Math.random()*npcbackground.length)];
// }


// /// Bonds

// function pickBond(){
//   document.getElementById("npcBond").innerHTML = npcBond[Math.floor(Math.random()*npcBond.length)];
// }


// /// Ideal

// function pickIdeal(){
//   document.getElementById("npcIdeal").innerHTML = npcIdeal[Math.floor(Math.random()*npcIdeal.length)];
// }


// /// Show Div

// function showDiv() {
//    document.getElementById('tableDiv').style.display = "block";
// }





