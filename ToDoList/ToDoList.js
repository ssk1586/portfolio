let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add');
    todo = document.querySelector('.todo');



let toDoList = [];

if (localStorage.getItem('todo')) {
    toDoList = JSON.parse(localStorage.getItem('todo'));
    displayMessage();
}

addButton.addEventListener('click', function () {

    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };
    toDoList.push(newTodo);
    displayMessage();
    localStorage.setItem('todo', JSON.stringify(toDoList));
});

function displayMessage() {
    let displayMessage = '';
    toDoList.forEach(function (item, i) {
        displayMessage += `
        <li>
        <input type='checkbox' id = 'item_${i}' ${item.checked ? 'checked' : ' ' }>
        <label for='item_${i}'> ${item.todo}</label>
        </li>
        `;
        todo.innerHTML = displayMessage;
    }
    )};