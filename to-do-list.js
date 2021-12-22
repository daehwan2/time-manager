const toDo = document.querySelector(".todo");
const todoText = document.querySelector(".todo-text");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoDeleteAllBtn = document.querySelector(".todo-delete-all-button");
let datas;
let id;
const loadData = () => {
  datas = JSON.parse(localStorage.getItem("datas"));

  if (datas) {
    console.log(datas);
    id = datas[datas.length - 1].id + 1;
  } else {
    datas = [];
    id = 1;
    console.log("e");
  }
};

const paintData = () => {
  if (datas) {
    for (let i = 0; i < datas.length; i++) {
      const text = datas[i].content;
      const todoItem = document.createElement("li");
      const deleteBtn = document.createElement("button");
      todoItem.id = datas[i].id;
      todoItem.classList.add("todo-item");
      deleteBtn.classList.add("delete-button");

      deleteBtn.addEventListener("click", deleteFunc);
      deleteBtn.innerText = "삭제";
      todoItem.innerHTML = "<div>" + text + "</div>";
      todoItem.appendChild(deleteBtn);
      todoList.appendChild(todoItem);
    }
  } else {
  }
};

const deleteFunc = (event) => {
  todoList.removeChild(event.target.parentElement);
  const _datas = datas.filter((data) => {
    return data.id !== Number(event.target.parentElement.id);
  });
  console.log(event.target.parentElement.id, _datas);

  localStorage.setItem("datas", JSON.stringify(_datas));
  if (_datas.length === 0) {
    localStorage.removeItem("datas");
  }
  loadData();
};
todoButton.addEventListener("click", () => {
  const text = todoText.value;
  const todoItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  if (text !== "") {
    todoText.value = "";
    todoItem.id = id;
    todoItem.classList.add("todo-item");
    deleteBtn.classList.add("delete-button");
    deleteBtn.innerText = "삭제";
    deleteBtn.addEventListener("click", deleteFunc);
    todoItem.innerHTML = "<div>" + text + "</div>";
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
    const data = { id: id, content: text };
    datas.push(data);
    localStorage.setItem("datas", JSON.stringify(datas));
  } else {
    alert("할일을 입력해주세요🤔");
  }
  loadData();
});

todoDeleteAllBtn.addEventListener("click", () => {
  if (datas.length !== 0) {
    localStorage.removeItem("datas");
    const toDoItems = document.querySelectorAll(".todo-item");
    for (let i = 0; i < toDoItems.length; i++) {
      toDoItems[i].remove();
    }
    loadData();
  } else {
    alert("할일이 없어요😅");
  }
});

loadData();
paintData();
