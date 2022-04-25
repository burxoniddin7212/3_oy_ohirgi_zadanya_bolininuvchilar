let oneDividing=document.querySelector(".oneInput");
let twoDividing=document.querySelector(".twoInput");
var divizibl=document.querySelector(".addInput");
let onedividingresult=document.querySelector(".oneLet");
let twodividingresult=document.querySelector(".twoLet");
let onetwodividingresult=document.querySelector(".onetwolet");
let addBtn=document.querySelector(".btn");
let clearBtn=document.querySelector(".clearbtn");

let firstArry = [];
let oneArry=[];
let twoArry=[];
let onetwoArry=[];

addBtn.addEventListener("click", function(evt){
  evt.preventDefault();
    
  let a=oneDividing.value.trim();
  let b=twoDividing.value.trim();
  let c=divizibl.value.trim();

  for(let i=1; i<=c; i++){
   firstArry.push(i);
  }
  
  for(let user of firstArry){
    if(firstArry[user]%a==0){
      d=firstArry[user];
      oneArry.push(d);
    }

    if(firstArry[user]%b==0){
      e=firstArry[user];
      twoArry.push(e);
    }

    if(firstArry[user]%a==0 && firstArry[user]%b==0){
      l=firstArry[user];
      onetwoArry.push(l);
    }
  }

  for(let i=0;i<oneArry.length;i++){
    let newLi=document.createElement("li");
    newLi.textContent=oneArry[i];
    onedividingresult.appendChild(newLi);
  }

  for(let i=0;i<twoArry.length;i++){
    let newLi=document.createElement("li");
    newLi.textContent=twoArry[i];
    twodividingresult.appendChild(newLi);
  }

  for(let i=0;i<onetwoArry.length;i++){
    let newLi=document.createElement("li");
    newLi.textContent=onetwoArry[i];
    onetwodividingresult.appendChild(newLi);
  }
})

clearBtn.addEventListener("click", function(e){
  onedividingresult.innerHTML = "";
  twodividingresult.innerHTML = "";
  onetwodividingresult.innerHTML = "";
})






