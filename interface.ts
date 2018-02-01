/*
function showToDo(todo: {title: string, text:string});
console.log(todo.title+ ': '+todo.text);

let myTodo = {title: 'trash', text: 'take out trash'}

showToDo(myTodo)
*/

interface: Todo{
    title:string;
    text:string;

}

function showToDo(todo: Todo){
    console.log(todo.title+ ': '+ todo.text)
}

let myTodo = {title: 'trash', text: 'take out trash'}
 showToDo(myTodo);