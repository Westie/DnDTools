let obj = JSON.parse(dndClassJSON);
let fullClassArray = obj.classDataArrays;

(function(){
  //takes dnd class names from JSON and populates dropdown
  //this function runs automatically at page load
  for (let i = 0; i < fullClassArray.length; i++) {
    let selectSpace = document.getElementById("classList");
    let option = document.createElement("OPTION");
    let optionText = document.createTextNode(fullClassArray[i].name);
    option.appendChild(optionText);
    option.setAttribute("value", fullClassArray[i].name);
    option.setAttribute("id", fullClassArray[i].name + "Option");
    selectSpace.appendChild(option);
    document.getElementById(fullClassArray[i].name + "Option")
      .addEventListener("click", function(){addToPage(fullClassArray[i])});
  }
}());

function addToPage(singleClassArray){
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

function tableMaker(singleClassArray){
//creates table to be added to page
  let tableOuter = document.createElement("TABLE");
  for (var key in singleClassArray) {
    //loop through keys in class data
    if (singleClassArray.hasOwnProperty(key)) {
      let tableRow = document.createElement("TR");
      for (let k = 0; k < singleClassArray.L20.length; k++){
        //creates table cells for each stat + enough to make square table
        let tableCell = document.createElement("TD");
        if (typeof(singleClassArray[key][k]) == "undefined") {
          //if cell is going to be empty
          singleClassArray[key][k] = "";
        }
        if (key == 'name') {
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
  }
  tableOuter.setAttribute("id", "activeTable");
  return tableOuter;
}

// for (var key in singleClassArray) {
//   if (singleClassArray.hasOwnProperty(key)) {
//       let tableRow = document.createElement("TR");
//       let rowContent = document.createTextNode(key + " -> " + singleClassArray[key]);
//       // console.log(singleClassArray);
//       tableRow.appendChild(rowContent);
//       tableOuter.appendChild(tableRow);
//   }
// }

  // for (let i = 0; i < Object.keys(singleClassArray).length; i++) {
  //   let tableRow = document.createElement("TR");
  //   // let rowContent = document.createTextNode(singleClassArray[i]);
  //   console.log(singleClassArray);
  //   tableRow.appendChild(rowContent);
  //   tableOuter.appendChild(tableRow);
  //
  // }
