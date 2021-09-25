let todoList = [
    { id: "4711", title: "Probeklausur erstellen", deadline: "14.06.2019", "status": "open" },
  { id: "4712", title: "Klausur erstellen", deadline: "01.07.2019", "status": "open" },
  { id: "4712", title: "nice  erstellen", deadline: "01.07.2019", "status": "open" }
];

let table = renderTable(todoList);
document.getElementById("target").appendChild(table);

function renderTable(todos) {

    var elem = document.getElementById("todotable");
    if (elem != null) {
        elem.parentNode.removeChild(elem);
    }
  
  let table = document.createElement("table");
  table.id = "todotable";
  
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
      
      let actionDone = row.insertCell();
      let saveBtnDone = document.createElement("button");
      saveBtnDone.innerHTML = "Done";
      actionDone.appendChild(saveBtnDone);
  
      let actionEdit = row.insertCell();
      let saveBtnEdit = document.createElement("button");
      saveBtnEdit.innerHTML = "Edit";
      actionEdit.appendChild(saveBtnEdit);

    }
  
  return table;
}


function addTodo() {
    // Add new Array Element
    todoList.push({id:'123',title:'',deadline:'01.01.1970',status:''});
    console.log(todoList);
    renderTable(todoList);
    document.getElementById("target").appendChild(renderTable(todoList));
}



function saveToDo(todo) {
  
}



