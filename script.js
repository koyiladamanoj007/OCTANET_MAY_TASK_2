const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.querySelector("button");

const addTask = () => {
  if (inputBox.value === "") {
    alert("You need to type something...");
  } else {
    let listEl = document.createElement("li");
    listEl.innerHTML = inputBox.value;
    listContainer.appendChild(listEl);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listEl.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

btn.addEventListener("click", addTask);

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
