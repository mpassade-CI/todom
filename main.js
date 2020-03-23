const todos = []
const list = document.querySelector('ol.todo-list')
const add = document.querySelector('button.add-todo')
const todoInput = document.querySelector('input.todo-input')
const remove = document.querySelector('button.remove-todo')
const indexInput = document.querySelector('input.index-input')
const app = document.querySelector('.app')

const printTodo = function(x){
    const item = document.createElement('li')
    item.innerText = x
    list.appendChild(item)
}
const printAll = function(){
    for (const x of todos){
        printTodo(x)
    }
    const clear = document.createElement('button')
    clear.className = 'clear-button'
    clear.innerText = 'CLEAR LIST'
    app.appendChild(clear)
    clear.addEventListener('click', removeAll)
}
const addItem = function(x){
    todos.push(x)
}
const clickAdd = function(){
    clearList()
    addItem(todoInput.value)
    printAll()
    todoInput.value = ''
}
const removeItem = function(x){
    let y = Number(x)
    if (y>=1){
        todos.splice(y-1,1)
    }
}
const clearList = function(){
    for (const x of todos){
        list.removeChild(list.childNodes[0])
    }
    if (app.lastElementChild.className==='clear-button'){
        app.removeChild(document.querySelector('.clear-button'))
    }
}
const removeAll = function(){
    clearList()
    todos.length = 0
}
const clickRemove = function(){
    clearList()
    removeItem(indexInput.value)
    printAll()
    indexInput.value = ''
    if (todos.length===0){
        app.removeChild(document.querySelector('.clear-button'))
    }
}
const clickRemove2 = function(e){
    let i = 0
    while (e.target!==list.childNodes[i]){
        i++
    }
    clearList()
    todos.splice(i,1)
    printAll()
    if (todos.length===0){
        app.removeChild(document.querySelector('.clear-button'))
    }
}

add.addEventListener('click', clickAdd)
remove.addEventListener('click', clickRemove)
list.addEventListener('click', clickRemove2)


