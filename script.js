let turnO=true;
let count=0;
let btns=document.querySelectorAll(".btn");
let resetBtn=document.querySelector(".reset-button");
let msg=document.querySelector(".msgCtnr");
let winner=document.querySelector("#msg");
let newbtn=document.querySelector(".newbtn");
let main=document.querySelector("main");
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let disable=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=btns[pattern[0]].innerText;
        let pos2=btns[pattern[1]].innerText;
        let pos3=btns[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1==pos2 && pos2==pos3){
            winner.innerText=`THE WINNER IS ${pos1}`;
            msg.classList.remove("hide");
            disable();
            main.classList.add("hide");
            }
        }
    }
}

const newGame=()=>{
    for(let btn of btns){
        btn.innerText="";
        btn.disabled=false;
    }
    msg.classList.add("hide");
    count=0;
    main.classList.remove("hide");
}

const reset=()=>{
    for(let btn of btns){
        btn.innerText="";
        btn.disabled=false;
    }
    msg.classList.add("hide");
    count=0;
}

const draw=()=>{
    winner.innerText="DRAW NO WINNER";
    msg.classList.remove("hide");
    main.classList.add("hide");
}

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(turnO){
        btn.innerText="O";
        turnO=false;
        }else{
        btn.innerText="X";
        turnO=true;
        
        }
        btn.disabled=true;
        checkWinner();
        count++;
        if(count==9){
            draw();
        }
    })

})

resetBtn.addEventListener("click",reset);
newbtn.addEventListener("click",newGame);