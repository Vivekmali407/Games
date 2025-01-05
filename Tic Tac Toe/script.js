let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO= true; //playerX, player O


const winPatterns = [
    [1,0,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
let count = 0

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button clicked");
        
        if (turnO){
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
            box.disabled = true;

        }
        else{
            box.innerText = "X";
            box.style.color = "green";
            turnO = true;
            box.disabled = true;
        }
        
        count++
        let isWinner = checkWinner();
        if (count === 9 && !isWinner){
            gameDraw();
        }

    });
});

const gameDraw = () => {
    msg.innerText = "Oops! Game is Draw.";
    msgContainer.classList.remove("hide")
    disableBoxes()

}

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;   
    }
}

const enableBoxes= () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
   
}



const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner",pos1val)
                showwinner(pos1val);
                return true;
            }
        }
    }

}


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);