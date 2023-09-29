
let person = prompt("Please enter your name:");
let gender = prompt("Are you a: " , "Male, Female");
let drink = prompt("would you like a hot or cold drink?", "Please write the name of your drink here");
let text;
if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } 


if (drink == null || drink == ""){
    window.alert ("Invalid order");
} else {
    if ( gender == "male"  ||  gender == "Male" ) {
        window.alert("Hello Mr. " + person + ", your " + drink + " is in the making. "+ "Thank you for your patience =)");
        console.log("Mr. " + person + drink);
     } else if (gender == "female"  ||  gender == "Female"){
        window.alert("Hello Mrs. " + person + ", your " + drink + " is in the making. "+ "Thank you for your patience =)");
        console.log("Mrs. " + person + drink);

     } else {
         window.alert ("Hello  " + person + ", your  " + drink + " is in the making. "+ "Thank you for your patience =)");
         console.log( person + drink);

     }
     
}

