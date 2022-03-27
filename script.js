
const board = document.getElementById("board");


const gameBoard = 
[" "," "," ",
" "," "," ",
" "," "," "];


const gameFlow = (() => {



 /*const gameCondition = () => {
        if (gameBoard[])
    }   CHECK THE WINNING CONDITIONS AND THEN ADD THE FUNCTION TO THE EVENTLISTENER
    */


    let counter = 1;
    for (let i = 0; i < gameBoard.length; i++ ){
        const cell = document.createElement("div");
        cell.classList.add("boardcells");
        cell.innerHTML = gameBoard[i];
        
        cell.addEventListener("click", function(e) {
            
            if (cell.innerHTML == "X" || cell.innerHTML == "O"){
                return;
            } else if (counter%2 == 1){
                console.log(gameBoard);
                gameBoard[i] = "X";
                cell.innerHTML = "X";
                counter++;
                return counter;
            
            } else {
                gameBoard[i] = "O";
                cell.innerHTML = "O";
                counter++;
                return counter;
                
            }
        
            
        });

        board.appendChild(cell);
    }

   

})();



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