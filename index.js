function scuberGreetingForFeet(someValue){
    // Write your code here!
  if (someValue <= 400) return ("This one is on me!");
  else if (someValue <=2000) return ("That will be twenty bucks.");
  else if (someValue > 2000, someValue < 2500) return ("I will gladly take your thirty bucks.");
  else if (someValue > 2500) return ("No can do.")  
}

function ternaryCheckCity(someCity){
  // Write your code here!
  const cityMessage = someCity === "NYC" ? "Ok, sounds good." : "No go.";
  return cityMessage;
}

function switchOnCharmFromTip(someTip){
  // Write your code here!
if (someTip === "generous") return ("Thank you so much.");
if (someTip === "not as generous") return ("Thank you.");
else return ("Bye.");
}