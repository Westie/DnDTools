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
  let addMonsterButton = document.getElementById("addMonsterButton");
  addMonsterButton.onclick = function(){monsterButtonEvent();};
  dropDownForMonsters.onchange = function(){addMonsterButton.disabled = false;};
}());

function monsterButtonEvent(){
  let dropDown = document.getElementById("dropDownForMonsters");
  let selectedMonsterIndex = dropDown.options[dropDown.selectedIndex].index - 1;
  let selectedMonster = fullMonsterArray[selectedMonsterIndex];
  let str = JSON.stringify(selectedMonster, undefined, 4);
  let monsterDataSpace = document.getElementById("monsterDataSpace");
  monsterDataSpace.innerHTML = syntaxHighlight(str);
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
