const btnE1=document.querySelector(".btn")
const inputEle=document.querySelector("#input-field")
const taskEle=document.querySelector(".list-item")




btnE1.addEventListener("click", ()=>{
console.log("you clicked me")
console.log(inputEle.value)
if(inputEle.value === ""){ //if inputfield is empty
    alert("Please add your Task First");
}
// creat an list element (li )and add(again and again :append) task:input on it
else{
let listEle = document.createElement("li")
//and the input content or value set on li
listEle.textContent = inputEle.value
//the element is created and input text content seted on created element
//now set this listElement on list-item class which is in html ground
taskEle.appendChild(listEle) //all times append on list-item class

//there is need of deletion of task on listElement
//first creat icon/delete/cross
let spanEle = document.createElement("span")
spanEle.textContent = "\u00d7"
//add(again and again:append) this elelment on listElement
listEle.appendChild(spanEle)

}
//there is inputfiled is field with content so empty it after add
inputEle.value=""
saveli()//save on localstorage
})




//now click on taskElement to perform done undone 
taskEle.addEventListener("click",(e)=>{ //takes a parameter to add something on click
    //alert("you click on taskElement")

    if(e.target.tagName == "LI"){//if tagname==li toggle classlist checked(when tap on tasksEle)
        e.target.classList.toggle("checked") 

        saveli()//call saveli to save on localstorage
    }else if(e.target.tagName == "SPAN"){//otherwise if tagname == span remove parentElement(when tap on cross)
        alert("you remove your task")
        e.target.parentElement.remove()

        saveli()//call saveli to save on localstorage
    }
    
})




//completed ,but wait when we refresh the page it statts aging from begining ;use localstorage
function saveli(){
    localStorage.setItem("task",taskEle.innerHTML)
}
function getli(){
    taskEle.innerHTML = localStorage.getItem("task")
}

//call getli() to activate
getli()




