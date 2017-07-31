
var partial = "";
var fullText = "";


var ClozeCard = function(text, cloze) {
  this.text = text;
  this.cloze = cloze;
  this.partial = function(){

  var partial = this.text.replace(this.cloze, "...");

  return partial;
  
  };
  this.fullText = function(){

    this.fullText =  this.text;

    // console.log(this.fullText);
    return this.fullText;
  };
  this.errorCheck = function(){

    try { 
        if(this.text.includes(this.cloze) != true) throw "Invalid cloze statement";
    }   
    catch(err) {
        console.log("Input " + err);
    }  
  };
  this.errorCheck();
}

// exporting our Student constructor
module.exports = ClozeCard;