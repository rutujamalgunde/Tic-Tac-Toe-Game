let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Clicke");
        if(turnO){
            box.innerText="O";
            turnO = false;
        }else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
       
    })
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();

}
const checkWinner = () =>{
    for(let pattern of winningPattern){
        
        let position0 = boxes[pattern[0]].innerText;
        let position1 = boxes[pattern[1]].innerText;
        let position2 = boxes[pattern[2]].innerText;

        if(position0!="" && position1!="" && position2!=""){
            if(position0===position1 && position1===position2){
                console.log("Winner",position0);
                
                showWinner(position0);
            }
        }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
