
let person = prompt("Please enter your name:");

if (person == null || person == "") {
    text = "User cancelled the prompt.";
  }
// let gender = prompt("Are you a: " , "Male, Female");

// while (gender !==  "male" && gender !==  "Male" && gender !==  "female" && gender !==  "Female") {
//     gender = prompt("Are you a: " , "Male, Female");
// }
function getGender() {
    var gender = "";
  
    while (gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female") {
      gender = prompt("Are you a: ", "Male, Female");

    }
    return gender;
    }

    var gen=getGender();
  

  if ( gen == "male"  ||  gen == "Male" ) {
    window.alert("Hello Mr. " + person );
    } else if (gen == "female"  ||  gen == "Female"){
              window.alert("Hello Mrs. " + person); 
             } else {
              window.alert ("Hello  " + person);
             }

let typeOfDrink = prompt("would you like a hot or cold drink?", "Hot, Cold");
let nameOfDrink = prompt("Please write the name of your drink:");

let array = [];
array.push(person);
array.push(gen);
array.push(typeOfDrink);
array.push(nameOfDrink);

for (d=0; d< array.length; d++){
    console.log(array[d]);
}




// const conDi = document.querySelector('#personName');
// conDi.textContent="hiiiiiii";

let perName = document.createElement("div");
perName.id= 'personName';
let parag = document.createElement("p");
parag.textContent=`${person}`;
perName.appendChild(parag);


let list = document.createElement("ul");
perName.appendChild(list);
let perGen = document.createElement("li");
perGen.textContent=`Gender: ${gen}`;
list.appendChild(perGen);
let driTy = document.createElement("li");
driTy.textContent=`Drink: ${typeOfDrink} ${nameOfDrink}`;
list.appendChild(driTy);
// let driNam = document.createElement("li");
// list.appendChild(driNam);

// document.conDi.appendChild(perName);



// document.body.insertBefore(perName, container);
// perName.classList.add('centered');
document.body.appendChild(perName);

// object.appendChild(perName);





// let mmm = document.createElement("div");
// parag.textContent="Usersname";
// conDi.appendChild(mmm);









// if ( gender == "male"  ||  gender == "Male" ) {
//   window.alert("Hello Mr. " + person + ", your " + drink + " is in the making. "+ "Thank you for your patience =)");
//   console.log("Mr. " + person + drink);
//   } else if (gender == "female"  ||  gender == "Female"){
//             window.alert("Hello Mrs. " + person + ", your " + drink + " is in the making. "+ "Thank you for your patience =)");
//             console.log("Mrs. " + person + drink);
    
//            } else {
//             window.alert ("Hello  " + person + ", your  " + drink + " is in the making. "+ "Thank you for your patience =)");
//             console.log( person + drink);  
//            }

// if (drink == null || drink == ""){
//     window.alert ("Invalid order");
// } else {
//     if ( gender == "male"  ||  gender == "Male" ) {
//         window.alert("Hello Mr. " + person + ", your " + drink + " is in the making. "+ "Thank you for your patience =)");
//         console.log("Mr. " + person + drink);
//      } else if (gender == "female"  ||  gender == "Female"){
//         window.alert("Hello Mrs. " + person + ", your " + drink + " is in the making. "+ "Thank you for your patience =)");
//         console.log("Mrs. " + person + drink);

//      } else {
//         window.alert ("Hello  " + person + ", your  " + drink + " is in the making. "+ "Thank you for your patience =)");
//         console.log( person + drink);

//      }

// }

