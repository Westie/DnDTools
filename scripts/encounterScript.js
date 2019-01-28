let obj = JSON.parse(monstersJSON);
let fullMonsterArray = obj.monsterDataArrays;

(function(){
  let dropDown = document.getElementById("dropDownForMonsters");
  Array.from(fullMonsterArray).forEach(function(element){
    let option = document.createElement("OPTION");
    let optionText = document.createTextNode("CR: " + element.challenge_rating + " -> " + element.name);
    option.appendChild(optionText);
    dropDown.appendChild(option);
  })

  let addMonsterButton = document.getElementById("addMonsterButton");
  addMonsterButton.onclick = function(){monsterButtonEvent();};

  let addPlayerButton = document.getElementById("addPlayerButton");
  addPlayerButton.onclick = function(){playerButtonEvent();};

  //disables add player button and re-enables with completed input fields
  let inputs = document.querySelectorAll('[class="playerFormInput"]');
  addPlayerButton.disabled = true;
  for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input',() => {
      let values = []
      inputs.forEach(v => values.push(v.value))
      addPlayerButton.disabled = values.includes('')
    })
  }
}());

function playerButtonEvent(){
  let playerName = document.getElementById("playerName").value;
  let dexMod = document.getElementById("dexMod").value;
  let initiativeRoll = document.getElementById("initiativeRoll").value;
  console.log(playerName + " -> " + dexMod + " -> " + initiativeRoll);
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
