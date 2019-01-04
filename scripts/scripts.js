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
        let rowContent = document.createTextNode(key + " -> " + singleClassArray[key]);
        console.log(singleClassArray);
        tableRow.appendChild(rowContent);
        tableOuter.appendChild(tableRow);
    }
}


  // for (let i = 0; i < Object.keys(singleClassArray).length; i++) {
  //   let tableRow = document.createElement("TR");
  //   // let rowContent = document.createTextNode(singleClassArray[i]);
  //   console.log(singleClassArray);
  //   tableRow.appendChild(rowContent);
  //   tableOuter.appendChild(tableRow);
  //
  // }


  // let tableCell = document.createElement("TD");



  // let tableCellText = document.createTextNode(JSON.stringify(singleClassArray));
  // tableCell.appendChild(tableCellText);
  // tableRow.appendChild(tableCell);

  tableOuter.setAttribute("id", "activeTable");



  return tableOuter;
}







// <table>
//   <tr>
//     <td>Col Head 1</td>
//     <td>Col Head 2</td>
//     <td>Col Head 3</td>
//   </tr>
//   <tr>
//     <td>normal cell 1</td>
//     <td>normal cell 2</td>
//     <td>normal cell 3</td>
//   </tr>
// </table>








// function readJSON(word){
//   console.log(fullClassArray[0]);
//
//   let name = obj.classDataArrays[0].name;
//   let cantrips = obj.classDataArrays[0].cantrips;
//   let l1 = obj.classDataArrays[0].l1;
//
//   document.getElementById("dataSpace").innerHTML = "Name: " + name + "<br>"
//   + "Cantips: " + cantrips + "<br>"
//   + "Level 1: " + l1;
//   // console.log(obj);
// }
