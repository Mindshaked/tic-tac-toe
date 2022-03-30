
const board = document.getElementById("board");


const gameBoard = 
[" "," "," ",
" "," "," ",
" "," "," "];


const gameFlow = (() => {

    const tieResult = (player) => {
        alert("tie")
    }

    const gameCondition = (value) => {
            if (gameBoard[0] == value && gameBoard[1] == value && gameBoard[2] == value){
                return true; 
            } else if (gameBoard[0] == value && gameBoard[1] == value && gameBoard[2] == value){ //horizontal top
                return true;
            } else if (gameBoard[3] == value && gameBoard[4] == value && gameBoard[5] == value){//horizontal medio
                return true;
            } else if (gameBoard[6] == value && gameBoard[7] == value && gameBoard[8] == value){ // horizontal bottom
                return true;
            } else if (gameBoard[0] == value && gameBoard[3] == value && gameBoard[6] == value){ //vertical izquierda
                return true;
            } else if (gameBoard[1] == value && gameBoard[4] == value && gameBoard[7] == value){ //vertical centro
                return true;
            } else if (gameBoard[2] == value && gameBoard[5] == value && gameBoard[8] == value){ // vertical derecha
                return true;
            } else if (gameBoard[0] == value && gameBoard[4] == value && gameBoard[8] == value){ // diagonal hacia abajo a la derecha
                return true;
            } else if (gameBoard[2] == value && gameBoard[4] == value && gameBoard[6] == value){ // diagonal hacia arriba a la derecha
                return true;
            } else if (gameBoard.indexOf(" ") == -1){
                tieResult();
            }

        }
    
     

    const gameWon = (value) => {
        if (value == true){
            alert("has won the game");
            

        }
    }

   

    
        let counter = 1;

        
            for (let i = 0; i < gameBoard.length; i++ ){
                const cell = document.createElement("div");
                cell.classList.add("boardcells");
                cell.innerHTML = gameBoard[i];
                
                cell.addEventListener("click", function(e) {
                    
                    if (cell.innerHTML == "X" || cell.innerHTML == "O"){
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
                
                    
                });

            board.appendChild(cell);

            
        
        } 
        
        const resetGame = () => {
            for (i = 0; i < gameBoard.length; i++){
                    const cell = document.getElementsByClassName("boardcells");
                    gameBoard[i] = " ";
                    cell[i].innerHTML = gameBoard[i];
                    
            }
        }
    
    
        const resetButton = document.getElementById("reset-button")
    
        resetButton.addEventListener("click", function(e){
            resetGame();
    
        });
        
    

})();





/*
const Player = (name) => {
    const getName = () => name;

    const win = () => {
       
        //player reach the conditions for winning
    };

    const playerMove = x => {
        
    }

    return {getName, playerMove, win}

}

// const gameflow = 

/*const boardCells = document.getElementsById("boardcells");


for (var i = 0 ; i < boardCells.length; i++) {
    boardCells[i].addEventListener("click", function(e) {
        boardCells.innerHTML = "X";
    }); 

}

*/