
const board = document.getElementById("board");


const gameBoard = 
[" "," "," ",
" "," "," ",
" "," "," "];

let won = false;
let winSymbol = "";

class Player {
    constructor(){
        this.pName = "Player";
        this.wins = 0;
        this.symbol = '';
    }

    getName(){
        return this.pName;
    }

    setName(player1name){
        this.pName = player1name;
    }

    getSymbol(){
        return this.symbol;
    }

    setSymbol(sym){
        this.symbol = sym;
    }
    
    
}


const Player1 = new Player();
const Player2 = new Player();

Player1.setSymbol("X");
Player2.setSymbol("O");

const gameFlow = (() => {

    const whatSymbol = (symbol) => {
        if (symbol == "X"){
        winSymbol = "X";

    } else if (symbol == "O"){
        winSymbol = "O";
    }
}

    const tieResult = (player) => {
        alert("tie")
    };

    const gameCondition = (value) => {
            if (gameBoard[0] == value && gameBoard[1] == value && gameBoard[2] == value){
                whatSymbol(value);
                return true; 
            } else if (gameBoard[0] == value && gameBoard[1] == value && gameBoard[2] == value){ //horizontal top
                whatSymbol(value);
                return true;
            } else if (gameBoard[3] == value && gameBoard[4] == value && gameBoard[5] == value){//horizontal medio
                whatSymbol(value);
                return true;
            } else if (gameBoard[6] == value && gameBoard[7] == value && gameBoard[8] == value){ // horizontal bottom
                whatSymbol(value);
                return true;
            } else if (gameBoard[0] == value && gameBoard[3] == value && gameBoard[6] == value){ //vertical izquierda
                whatSymbol(value);
                return true;
            } else if (gameBoard[1] == value && gameBoard[4] == value && gameBoard[7] == value){ //vertical centro
                whatSymbol(value);
                return true;
            } else if (gameBoard[2] == value && gameBoard[5] == value && gameBoard[8] == value){ // vertical derecha
                whatSymbol(value);
                return true;
            } else if (gameBoard[0] == value && gameBoard[4] == value && gameBoard[8] == value){ // diagonal hacia abajo a la derecha
                whatSymbol(value);
                return true;
            } else if (gameBoard[2] == value && gameBoard[4] == value && gameBoard[6] == value){ // diagonal hacia arriba a la derecha
                whatSymbol(value);
                return true;
            } else if (gameBoard.indexOf(" ") == -1){
                tieResult();
            }

        

        }
    
    

    const gameWon = (value) => {
        if (value == true){
            won = true;
            let s = winSymbol;
            counter = 1;
            whoWon(s);
            
        }
    }

    const whoWon = (s) => {
        if (Player1.getSymbol() == s){
            Player1.wins++;
            alert(Player1.getName() + " has won the game");
            console.log(Player1.wins)
        } else if (Player2.getSymbol() == s){
            Player2.wins++;
            alert(Player2.getName() + " has won the game");
            console.log(Player2.wins);

        }
    }
   

    
        let counter = 1;

        
            for (let i = 0; i < gameBoard.length; i++ ){
                const cell = document.createElement("div");
                cell.classList.add("boardcells");
                cell.innerHTML = gameBoard[i];

                let playing = function(e) {
                    
                    if (won == true){
                        return;

                    } else if (cell.innerHTML == "X" || cell.innerHTML == "O"){
                        return;
                    } else if (counter%2 == 1){
                        gameBoard[i] = "X";
                        cell.innerHTML = "X";
                        counter++;
                        let result = gameCondition("X")
                        gameWon(result);
                        console.log(gameBoard);
                        return counter;
                    
                    } else {
                        gameBoard[i] = "O";
                        cell.innerHTML = "O";
                        counter++;
                        let result = gameCondition("O")
                        gameWon(result);
                        console.log(gameBoard);
                        return counter;
                        
                    }
                
                    
                }
                
                cell.addEventListener("click", playing);

            board.appendChild(cell);

            
        
        } 
        
        const resetGame = () => {
            for (i = 0; i < gameBoard.length; i++){
                    const cell = document.getElementsByClassName("boardcells");
                    gameBoard[i] = " ";
                    cell[i].innerHTML = gameBoard[i];
                    
            }

            won = false;
        }
    
    
        const resetButton = document.getElementById("reset-button")
    
        resetButton.addEventListener("click", function(e){
            resetGame();
    
        });
        
    

})();


const playerDisplay = (() => {

    const player1Form = document.getElementById("player1Form");
    const player2Form = document.getElementById("player2Form");

    const player1NameDisplay = document.getElementById("player1namedisplay");
    const player2NameDisplay = document.getElementById("player2namedisplay");

    player1Form.addEventListener("submit", (e) => {

        Player1.setName(player1Form['player1name'].value);
        player1NameDisplay.innerHTML = Player1.getName();
        e.preventDefault();
        return player1name;
        
    });

    player2Form.addEventListener("submit", (e) => {

        Player2.setName(player2Form['player2name'].value);
        player2NameDisplay.innerHTML = Player2.getName();
        e.preventDefault();
        return player2name;
        
    });

    
})();



    

    
    /*

    const Player2 = (player2name) => {
        const getName = () => name;
    
        const win = () => {
           
            //player reach the conditions for winning
        };
    
        const playerMove = x => {
            
        }
    
        return {getName, playerMove, win}
    
    }
*/







