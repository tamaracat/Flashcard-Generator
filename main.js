// requiring our Classroom module exported from classroom.js
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

// creating and storing a new classroom object
var DeuschBasic = new BasicCard("What time is it in Deuche: ", "wie spät ist es");

    console.log("BASIC FRONT: ", DeuschBasic.front);
    console.log("BASIC BACK: ",DeuschBasic.back);

var clozeText = getClozeInput(DeuschBasic.back, DeuschBasic.front);

var Deusch = new ClozeCard(clozeText, DeuschBasic.back);

// console.log(Deusch.text);
console.log("CLOZE ", Deusch.cloze);

console.log("PARTIAL ", Deusch.partial());

console.log("FULL TEXT ",Deusch.fullText());

function getClozeInput(answer, question){

    var clozeText = answer + " is " + question;

    return clozeText;

};


