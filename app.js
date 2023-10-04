
// let person = prompt("Please enter your name:");

// if (person == null || person == "") {
//     text = "User cancelled the prompt.";
//   }

// function getGender() {
//     var gender = "";
  
//     while (gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female") {
//       gender = prompt("Are you a: ", "Male, Female");

//     }
//     return gender;
//     }

//     var gen=getGender();
  

//   if ( gen == "male"  ||  gen == "Male" ) {
//     window.alert("Hello Mr. " + person );
//     } else if (gen == "female"  ||  gen == "Female"){
//               window.alert("Hello Mrs. " + person); 
//              } else {
//               window.alert ("Hello  " + person);
//              }

// let typeOfDrink = prompt("would you like a hot or cold drink?", "Hot, Cold");
// let nameOfDrink = prompt("Please write the name of your drink:");

// let array = [];
// array.push(person);
// array.push(gen);
// array.push(typeOfDrink);
// array.push(nameOfDrink);

// for (d=0; d< array.length; d++){
//     console.log(array[d]);
// }

// ----------------------------------------------------

// Info collected using Prompt 

// let perName = document.createElement("div");
// perName.id= 'personName';
// let parag = document.createElement("p");
// parag.textContent=`${person}`;
// perName.appendChild(parag);


// let list = document.createElement("ul");
// perName.appendChild(list);
// let perGen = document.createElement("li");
// perGen.textContent=`Gender: ${gen}`;
// list.appendChild(perGen);
// let driTy = document.createElement("li");
// driTy.textContent=`Drink: ${typeOfDrink} ${nameOfDrink}`;
// list.appendChild(driTy);

// document.body.appendChild(perName);

// ----------------------------------------------------

// Info collected using Form 
var userNameVal = document.getElementById("userName").value;
var genderVal = document.getElementById("genderVal").value;
var naDrVal = document.getElementById("naDr").value;

// let userNameVal = document.createElement("li");
// userNameVal.textContent=`Name: ${userName}`;
// orderInfoVal.appendChild(userNameVal);
// let genderVal = document.createElement("li");
// orderInfoVal.textContent=`Gender: ${genderVal}`;
// orderInfoVal.appendChild(genderVal);
// let naDrVal = document.createElement("li");
// naDrVal.textContent=`Drink: ${naDr}`;
// orderInfoVal.appendChild(naDrVal);


var checkbox = document.getElementById("boxx"); // Get the checkbox element by its ID
var checkboxa = document.getElementById("boxxa"); // Get the checkbox element by its ID
var drinkTemp = [];
if (checkbox.checked) {
  drinkTyype.push(checkbox.value);
}
if (checkboxa.checked) {
  drinkTyype.push(checkboxa.value);
} 

var resultText = "Username: " + userNameVal + "<br>";
resultText += "Gender: " + genderVal + "<br>";
resultText += "Drink: " + drinkTemperature.join(", ") + naDrVal;

document.getElementById("orderInfoVal").innerHTML = resultText;

