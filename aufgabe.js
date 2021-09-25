let todoList = [
    { id: "4711", title: "Probeklausur erstellen", deadline: "14.06.2019", "status": "open" },
  { id: "4712", title: "Klausur erstellen", deadline: "01.07.2019", "status": "open" }
];

let table = renderTable(todoList);
document.getElementById("target").appendChild(table);

function renderTable(todos) {
  
  let table = document.createElement("table");
  
  let header = table.createTHead().insertRow();
  let headings = ["Titel", "Termin", "Aktion"];
  for (const heading of headings) {
      let th = document.createElement("th");
      let text = document.createTextNode(heading);
      th.appendChild(text);
      header.appendChild(th);
  }
  
  let body = table.createTBody();
  for (const todo of todos) {
      let row = body.insertRow();
      
      let title = row.insertCell();
      let titleInput = document.createElement("input");
      titleInput.disabled = true;
      titleInput.value = todo.title;
      title.appendChild(titleInput);
      
      let deadline = row.insertCell();
      let deadlineInput = document.createElement("input");
      deadlineInput.disabled = true;
      deadlineInput.value = todo.deadline;
      deadline.appendChild(deadlineInput);
      
      let action = row.insertCell();
      let saveBtn = document.createElement("button");
      saveBtn.innerHTML = "Speichern";
      action.appendChild(saveBtn);
  }
  
  return table;
}

function addTodo() {
  
}



function saveToDo(todo) {
  
}