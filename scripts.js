

function myFunction() {
  let classValue = document.getElementById("classList").value;

  let myTable= "<table><tr><td>Col Head 1</td>";
    myTable+= "<td>Col Head 2</td>";
    myTable+="<td>Col Head 3</td></tr>";

    myTable+="<tr><td>---------------</td>";
    myTable+="<td>---------------</td>";
    myTable+="<td>---------------</td></tr>";

// let obj = JSON.parse(bardJson);
//
// console.log("Hello");



  document.getElementById("dataSpace").innerHTML = "Num: " + myTable;
}
