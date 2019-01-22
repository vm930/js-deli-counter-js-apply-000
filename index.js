let line = []
let num = 0;

function takeANumber (katzDeliLine){
  //put newCustomer into an array
  num++;
  katzDeliLine.push(num);
  return `Welcome, you are at ${num}`; 
}

console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(takeANumber(line))
  
  
  // // take the name from Array
  // let numberInLine = katzDeliLine.indexOf(newCustomer) + 1;
  
  // return `Welcome, ${newCustomer}. You are number ${numberInLine} in line.`; // welcome num, you are number ...


function nowServing (katzDeliLine){
  // for (let i = 0; i < katzDeliLine.length; i++) {
  //   //looping thru the array of customers and taking the frist element of the array out and assign it to a variable 
   
   if (katzDeliLine.length === 0){
     // case when the length is actually equal to 0
    return `There is nobody waiting to be served!`;
   }
    else{
    let currentCustomer = katzDeliLine.shift(); 
    return `Currently serving ${currentCustomer}.`;
    }    
  //}
    
}

function currentLine (katzDeliLine) {
    if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
 else {
    let buildString = [];
   //loop through array and return as string
   for (let i = 0; i < katzDeliLine.length; i++){
     let numberInArr = (i+1).toString(); //building the index number in front of the name 1. adam, 2.victoria
      buildString.push(` ${numberInArr}. ${katzDeliLine[i]}`); // 1.victoria
   }
  return "The line is currently:" + buildString.toString();
  }
}