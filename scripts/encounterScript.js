let obj = JSON.parse(monstersJSON);
let fullMonsterArray = obj.monsterDataArrays;
let preCombatArray = [];

(function(){
  //populating monster drop down menu
  let dropDown = document.getElementById("dropDownForMonsters");
  Array.from(fullMonsterArray).forEach(function(element){
    let option = document.createElement("OPTION");
    let optionText = document.createTextNode("CR: " + element.challenge_rating + " -> " + element.name);
    option.appendChild(optionText);
    dropDown.appendChild(option);
  });

  applyEvents();

  //disables add player button and re-enables with completed input fields
  let inputs = document.querySelectorAll(".playerFormInput");
  addPlayerButton.disabled = true;
  for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input',() => {
      let values = [];
      inputs.forEach(v => values.push(v.value));
      addPlayerButton.disabled = values.includes('');
    })
  }
}());

function applyEvents(){
  let addMonsterButton = document.getElementById("addMonsterButton");
  addMonsterButton.onclick = function(){preCombatRoster("monster")};

  let addPlayerButton = document.getElementById("addPlayerButton");
  addPlayerButton.onclick = function(){preCombatRoster("player")};

  let startGameButton = document.getElementById("startGameButton");
  startGameButton.onclick = function(){startGame()};

  dropDownForMonsters.onchange = function(){addMonsterButton.disabled = false;};
}

function playerDataFetch(){
  //retrieves player data from HTML and returns array
  let playerName = document.getElementById("playerName").value;
  let playerHP = document.getElementById("playerHP").value;
  let dexMod = document.getElementById("dexMod").value;
  let initiativeRoll = document.getElementById("initiativeRoll").value;
  let aggrIni = Number(initiativeRoll) + Number(dexMod);
  let playerAC = document.getElementById("armourClass").value;

  let playerDataArray = [aggrIni, playerName, playerHP, playerAC];
  return playerDataArray;
}

function preCombatRoster(participantType){
  //immediately enables start game button with first entry
  document.getElementById("startGameButton").disabled = false;
  let preComatStaging = document.getElementById("preCombatStaging");
  if (participantType == "player") {
    preCombatArray.push(playerDataFetch());
    preComatStaging.appendChild(createElementWithContent("P", document.getElementById("playerName").value));
  }
  else if (participantType == "monster") {
    let dropDown = document.getElementById("dropDownForMonsters");
    let selectedMonsterIndex = dropDown.options[dropDown.selectedIndex].index - 1;
    let modifierArray = [-5,-4,-4,-3,-3,-2,-2,-1,-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10];
    let monName = fullMonsterArray[selectedMonsterIndex].name;
    let monAggrIni = (modifierArray[fullMonsterArray[selectedMonsterIndex].dexterity-1]) + (Math.floor(Math.random() * 20) + 1);
    let monVitalStats = [monAggrIni, monName];
    preCombatArray.push(monVitalStats);
    preCombatStaging.appendChild(createElementWithContent("P", monName));
  }
}

function startGame(){
  document.getElementById("monsterPanel").style.display = "none";
  document.getElementById("playerPanel").style.display = "none";
  document.getElementById("startGameButton").style.display = "none";
  document.getElementById("preCombatStaging").style.display = "none";
  //sorts list of participants by aggregate initiative, largest to smallest
  preCombatArray.sort((a,b) => b[0] - a[0]);
  preCombatArray.forEach(function(element){
    if (element.length == 2) {
      monsterCreator(element[0], element[1]);
    }
    if (element.length == 4) {
      playerCreator(element[0], element[1], element[2], element[3]);
    }
  });
  duringGame();
}

function duringGame(){
  //display next button
  let navbar = document.getElementById("navbar")
  navbar.style.display = "block";
  let currentCombatArray = document.getElementsByClassName("participant");

  Array.from(currentCombatArray).forEach(function(element){
    element.classList.add("notCurrentPlayerColour");
  });

  currentCombatArray[0].classList.replace("notCurrentPlayerColour", "currentPlayerColour");
  let currentlySelected = 0;

  navbar.onclick = function(){
    currentCombatArray[currentlySelected].classList.toggle("currentPlayerColour");
    currentCombatArray[currentlySelected].classList.toggle("notCurrentPlayerColour");
    if (currentlySelected == Number((currentCombatArray.length)-1)) {
      currentlySelected = 0;
    }
    else {
      currentlySelected += 1;
    }
    currentCombatArray[currentlySelected].classList.toggle("currentPlayerColour");
    currentCombatArray[currentlySelected].classList.toggle("notCurrentPlayerColour");
  };
}

function playerCreator(aggIni, playerName, playerHP, playerAC){
  let fightBox = document.getElementById("fightBox");
  let participantBox = createElementWithSingleAttribute("DIV", "class", "participant");

  //create playerDetails div
  let participantTopBox = createElementWithSingleAttribute("DIV", "class", "participantTopBox");
  let participantTopBoxLeft = createElementWithSingleAttribute("DIV", "class", "participantTopBoxLeft");
  let participantTopBoxRight = createElementWithSingleAttribute("DIV", "class", "participantTopBoxRight");
//player Name
  let namePara = createElementWithContent("P", playerName);
  participantTopBoxLeft.appendChild(namePara);

//player HP
  let hpPara = createElementWithContent("P", "HP:");
  let hpNumBox = createElementWithSingleAttribute("INPUT", "type", "number");
  hpNumBox.setAttribute("value", playerHP);
  hpNumBox.setAttribute("class", "hpCalcInput");
  hpPara.appendChild(hpNumBox);
  participantTopBoxLeft.appendChild(hpPara);

//player HP calculator
  let hPCalc = createElementWithContent("P", "");
  let calcElement = createElementWithSingleAttribute("INPUT", "type", "number");
  calcElement.setAttribute("class", "hpMathsInput");
  hPCalc.appendChild(calcElement);
  let plusButton = createElementWithContent("BUTTON", "+");
  plusButton.setAttribute("type", "button");
  plusButton.setAttribute("type", "button");
  plusButton.onclick = function(){
    let currentHP = Number(hpNumBox.value);
    let modValue = Number(calcElement.value);
    calcElement.value = "";
    hpNumBox.setAttribute("value", Number(currentHP+modValue));
  }
  let minusButton = createElementWithContent("BUTTON", "-");
  minusButton.onclick = function(){
    let currentHP = Number(hpNumBox.value);
    let modValue = Number(calcElement.value);
    calcElement.value = "";
    hpNumBox.setAttribute("value", Number(currentHP-modValue));
  }
  hPCalc.appendChild(plusButton);
  hPCalc.appendChild(minusButton);
  participantTopBoxLeft.appendChild(hPCalc);

// player Initiative
  let aggrIniPara = createElementWithContent("P", "Aggr. Initiative: " + aggIni);
  participantTopBoxLeft.appendChild(aggrIniPara);

//player Armour Class
  let acPara = createElementWithContent("P", "Armour Class: " + playerAC);
  participantTopBoxLeft.appendChild(acPara);

  participantBox.appendChild(participantTopBoxLeft);

  //create conditionSymbols div
  let conSym = createElementWithSingleAttribute("DIV", "class", "conditionSymbols");

  conSym.appendChild(createABBRandI("Blinded", "fas fa-eye-slash"));
  conSym.appendChild(createABBRandI("Deafened", "fas fa-deaf"));
  conSym.appendChild(createABBRandI("Prone", "fas fa-arrow-down"));
  conSym.appendChild(createABBRandI("Charmed", "fas fa-heart"));

  //Special case for exhausted condition
  let exhaustCount = document.getElementsByClassName("fa-bed").length;
  let exhAbbr = document.createElement("ABBR");
  exhAbbr.setAttribute("title", "Exhausted");
  let exhElement = document.createElement("I");
  exhElement.setAttribute("class", "fas fa-bed");
  exhAbbr.appendChild(exhElement);
  conSym.appendChild(exhAbbr);
  let exhaustSuper = createElementWithSingleAttribute("SUP", "class", "spec"+exhaustCount);
  let exSupText = document.createTextNode("0");
  exhaustSuper.appendChild(exSupText);
  conSym.appendChild(exhaustSuper);

  let deathSavingDiv = createElementWithSingleAttribute("DIV", "class", "deathSaving");
  let heartBeat = createElementWithSingleAttribute("I", "class", "fas fa-heartbeat");
  let skullBones = createElementWithSingleAttribute("I", "class", "fas fa-skull-crossbones");

  deathSavingDiv.appendChild(heartBeat);
  deathSavingDiv.appendChild(heartBeat.cloneNode(true));
  deathSavingDiv.appendChild(heartBeat.cloneNode(true));
  deathSavingDiv.appendChild(skullBones);
  deathSavingDiv.appendChild(skullBones.cloneNode(true));
  deathSavingDiv.appendChild(skullBones.cloneNode(true));

  conSym.appendChild(deathSavingDiv);
  participantTopBoxRight.appendChild(conSym);
  participantBox.appendChild(participantTopBoxRight);
  fightBox.appendChild(participantBox);

  //SYMBOL COLOUR CHANGE
  let conditionArray = document.querySelectorAll("i.fas:not(.fa-bed)");
  conditionArray.forEach(function(element){
    element.onclick = function(){
      element.classList.toggle("activeColour");
    };
  });

  exhElement.onclick = function(){
    let exCount = Number(exhaustSuper.innerHTML);
    if (exCount >= 5) {
      exCount = 0;
      exhaustSuper.innerHTML = exCount;
    }
    else{
      exCount = exCount + 1;
      exhaustSuper.innerHTML = exCount;
    }

    if (exCount == 1 || exCount == 2 || exCount == 3 || exCount == 4 || exCount == 5) {
      exhElement.classList.add("activeColour");
    }
    else {
      exhElement.classList.remove("activeColour");
    }
    //I don't know why, but this only works if this console.log exists
    console.log("Exhaust Level: " + exCount);
  };
}

function createABBRandI(conditionTitle, iClass){
  let abbr = document.createElement("ABBR");
  abbr.setAttribute("title", conditionTitle);
  let iElement = document.createElement("I");
  iElement.setAttribute("class", iClass);
  abbr.appendChild(iElement);
  return abbr;
}

function monsterCreator(aggrIni, name){
  let fightBox = document.getElementById("fightBox");
  let dropDown = document.getElementById("dropDownForMonsters");

  let selectedMonster = fullMonsterArray.find(el => el.name == name);

  let participantBox = createElementWithSingleAttribute("DIV", "class", "participant");
  let participantTopBox = createElementWithSingleAttribute("DIV", "class", "participantTopBox");
  let participantTopBoxLeft = createElementWithSingleAttribute("DIV", "class", "participantTopBoxLeft");
  let participantTopBoxRight = createElementWithSingleAttribute("DIV", "class", "participantTopBoxRight");
  let monsterDetailsBox = createElementWithSingleAttribute("DIV", "class", "monsterDetails");

//Monster name
  let monsterNamePara = createElementWithContent("P", selectedMonster.name);
  participantTopBoxLeft.appendChild(monsterNamePara);
  participantBox.appendChild(monsterDetailsBox);

//monster HP
  let monsterHPPara = createElementWithContent("P", "HP: ");
  let monsterHPiElement = createElementWithSingleAttribute("INPUT", "type", "number");
  monsterHPiElement.setAttribute("value", selectedMonster.hit_points);
  monsterHPiElement.setAttribute("class", "hpCalcInput");
  monsterHPPara.appendChild(monsterHPiElement);
  participantTopBoxLeft.appendChild(monsterHPPara);

//monster HP calculator
  let monsterHPCalc = createElementWithContent("P", "");
  let monsterCalcElement = createElementWithSingleAttribute("INPUT", "type", "number");
  monsterCalcElement.setAttribute("class", "hpMathsInput");
  monsterHPCalc.appendChild(monsterCalcElement);
  let plusButton = createElementWithContent("BUTTON", "+");
  plusButton.setAttribute("type", "button");
  plusButton.setAttribute("type", "button");
  plusButton.onclick = function(){
    let currentHP = Number(monsterHPiElement.value);
    let modValue = Number(monsterCalcElement.value);
    monsterCalcElement.value = "";
    monsterHPiElement.setAttribute("value", Number(currentHP+modValue));
  }
  let minusButton = createElementWithContent("BUTTON", "-");
  minusButton.onclick = function(){
    let currentHP = Number(monsterHPiElement.value);
    let modValue = Number(monsterCalcElement.value);
    monsterCalcElement.value = "";
    monsterHPiElement.setAttribute("value", Number(currentHP-modValue));
  }
  monsterHPCalc.appendChild(plusButton);
  monsterHPCalc.appendChild(minusButton);
  participantTopBoxLeft.appendChild(monsterHPCalc);

//monster Armour Class
  let monsterACPara = createElementWithContent("P", "AC: " + selectedMonster.armor_class);
  participantTopBoxLeft.appendChild(monsterACPara);

//monster aggregate initiative
  let monAggrIniPara = createElementWithContent("P", "Aggr. Initiative = " + aggrIni);
  participantTopBoxLeft.appendChild(monAggrIniPara);

//monster condition symbols, uses less symbols than a player
  let conSym = createElementWithSingleAttribute("DIV", "class", "conditionSymbols");
  conSym.appendChild(createABBRandI("Blinded", "fas fa-eye-slash"));
  conSym.appendChild(createABBRandI("Deafened", "fas fa-deaf"));
  conSym.appendChild(createABBRandI("Prone", "fas fa-arrow-down"));
  conSym.appendChild(createABBRandI("Charmed", "fas fa-heart"));
  participantTopBoxRight.appendChild(conSym);

//monster special abilities if it has any
  if (selectedMonster.special_abilities.length > 0) {
    let specAbBox = createElementWithSingleAttribute("DIV", "class", "monsterSpecialAbilities");
    let specAbBoxTitle = createElementWithSingleAttribute("DIV", "class", "boxTitles");
    specAbBoxTitle.appendChild(document.createTextNode("Special Abilities"));
    specAbBox.appendChild(specAbBoxTitle);
    selectedMonster.special_abilities.forEach(function(element){
      let singleSpecAb = createElementWithSingleAttribute("DIV", "class", "singleLegAc");
      for (key in element){
        if (key == "name") {
          singleSpecAb.appendChild(document.createTextNode(element[key] + " "));
          singleSpecAb.appendChild(document.createElement("BR"));
        }
        else {
          continue;
        }
      }
      specAbBox.appendChild(singleSpecAb);
    });
    participantBox.appendChild(specAbBox);
  };

//monster attacks if it has any
  if (selectedMonster.actions.length > 0) {
    let actionsBox = createElementWithSingleAttribute("DIV", "class", "monsterActions");
    let actionsBoxTitle = createElementWithSingleAttribute("DIV", "class", "boxTitles");
    actionsBoxTitle.appendChild(document.createTextNode("Actions"));
    actionsBox.appendChild(actionsBoxTitle);
    selectedMonster.actions.forEach(function(element){
      let singleAttack = createElementWithSingleAttribute("DIV", "class", "singleAttack");
      for (key in element){
        if (key == "desc" || key == "attack_bonus" || key == "damage_bonus") {
          continue;
        }
        if (key == "name") {
          let singleAttackTitle = createElementWithSingleAttribute("DIV", "class", "singleAttackTitle");
          singleAttackTitle.appendChild(document.createTextNode(element[key]));
          singleAttack.appendChild(singleAttackTitle);
        }
        else {
          singleAttack.appendChild(document.createTextNode(element[key]));
        }
      }
      actionsBox.appendChild(singleAttack);
    });
    participantBox.appendChild(actionsBox);
  };

//monster reactions if it has any
  if (selectedMonster.reactions.length > 0) {
    let reactionsBox = createElementWithSingleAttribute("DIV", "class", "monsterReactions");
    let reactionsBoxTitle = createElementWithSingleAttribute("DIV", "class", "boxTitles");
    reactionsBoxTitle.appendChild(document.createTextNode("Reactions"));
    reactionsBox.appendChild(reactionsBoxTitle);
    selectedMonster.reactions.forEach(function(element){
      let singleReaction = createElementWithSingleAttribute("DIV", "class", "singleReaction");
      for (key in element){
        if (key == "name") {
          singleReaction.appendChild(document.createTextNode(element[key] + " "));
          singleReaction.appendChild(document.createElement("BR"));
        }
        else {
          continue;
        }
      }
      reactionsBox.appendChild(singleReaction);
    });
    participantBox.appendChild(reactionsBox);
  };

//monster legendary actions if it has any
  if (selectedMonster.legendary_actions.length > 0) {
    let legendaryActionsBox = createElementWithSingleAttribute("DIV", "class", "monsterLegendaryActions");

    let legendaryActionsBoxTitle = createElementWithSingleAttribute("DIV", "class", "boxTitles");
    legendaryActionsBoxTitle.appendChild(document.createTextNode("Legendary Actions"));
    legendaryActionsBox.appendChild(legendaryActionsBoxTitle);

    selectedMonster.legendary_actions.forEach(function(element){
      let singleLegAc = createElementWithSingleAttribute("DIV", "class", "singleLegAc");
      for (key in element){
        if (key == "name") {
          singleLegAc.appendChild(document.createTextNode(element[key] + " "));
          singleLegAc.appendChild(document.createElement("BR"));
        }
      }
      legendaryActionsBox.appendChild(singleLegAc);
    });
    participantBox.appendChild(legendaryActionsBox);
  };

//add to page
  participantTopBox.appendChild(participantTopBoxLeft);
  participantTopBox.appendChild(participantTopBoxRight);
  monsterDetailsBox.appendChild(participantTopBox);
  fightBox.appendChild(participantBox);

//event listener added to each condition symbol to let it change colour on click
  let conditionArray = document.querySelectorAll("i.fas");
  conditionArray.forEach(function(element){
    element.onclick = function(){
      element.classList.toggle("activeColour");
    };
  });
}

//-------------Helper functions

function createElementWithSingleAttribute(element, attributeType, attributeValue){
  let htmlElement = document.createElement(element);
  htmlElement.setAttribute(attributeType, attributeValue);
  return htmlElement;
}

function createElementWithContent(type, content){
  let contentNode = document.createTextNode(content);
  let element = document.createElement(type);
  element.appendChild(contentNode);
  return element;
}
