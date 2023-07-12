let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input');

//local storage key-value pairs
let todos=[];
window.onload = ()=>{
	todos = JSON.parse(localStorage.getItem('todos')) || []
	todos.forEach(todo=>addtodo(todo))
}

button.addEventListener('click',()=>{
	todos.push(input.value)
	//local storage adding entire array
	localStorage.setItem('todos',JSON.stringify(todos))
	//add i/p value
	addtodo(input.value)
	//clear after every i/p value
	input.value = ''
})

//para
function addtodo(todo){
	let para = document.createElement('p')
	para.innerText = todo;
	//append to div
	todoList.appendChild(para)
	//if single click ----> task done
	para.addEventListener('click', ()=>{
		para.style.textDecoration = 'line-through'
		//to remove from array
		remove(todo)
	})

	//if double-click remove from para
	para.addEventListener('dblclick', ()=>{
		todoList.removeChild(para)
		remove(todo)
	})
}

function remove(todo){
	let index = todos.indexOf(todo)
	if(index>-1){
		todos.splice(index,1)//remove = splice
	}
	//after removing update todos array
	localStorage.setItem('todos',JSON.stringify(todos))
}