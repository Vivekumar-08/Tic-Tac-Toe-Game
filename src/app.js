let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let newBtn = document.querySelector(".playBtn");
let msgContainer = document.querySelector(".msg__container");
let msg = document.querySelector("#msg");

let turnO = false;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
 
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!turnO) {
      box.innerText = "X";
      box.classList.add("x");
      turnO = true;
    } else {
      box.innerText = "O";
      box.classList.add("o");
      turnO = false;
    }
    box.disabled = true;
    checkWinner();
  });
});
 
const showWinner = (winner) => {
  msg.innerText = `Congratulations 🎉, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

const checkWinner = () => {
  let isDraw = true;
 
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return;  
      }
    }
  }
 
  boxes.forEach((box) => {
    if (box.innerText === "") {
      isDraw = false;
    }
  });

  if (isDraw) {
    msg.innerText = "It's a Draw! 🤝";
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
}; 

const resetGame = () => {
  turnO = false;
  enableBoxes();
  msgContainer.classList.add("hide");
};
 
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
