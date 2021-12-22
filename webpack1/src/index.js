// import { form } from "./practice";
import { createRow } from "./row";
import ("./style.css");
import Icon from "./icon.jpg"



const h1 = document.createElement("h1");
const myIcon = document.createElement("img")
myIcon.src = Icon;
// console.log(Icon);

const root = document.getElementById("root");
root.appendChild(myIcon);

var form = document.getElementById("form-data");
form.addEventListener("click", todo);

function todo() {
    // p.preventDefault();

    var naam = document.getElementById('name').value;
    var quantity = document.getElementById('quan').value;
    var pri = document.getElementById('priority').value;

    createRow(naam, quantity, pri);
    console.log(naam, quantity, pri)
    document.getElementById('name').value = "";
    document.getElementById('quan').value = "";
    document.getElementById('priority').value = "Choose";
}