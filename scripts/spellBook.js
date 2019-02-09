let obj = JSON.parse(spellsJSON);
let fullSpellArray = obj.spellDataArrays;

(function(){
  //populating drop down menu
  let dropDown = document.getElementById("dropDownForSpells");
  Array.from(fullSpellArray).forEach(function(element){
    let option = document.createElement("OPTION");
    let optionText = document.createTextNode(element.name);
    option.appendChild(optionText);
    dropDown.appendChild(option);
  });
  let addSpellButton = document.getElementById("addSpellButton");
  addSpellButton.onclick = function(){spellButtonEvent();};
  dropDownForSpells.onchange = function(){addSpellButton.disabled = false;};
}());

function spellButtonEvent(){
  let dropDown = document.getElementById("dropDownForSpells");
  let selectedIndex = dropDown.options[dropDown.selectedIndex].index - 1;
  let selectedSpell = fullSpellArray[selectedIndex];
  let str = JSON.stringify(selectedSpell, undefined, 4);
  let spellDataSpace = document.getElementById("spellDataSpace");
  spellDataSpace.innerHTML = syntaxHighlight(str);
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
