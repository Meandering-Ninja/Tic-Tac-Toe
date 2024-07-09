let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let newbtn= document.querySelector('#new');
let msgcont = document.querySelector('#msgcontainer');
let msg = document.querySelector('#msg');
let turnO = true; 

const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        
        if(turnO){
        box.innerText="O";
        turnO =false;
        }
        else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled=true;
        checkwinner();
    });
}
);
const disableboxes =() =>{
    for (let i of boxes){
        i.disabled = true;
    }
};
const showwinner=(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableboxes();
}
const checkwinner = () =>{
    for(let pattern of winpattern){
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText ;
        if(pos1 != "" && pos2 !="" && pos3 !=""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("Winner",pos1);
                showwinner(pos1);
            }
        }
    };
}
const enableboxes =() =>{
    for (let i of boxes){
        i.disabled = false;
        i.innerText = '';
    }
};
const res = () =>{
    turnO = true;
    enableboxes();
    msgcont.classList.add("hide");
};
newbtn.addEventListener("click",res);
reset_btn.addEventListener("click",res);