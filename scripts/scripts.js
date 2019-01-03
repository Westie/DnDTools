(function(){
  //takes class names from JSON and populates dropdown
  let obj = JSON.parse(dndClassJSON);
  let classArray = obj.bard;
  let l = classArray.length;

  for (let i = 0; i < l; i++) {
    let selectSpace = document.getElementById("classList");
    let option = document.createElement("OPTION");
    let optionText = document.createTextNode(classArray[i].name);
    option.appendChild(optionText);
    option.setAttribute("value", classArray[i].name);
    option.setAttribute("id", classArray[i].name + "Option");
    selectSpace.appendChild(option);
    document.getElementById(classArray[i].name + "Option")
    .addEventListener("click", function(){hiLog(classArray[i].name)});
  }
}());

function hiLog(word){
  console.log("hello " + word);
  // readJSON(word);
}

function readJSON(word){
  let obj = JSON.parse(bardJson);
  let classArray = obj.bard;
  console.log(classArray[0]);

  let name = obj.bard[0].name;
  let cantrips = obj.bard[0].cantrips;
  let l1 = obj.bard[0].l1;

  document.getElementById("dataSpace").innerHTML = "Name: " + name + "<br>"
  + "Cantips: " + cantrips + "<br>"
  + "Level 1: " + l1;
  // console.log(obj);
}
