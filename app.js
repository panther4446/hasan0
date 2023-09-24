
var userinput = prompt("enter where do you live ");

var firstChar = userinput.slice (0, 1).toLocaleUpperCase();

var RemainChar = userinput.slice(1).toLocaleLowerCase();

var combineInput = firstChar + RemainChar;

var CityArr = ["karachi" , "Islamabad", "lahore", "Peshawar" ]


for ( var i = 0 ; i < CityArr.length; i++){
    if (combineInput === CityArr [i]){
        console.log ("match");
    }
}

console.log(text);

var text =
  "The New Yorker magazine doesnt allow thephrase captain. They say it shouldbe the So let search the following sentence for the banned characterand replace them with the phrase that the New Yorker prefers";

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 12) ==="captain") {
    text = text.slice(0, i) + "ap" + text.slice(i + 12);
  }
}




console.log(text);

var text = "hello i am student jawan pakistan  and i am js developer thankyou "

for (var i =0; 1 <text.length; i++){
    if(text.slice(i, i + 6) === "jawan paskitan "){
        text = text.slice(0, i) + "hello pakistan" + text.slice(i + 6);       
    }
}




