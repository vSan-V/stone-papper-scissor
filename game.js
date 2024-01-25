let playgame = confirm("ready to play stone, papper, scissor?");
if (playgame){
    let playerchoice=prompt("please type stone or papper, scissor");
    if(playerchoice){
      let playerone = playerchoice.trim().toLowerCase();
      if(playerone==="stone" || playerone === "papper" || playerone ==="scissor"){
        
        let computerchoice=Math.floor(Math.random()*3+1);
        let computer= computerchoice===1? "stone": computerchoice===2?"papper": "scissor";
      

        let result= playerone===computer?"tie game":playerone=="stone" && computer == "papper"?"computer wins":
        playerone=="papper"&& computer =="scissor"? "player wins": playerone == "papper" && computer=="stone"? "player wins": playerone=="scissor" && computer == "rock"? "computer wins": playerone=="scissor" && computer=="stone"?"computer wins":"player wins";
        alert(result);
        let playagain = confirm("want to play again");
        playagain ? location.reload : alert ("better luck for your time");
 }
    else{
        alert("please make sure you are entered 'stone','papper','scissor'");
    }
    }
    else{
        alert("thanks for visiting, you are cancelled");
       }
    }
else {
    alert("you are cancelled");
}