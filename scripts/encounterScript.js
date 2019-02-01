let obj = JSON.parse(monstersJSON);
let fullMonsterArray = obj.monsterDataArrays;

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
  addMonsterButton.onclick = function(){monsterButtonEvent();};

  let addPlayerButton = document.getElementById("addPlayerButton");
  addPlayerButton.onclick = function(){playerButtonEvent();};

  dropDownForMonsters.onchange = function(){addMonsterButton.disabled = false;};
}

function playerButtonEvent(){
  let playerName = document.getElementById("playerName").value;
  let playerHP = document.getElementById("playerHP").value;
  let dexMod = document.getElementById("dexMod").value;
  let initiativeRoll = document.getElementById("initiativeRoll").value;
  console.log(playerName + " -> " + playerHP + " -> " + dexMod + " -> " + initiativeRoll);

  let fightBox = document.getElementById("fightBox");
  let participantBox = createElementWithSingleAttribute("DIV", "class", "participant");

  //create playerDetails div
  let participantTopBox = createElementWithSingleAttribute("DIV", "class", "participantTopBox");
  let namePara = document.createElement("P");
  nameParaContent = document.createTextNode(playerName);
  namePara.appendChild(nameParaContent);
  participantTopBox.appendChild(namePara);

  let hpPara = document.createElement("P");
  let hpParaText = document.createTextNode("HP:");
  hpPara.appendChild(hpParaText);
  let hpNumBox = createElementWithSingleAttribute("input", "type", "number");
  hpNumBox.setAttribute("value", playerHP);
  hpPara.appendChild(hpNumBox);
  participantTopBox.appendChild(hpPara);

  let aggrIni = document.createElement("P");
  let aggrIniText = document.createTextNode("Aggr. Initiative: " + (Number(initiativeRoll) + Number(dexMod)));
  aggrIni.appendChild(aggrIniText);
  participantTopBox.appendChild(aggrIni);

  participantBox.appendChild(participantTopBox);

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
  participantTopBox.appendChild(conSym);
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

function createElementWithSingleAttribute(element, attributeType, attributeValue){
  let htmlElement = document.createElement(element);
  htmlElement.setAttribute(attributeType, attributeValue);
  return htmlElement;
}

function monsterButtonEvent(){
  let fightBox = document.getElementById("fightBox");
  let dropDown = document.getElementById("dropDownForMonsters");
  let selectedMonsterIndex = dropDown.options[dropDown.selectedIndex].index - 1;
  let selectedMonster = fullMonsterArray[selectedMonsterIndex];

  let participantBox = createElementWithSingleAttribute("DIV", "class", "participant");
  let participantTopBox = createElementWithSingleAttribute("DIV", "class", "participantTopBox");
  let participantTopBoxLeft = createElementWithSingleAttribute("DIV", "class", "participantTopBoxLeft");
  let participantTopBoxRight = createElementWithSingleAttribute("DIV", "class", "participantTopBoxRight");
  let monsterDetailsBox = createElementWithSingleAttribute("DIV", "class", "monsterDetails");
  let monsterAttacksBox = createElementWithSingleAttribute("DIV", "class", "monsterAttacks");

  let monsterNamePara = document.createElement("P");
  let monsterName = document.createTextNode(selectedMonster.name);
  monsterNamePara.appendChild(monsterName);
  participantTopBoxLeft.appendChild(monsterNamePara);
  participantBox.appendChild(monsterDetailsBox);

  let monsterHPPara = document.createElement("P");
  let monsterHPlabel = document.createTextNode("HP: ");
  monsterHPPara.appendChild(monsterHPlabel);
  let monsterHPiElement = createElementWithSingleAttribute("INPUT", "type", "number");
  monsterHPiElement.setAttribute("value", selectedMonster.hit_points);
  monsterHPPara.appendChild(monsterHPiElement);
  participantTopBoxLeft.appendChild(monsterHPPara);

  let monsterACPara = document.createElement("P");
  let monsterAC = document.createTextNode("AC: " + selectedMonster.armor_class);
  monsterACPara.appendChild(monsterAC);
  participantTopBoxLeft.appendChild(monsterACPara);

  let modifierArray = [-5,-4,-4,-3,-3,-2,-2,-1,-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10];
  let monAggrIni = (modifierArray[selectedMonster.dexterity-1]) + (Math.floor(Math.random() * 20) + 1);
  let monAggrIniPara = document.createElement("P");
  let monAggrIniText = document.createTextNode("Aggr. Initiative = " + monAggrIni);
  monAggrIniPara.appendChild(monAggrIniText);
  participantTopBoxLeft.appendChild(monAggrIniPara);

  for (var i = 0; i < 100; i++) {
    console.log((modifierArray[selectedMonster.dexterity-1]) + (Math.floor(Math.random() * 20) + 1));
  }

  let conSym = createElementWithSingleAttribute("DIV", "class", "conditionSymbols");
  conSym.appendChild(createABBRandI("Blinded", "fas fa-eye-slash"));
  conSym.appendChild(createABBRandI("Deafened", "fas fa-deaf"));
  conSym.appendChild(createABBRandI("Prone", "fas fa-arrow-down"));
  conSym.appendChild(createABBRandI("Charmed", "fas fa-heart"));
  participantTopBoxRight.appendChild(conSym);

  if (selectedMonster.actions.length > 0) {
    let actionsBox = createElementWithSingleAttribute("DIV", "class", "monsterActions");
    selectedMonster.actions.forEach(function(element){
      let singleAttack = createElementWithSingleAttribute("DIV", "class", "singleAttack");
        for (key in element){
          if (key == "desc" || key == "attack_bonus" || key == "damage_bonus") {
              continue;
          }
          if (key == "name") {
            let singleAttackTitle = createElementWithSingleAttribute("DIV", "class", "singleAttackTitle");
            singleAttackTitle.appendChild(document.createTextNode(element[key] + " "));
            singleAttackTitle.appendChild(document.createElement("BR"));
            singleAttack.appendChild(singleAttackTitle);
          }
          else {
            singleAttack.appendChild(document.createTextNode(key + " -> "+ element[key]));
            singleAttack.appendChild(document.createElement("BR"));
          }
        }
      actionsBox.appendChild(singleAttack);
    });
    monsterAttacksBox.appendChild(actionsBox);
  };

  if (selectedMonster.reactions.length > 0) {
    let reactionsBox = createElementWithSingleAttribute("DIV", "class", "monsterReactions");
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
    monsterAttacksBox.appendChild(reactionsBox);
  };

  if (selectedMonster.legendary_actions.length > 0) {
    let legendaryActionsBox = createElementWithSingleAttribute("DIV", "class", "monsterLegendaryActions");
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
    monsterAttacksBox.appendChild(legendaryActionsBox);
  };

  if (selectedMonster.special_abilities.length > 0) {
    let specAbBox = createElementWithSingleAttribute("DIV", "class", "monsterSpecialAbilities");
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
    participantTopBoxRight.appendChild(specAbBox);
  };

  participantTopBox.appendChild(participantTopBoxLeft);
  participantTopBox.appendChild(participantTopBoxRight);
  monsterDetailsBox.appendChild(participantTopBox);
  participantBox.appendChild(monsterAttacksBox);
  fightBox.appendChild(participantBox);


  // let str = JSON.stringify(selectedMonster, undefined, 4);
  // document.body.appendChild(document.createElement('pre')).innerHTML = syntaxHighlight(str);
}











function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}


// function LogJSONstringify(json) {
//     if (typeof json != 'string') {
//         json = JSON.stringify(json, undefined, '\t');
//     }
//     var arr = [],
//         _string = 'color:green',
//         _number = 'color:darkorange',
//         _boolean = 'color:blue',
//         _null = 'color:magenta',
//         _key = 'color:red';
//     json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
//         var style = _number;
//         if (/^"/.test(match)) {
//             if (/:$/.test(match)) {
//                 style = _key;
//             } else {
//                 style = _string;
//             }
//         } else if (/true|false/.test(match)) {
//             style = _boolean;
//         } else if (/null/.test(match)) {
//             style = _null;
//         }
//         arr.push(style);
//         arr.push('');
//         return '%c' + match + '%c';
//     });
//     arr.unshift(json);
//     console.log.apply(console, arr);
// }
