(function(){
  let obj = JSON.parse(dndClassJSON);
  let fullClassArray = obj.classDataArrays;
  //takes dnd class names from JSON and populates dropdown
  //this function runs automatically at page load
  let selectSpace = document.getElementById("classList");
  for (let i = 0; i < fullClassArray.length; i++) {
    let option = document.createElement("OPTION");
    let optionText = document.createTextNode(fullClassArray[i].name);
    option.appendChild(optionText);
    option.setAttribute("value", fullClassArray[i].name);
    option.setAttribute("id", fullClassArray[i].name + "Option");
    selectSpace.appendChild(option);
  }
  selectSpace.onchange = function(){addToPage(fullClassArray[this.selectedIndex-1])};
  let levelList = document.getElementById("levelList");
  levelList.onchange = function(){levelRowHighlighter(levelList.value)};
}());

function levelRowHighlighter(value){
  let tableBackgroundColour = getComputedStyle(document.body).getPropertyValue('--tableBackgroundColour');
  let tableRowSelectedColour = getComputedStyle(document.body).getPropertyValue('--tableRowSelectedColour');

  //initial loop to naivgate  columns with nested forEach to set each cell colour
  for (let i = 0; i < 20; i++) {
    let array = document.getElementsByClassName("L"+(i+1));
    Array.from(array).forEach(function (element) {
      element.style.backgroundColor = tableBackgroundColour;
    });
  }
  //changes colour of selected level row
  let levelRow = document.getElementsByClassName("L"+value);
  for (let i = 0; i < levelRow.length; i++) {
    levelRow[i].style.backgroundColor = tableRowSelectedColour;
  }
}

function addToPage(singleClassArray){
  //enabled level dropdown
  document.getElementById("levelList").disabled = false;

  //replaces current table on page (if it exists) with newly selected class stats
  if(document.getElementById("activeTable") != null){
    document.getElementById("dataSpace").replaceChild(tableMaker(singleClassArray), document.getElementById("activeTable"));
    document.getElementById("classNameHeader").textContent = singleClassArray.name;
  }
  else {
    document.getElementById("dataSpace").appendChild(tableMaker(singleClassArray));
    document.getElementById("classNameHeader").textContent = singleClassArray.name;
  }
}

function labelCellMaker(cellText){
  let tableCell = document.createElement("TD");
  tableCell.setAttribute("class", "label");
  let labelContent = document.createTextNode(cellText);
  tableCell.appendChild(labelContent);
  return tableCell;
}

function tableMaker(singleClassArray){
  //creates table to be added to page
  let tableOuter = document.createElement("TABLE");
  let keyArray = Object.keys(singleClassArray);
  let count = 1;

  for (let key in singleClassArray) {
    //loop through keys in class data
    let tableRow = document.createElement("TR");

    if (key == "name") {
      //Cantrips known, spells known, spell slots per level
      //creates label row at top of table
      let topRow = document.createElement("TR");
      let triEmptyCell = labelCellMaker("");
      triEmptyCell.setAttribute("colspan", "3");
      let theRestofTheRow = labelCellMaker("Spell Slots Per Spell Level")
      theRestofTheRow.setAttribute("colspan", singleClassArray.L20.length - 2);

      topRow.appendChild(triEmptyCell);
      topRow.appendChild(theRestofTheRow);
      tableOuter.appendChild(topRow);

      tableRow.appendChild(labelCellMaker(""));
      tableRow.appendChild(labelCellMaker("Cantrips"));
      tableRow.appendChild(labelCellMaker("Spells Known"));
      for (let i = 0; i < singleClassArray.L20.length - 2; i++) {
        tableRow.appendChild(labelCellMaker("L" + (i+1)));
      }
    }

    if (!tableRow.innerHTML && key != "name") {
      //if row is empty, and the key is not name
      //adds the Level number to the first index of each row
      tableRow.appendChild(labelCellMaker(keyArray[count]));
      count++;
    }

    for (let k = 0; k < singleClassArray.L20.length; k++){
      //creates table cells for each stat + enough to make square table
      let tableCell = document.createElement("TD");
      tableCell.setAttribute("class", Object.keys(singleClassArray)[count-1])
      if (typeof(singleClassArray[key][k]) == "undefined") {
        //if cell is going to be empty
        singleClassArray[key][k] = "";
      }
      if (key == "name") {
        //skip name of the class being seperated into individual letters per cell
        continue;
      }
      if (singleClassArray[key][k] == "" || singleClassArray[key][k] == "-") {
        //only creates an input box if value is a number
        let cellContent = document.createTextNode(singleClassArray[key][k]);
        tableCell.appendChild(cellContent);
      }
      else {
        let cellContent = document.createElement("INPUT");
        cellContent.setAttribute("type", "number");
        cellContent.setAttribute("value", singleClassArray[key][k]);
        cellContent.setAttribute("autocomplete", "off");
        tableCell.appendChild(cellContent);
      }
      tableRow.appendChild(tableCell);
    }
    tableOuter.appendChild(tableRow);
  }
  tableOuter.setAttribute("id", "activeTable");
  return tableOuter;
}
