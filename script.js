const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container")
function addTask(){
    if(inputBox.value==='')
        alert("You must write something")
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value; // li element mai text update kar diya hai
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"; // add x icon.
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false); 
// We have to store all the tasks in our browser so whenever the browser is close it remain in the browser so that whenever we open the browser again our tasks list displayed as it.
function saveData(){
    localStorage.setItem("dta",listContainer.innerHTML);
}
// // We have to display the data whenever open the website again.
function showTask(){
    listContainer.innerHTML=localStorage.getItem("dta");
}
showTask();