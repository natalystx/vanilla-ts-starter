let input = "";
let inputTodo = {};
let todos = [];
let editId = 0;
let editTitleInput = "";

const todoSectionElement = document.getElementById("id-todos-section");
const editModalElement = document.getElementById("edit-modal");

function onDone(id) {
  const todoTemp = [];
  todos.forEach((item, index) => {
    if (item.id === id) {
      item.done = true;
      todoTemp.push(item);
    } else {
      todoTemp.push(item);
    }
  });

  todos = todoTemp;

  todoSectionElement.innerHTML = "";
  todos.forEach((item) => {
    renderTodo(item);
  });
}

function renderTodo(todo) {
  todoSectionElement.innerHTML += `<li class="${todo.done ? "done" : ""}">
  ${todo.title} 
  <button onclick={onDone(${todo.id})}>done</button>
  <button onclick={onEdit(${todo.id})}> edit   </button>
  <button onclick={deleteTodo(${todo.id})}> delete   </button>
  </li>`;
}

function onSave() {
  const todoTemp = [];
  todos.forEach((item, index) => {
    if (item.id === editId) {
      item.title = editTitleInput;
      todoTemp.push(item);
    } else {
      todoTemp.push(item);
    }
  });

  todos = todoTemp;

  todoSectionElement.innerHTML = "";
  todos.forEach((item) => {
    renderTodo(item);
  });
  editModalElement.style.display = "none";
}

function onEdit(id) {
  editModalElement.style.display = "block";
  editId = id;
}

function deleteTodo(id) {
  todos = todos.filter((item) => item.id !== id);
  todoSectionElement.innerHTML = "";
  todos.forEach((item) => {
    renderTodo(item);
  });
}

function addTodoList(event) {
  input = event.target.value;
  if (!input) return;
  inputTodo = {
    id: Date.now(),
    title: input,
    done: false,
  };

  todos.push(inputTodo);
}

function editTodoList(event) {
  editTitleInput = event.target.value;
}

const numbers = [0, 1, 2, 4, 5, 67, 4, 5];

let sum = 0;

// forEach
numbers.forEach((n) => {
  sum += n;
});

// filter

const oddNumbers = numbers.filter((n) => n % 2 !== 0);

// map
const newArray = numbers.map((n) => n * 4);

// alert(sum);

// alert(JSON.stringify(newArray));
