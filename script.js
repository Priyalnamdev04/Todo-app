let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");
 btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    ul.appendChild(item)
    console.log("input value");
    input.value="";
    let deletebtn=document.createElement("button");
    deletebtn.innerText="delete";
    deletebtn.classList.add("delete");
    item.appendChild(deletebtn);
});
// let deletebtns=document.querySelectorAll("delete");
// for(deletebtn of deletebtns){
//     deletebtn.addEventListener("click",function(){
//        let par=this.parentElemnet;
//        confirm.log(par);
//        par.remove();
//     });
// }
ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    
    }
});