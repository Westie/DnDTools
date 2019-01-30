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
      let values = []
      inputs.forEach(v => values.push(v.value))
      addPlayerButton.disabled = values.includes('')
    })
  }
}());

function applyEvents(){
  let addMonsterButton = document.getElementById("addMonsterButton");
  addMonsterButton.onclick = function(){monsterButtonEvent();};

  let addPlayerButton = document.getElementById("addPlayerButton");
  addPlayerButton.onclick = function(){playerButtonEvent();};

  dropDownForMonsters.onchange = function(){addMonsterButton.disabled = false;};




  // let exhaustIcon = document.getElementsByClassName("exhaustIcon");
  // let exhaustSuper = document.getElementsByClassName("exhaustSuper");
  // let cc = 0;
  // exhaustIcon.onclick = function(){
  //   cc = cc + 1;
  //   exhaustSuper.innerHTML = cc;
  //   if (cc >= 5) {
  //     cc = -1;
  //   }
  //   if (cc > 0) {
  //     exhaustIcon.classList.add("activeColour");
  //   }
  //   if (cc == 0) {
  //     exhaustIcon.classList.remove("activeColour");
  //   }
  // };


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
  let pDeets = createElementWithSingleAttribute("DIV", "class", "playerDetails");
  let namePara = document.createElement("P");
  nameParaContent = document.createTextNode(playerName);
  namePara.appendChild(nameParaContent);
  pDeets.appendChild(namePara);

  let hpPara = document.createElement("P");
  let hpParaText = document.createTextNode("HP:");
  hpPara.appendChild(hpParaText);
  let hpNumBox = createElementWithSingleAttribute("input", "type", "number");
  hpNumBox.setAttribute("value", playerHP);
  hpPara.appendChild(hpNumBox);
  pDeets.appendChild(hpPara);

  let aggrIni = document.createElement("P");
  let aggrIniText = document.createTextNode("Aggr. Initiative: " + (Number(initiativeRoll) + Number(dexMod)));
  aggrIni.appendChild(aggrIniText);
  pDeets.appendChild(aggrIni);

  participantBox.appendChild(pDeets);

  //create conditionSymbols div
  let conSym = createElementWithSingleAttribute("DIV", "class", "conditionSymbols");

  conSym.appendChild(createABBRandI("Blinded", "fas fa-eye-slash"));
  conSym.appendChild(createABBRandI("Deafened", "fas fa-deaf"));
  conSym.appendChild(createABBRandI("Prone", "fas fa-arrow-down"));
  conSym.appendChild(createABBRandI("Charmed", "fas fa-heart"));

  let exhaustCount = document.getElementsByClassName("fa-bed").length;
  // let exhaustSpecial = createABBRandI("Exhausted", "fas fa-bed");

  let exhAbbr = document.createElement("ABBR");
  exhAbbr.setAttribute("title", "Exhausted");
  let exhElement = document.createElement("I");
  exhElement.setAttribute("class", "fas fa-bed");
  exhAbbr.appendChild(exhElement);



  // exhaustSpecial.classList.add("spec"+exhaustCount);
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
  participantBox.appendChild(conSym);
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
  fightBox.appendChild(document.createTextNode(selectedMonster.name));

  let str = JSON.stringify(selectedMonster, undefined, 4);
  document.body.appendChild(document.createElement('pre')).innerHTML = syntaxHighlight(str);
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
