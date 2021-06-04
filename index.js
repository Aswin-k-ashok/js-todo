let addToDo=document.getElementById('addToDoContainer');
let toDoContainer=document.getElementById('toDoContainer');
let inputField=document.getElementById('inputField');
let del=document.getElementById('del');

addToDo.addEventListener("click",function(){
    var paragraph=document.createElement("h4")
    paragraph.innerText=inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener("click",function(){paragraph.style.textDecoration="line-through";})
    paragraph.addEventListener("contextmenu",function(){paragraph.style.textDecoration='';})
    paragraph.addEventListener("dblclick",function(){toDoContainer.removeChild(paragraph);})
    del.addEventListener("click",function(){toDoContainer.innerHTML="";})

})

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
//element.addEventListener("mouseover", myFunction);

let info=document.getElementById('info');

info.addEventListener("click",function(){window.alert
("use input box to add your task, left click to strike the event, right click to unstrike , double click to delete the event ");})