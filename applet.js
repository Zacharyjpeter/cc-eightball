let userName = "Zachary";
let userQuestion = "When will I get hired as a jr dev?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

if (userName) {
  console.log(`Hey ${userName}! You asked, "${userQuestion}"`);
} else {
  console.log("Bitch, enter your name!");
}

//output varies. Hey Zachary! You asked when will I get hired as a developer?
switch (randomNumber) {
  case 0:
    console.log("Its certain");
    break;
  case 1:
    console.log("Eh. Its pretty much happening");
    break;
  case 2:
    console.log("Reply hazy try again");
    break;
  case 3:
    console.log("Cant predict right now");
    break;
  case 4:
    console.log("AHA! Dont count on it");
    break;
  case 5:
    console.log("Sorry bro. My sources say no");
    break;
  case 6:
    console.log("Ooo. Its not looking so good");
    break;
  case 7:
    console.log("The starts are pointing to yes");
    break;
  default:
    console.log("Maybe this shouldnt happen...");
    break;
}

//same project. just a different way to do it
switch (randomNumber) {
  case 0:
    eightBall = "Its certain";
    break;
  case 1:
    eightBall = "Eh. Its pretty much happening";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cant predict right now";
    break;
  case 4:
    eightBall = "AHA! Dont count on it";
    break;
  case 5:
    eightBall = "Sorry bro. My sources say no";
    break;
  case 6:
    eightBall = "Ooo. Its not looking so good";
    break;
  case 7:
    eightBall = "The starts are pointing to yes";
    break;
  default:
    eightBall = "Maybe this shouldnt happen...";
    break;
}

console.log(eightBall);