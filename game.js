let boxes =    document.querySelectorAll(".pots");
let rstBtn = document.querySelector("#reset_button");
let newGameBtn = document.querySelector("#new_button");
let msgCntnr = document.querySelector(".message_container");
let msg = document.querySelector("#message");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,5],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],

];



const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgCntnr.classList.add("hide");
};



boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
    
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;



    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});



const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgCntnr.classList.remove("hide");
  disableBoxes();
};



const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};



const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};



const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgCntnr.classList.remove("hide");
  disableBoxes();
};



const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
    if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};



newGameBtn.addEventListener("click", resetGame);
reset_button.addEventListener("click", resetGame);