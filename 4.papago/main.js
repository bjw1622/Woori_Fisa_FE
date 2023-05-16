const arr = [];
const textInput = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-task");
const todoList = document.querySelector(".todo-list");
let inputText = "";
textInput.addEventListener("change", (e) => {
  inputText = e.target.value;
});

addBtn.addEventListener("click", () => {
  const todo = {
    id: Math.random().toString(16).slice(2),
    inputText: inputText,
  };
  if (todo.inputText === "") {
    return;
  }
  function test() {
    console.log("test");
  }
  test();
  arr.push(todo);
  textInput.value = "";
  inputText = "";
  const todoDiv = `
  <div class="todo">
  <input type="checkbox" id="check-box" />
  <div>${todo.inputText}</div>
  <button id=del-button>삭제</button>
  </div>
  `;
  todoList.innerHTML += todoDiv;
});
