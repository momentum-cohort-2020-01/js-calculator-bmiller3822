let zeroButton = document.querySelector(".zero")
zeroButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = document.createTextNode(0)
    currentCalc.append(newCalc)
})

let oneButton = document.querySelector(".one")
oneButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = document.createTextNode(1)
    currentCalc.append(newCalc)
})

let twoButton = document.querySelector(".two")
twoButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = document.createTextNode(2)
    currentCalc.append(newCalc)
})

let threeButton = document.querySelector(".three")
threeButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = document.createTextNode(3)
    currentCalc.append(newCalc)
})

let fourButton = document.querySelector(".four")
fourButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = document.createTextNode(4)
    currentCalc.append(newCalc)
})

let fiveButton = document.querySelector(".five")
fiveButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = document.createTextNode(5)
    currentCalc.append(newCalc)
})

let sixButton = document.querySelector(".six")
sixButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = document.createTextNode(6)
    currentCalc.append(newCalc)
})

let sevenButton = document.querySelector(".seven")
sevenButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = document.createTextNode(7)
    currentCalc.append(newCalc)
})

let eightButton = document.querySelector(".eight")
eightButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = document.createTextNode(8)
    currentCalc.append(newCalc)
})

let nineButton = document.querySelector(".nine")
nineButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = document.createTextNode(9)
    currentCalc.append(newCalc)
})

let divisionButton = document.querySelector(".division")
divisionButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = document.createTextNode("/")
    currentCalc.append(newCalc)
})

let multiplicationButton = document.querySelector(".multiplication")
multiplicationButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = document.createTextNode("*")
    currentCalc.append(newCalc)
})

let subtractionButton = document.querySelector(".subtraction")
subtractionButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = document.createTextNode("-")
    currentCalc.append(newCalc)
})

let additionButton = document.querySelector(".addition")
additionButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = document.createTextNode("+")
    currentCalc.append(newCalc)
})

let decimalButton = document.querySelector(".decimal")
decimalButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = document.createTextNode(".")
    currentCalc.append(newCalc)
})

let clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let newCalc = "";
    currentCalc.innerHTML=newCalc;
}) 

// let equalsButton = document.querySelector(".equals")
// equalsButton.addEventListener("click", function updateCalc(){
//     let currentCalc=document.querySelector(".calc")
//     let evaluation = currentCalc.innerText;
//     let answer = eval(evaluation);
//     currentCalc.innerHTML=answer;
// }) 

//This still works but doesn't throw the alert. Not sure why. 
try {
    let equalsButton = document.querySelector(".equals")
    equalsButton.addEventListener("click", function updateCalc(){
    let currentCalc=document.querySelector(".calc")
    let evaluation = currentCalc.innerText;
    let answer = eval(evaluation);
    currentCalc.innerHTML=answer;
}) 
  }
  catch(err) {
    alert("Please enter a valid equation.");
  }



  //This works
//   let equalsButton = document.querySelector(".equals")
// equalsButton.addEventListener("click", function updateCalc(){
//     let currentCalc=document.querySelector(".calc")
//     let evaluation = currentCalc.innerText;
//     let answer = eval(evaluation);
//     currentCalc.innerHTML=answer;
// }) 

//Failed attempt at an error message.  I know why, I just don't know how to evaluate against the result of the function vs the innerText. 
// let equalsButton = document.querySelector(".equals")
// equalsButton.addEventListener("click", function updateCalc(){
//     let currentCalc=document.querySelector(".calc")
//     let evaluation = currentCalc.innerText;
//     let answer = eval(evaluation);
//     if (isNaN(eval(evaluation))){
//         alert ("Please input a valid equation.")
//         } else {
//     currentCalc.innerHTML=answer;
// }}) 



//innerHTML


// document.getElementById("myText").value = "Johnny Bravo";
// innerHTML!!!
// concat



// var addOneToCalc = function(event){
//     console.log(event);
//     var calcDiv = document.querySelector(".calc");
//     if (calcDiv.innerText ===""){
//         var newEl=document.createElement('div')
//         var text = document.createTextNode("1")
//         newElement.appendChild(text)
//         calcDiv.appendChild(newEl)
//     } else {
//         var newEl=document.createElement('div')
//         var text = document.createTextNode("1")
//         newElement.appendChild(text)
//         calcDiv.appendChild(calcDiv.innerText + newEl)
//     }
// }

// calc.addEventListener("click", addOneToCalc);



// let existingElement = document.querySelector('.empty-div')
// // First select where you want to place the new content
// let newElement = document.createElement('div')
// // Create the new element
// let text = document.createTextNode("Hello there!")
// // Create some text
// newElement.appendChild(text)
// // Add text to new element
// existingElement.appendChild(newElement)
// Add that element to the DOM


// msgDiv.innerText = querySelector(".one"

// Examples from class
// let showHearts = function(event) {
// 	console.log(event);
// 	Var msgDiv = document.querySelector(“.message”);
// 	if  (msgDiv.innerText === “”){
// 	msgDiv.innerText = “<3<3<3”
// 	console.log(“HEARTS!”);
// } else {
// 	msgDiv.innerText=””;
// }
// }

// bear.addEventListener(“click”, showHearts);

// Function bearSays(){
// 	const bearMessages= [
// 	“Hello there friend!”,
// 	“I love you!”,
// 	“Do you have any honey?”,
// 	“Have you seen my hat?”,
// ];
// let msg = bearMessages[Math.floor(Math.random() * bearMessages.length)];
// //var hardCodedMsg = bearMessages[0];
// document.querySelector(“.message”).innerText=msg;


   // if (calcDiv.innerText ===""){
    //     var newEl=document.createElement('div')
    //     var text = document.createTextNode("1")
    //     newEl.appendChild(text)
    //     calcDiv.appendChild(newEl)
    // } else {
    //     var newEl=document.createElement('div')
    //     var text = document.createTextNode("1")
    //     newEl.appendChild(text)
    //     calcDiv.appendChild(calcDiv.innerText + newEl)
    // }


    // First and second attempts
    // var addOneToCalc = function(event){
    //     console.log(event);
    //     var calcDiv = document.querySelector(".calc");
    //     if (calcDiv.innerText ===""){
    //         var newEl=document.createElement('div')
    //         var text = document.createTextNode("1")
    //         newEl.appendChild(text)
    //         calcDiv.appendChild(newEl)
    //     } else {
    //         var newEl=document.createElement('div')
    //         var text = document.createTextNode("1")
    //         newEl.appendChild(text)
    //         calcDiv.appendChild(calcDiv.innerText + newEl)
    //     }
    // }
    
    // document.querySelector(".one").addEventListener("click", addOneToCalc);
    
    // var addOneToCalc = function(event){
    //     console.log(event);
    //     var calcDiv = document.querySelector(".calc");
    //     calcDiv = calcDiv.innerText + document.querySelector(".one").innerHTML
    // }
    
    // document.querySelector(".one").addEventListener("click", addOneToCalc);