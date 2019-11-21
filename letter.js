function Letter(character){
    (this).character= character.toString();
    (this).letterGuessed = false;
    (this).getDisplay = function(){
        if(this.letterGuessed===true){
            return this.character
        }else{
            return "_"
        }
    };
    (this).checkLetter = function(userGuess){
        if(this.character===userGuess){
            this.letterGuessed= true;
            console.log(letterGuessed);
        }
        // this.letterGuessed=this.character===character;
    }

}
module.exports=Letter;
// var test = new Letter("j");
// test.checkLetter();