let obj = JSON.parse(dndClassJSON);
let fullClassArray = obj.classDataArrays;
let l = fullClassArray.length;

(function(){
  //takes dnd class names from JSON and populates dropdown
  for (let i = 0; i < l; i++) {
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
  // console.log(singleClassArray);
  if(document.getElementById("activeTable") != null){
    document.getElementById("dataSpace").replaceChild(tableMaker(singleClassArray), document.getElementById("activeTable"));
  }else{
    document.getElementById("dataSpace").appendChild(tableMaker(singleClassArray))
  }
}


function tableMaker(singleClassArray){

  let tableOuter = document.createElement("TABLE");
  for (var key in singleClassArray) {
    if (singleClassArray.hasOwnProperty(key)) {
      let tableRow = document.createElement("TR");
      for (let k = 0; k < singleClassArray.L20.length; k++){
        let tableCell = document.createElement("TD");
        if (typeof(singleClassArray[key][k]) == "undefined") {
          singleClassArray[key][k] = "";
        }
        if (key == 'name') {
          continue;
        }
        // let cellContent = document.createTextNode(key + " -> " + singleClassArray[key][k]);
        let cellContent = document.createTextNode(singleClassArray[key][k]);
        tableCell.appendChild(cellContent);
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
