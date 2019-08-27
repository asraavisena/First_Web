window.onload=function(){

    document.getElementById("go").addEventListener("click", myFunction);
    var enemy = document.getElementById("enemy");
    var itsYOu = document.getElementById("itsYou");
    var check =false;
    var userChoice;
    
    function myFunction(){
    check=false;
    while(check===false){
            userChoice = prompt("Do you choose rock, paper or scissors?");

            if ((userChoice=="scissors") || (userChoice=="rock") || (userChoice=="paper")){
                check=true;    
            }
            else{check=false;
            }
        }
        
    var computerChoice = Math.random();
    if (computerChoice<0.34) {
        computerChoice = "rock";
        enemy.src="rock.jpg";
    } else if(computerChoice<0.67) {
        computerChoice = "paper";
        enemy.src="paper.jpg";
    } else {
        computerChoice = "scissors";
        enemy.src="scissors.jpg";
    } 

    var compare = function(choice1, choice2) {
        if ( choice1 === choice2 ){
            itsYou.src=enemy.src;
            return "The result is a tie!";
            }
        if (choice1 === "rock"){
            itsYou.src="rock.jpg";
            if(choice2 === "scissors"){
                return "rock win";
            }
            if(choice2 === "paper"){
                return "paper win";
            }
        }
        if (choice1 === "paper"){
            itsYou.src="paper.jpg";
            if(choice2 === "scissors"){
                return "scissors win";
            }
            if(choice2 === "rock"){
                return "paper win";
            }
        }
        if (choice1 === "scissors"){
            itsYou.src="scissors.jpg";
            itsYou.src="scissors.jpg";
            if(choice2 === "papers"){
                return "scissors win";
            }
            if(choice2 === "rock"){
                return "rock win";
            }
        }
    }
    document.getElementById("result").innerHTML=compare(userChoice, computerChoice);
    document.getElementById("help").innerHTML="Your enemy---------------------------------------------------------------------------------------You"
    }
}
