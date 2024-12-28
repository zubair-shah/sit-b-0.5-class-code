
// ===============add-todo-function===============

function addtodo() {
    let todo_item = document.getElementById('todo-item');
    let li = document.createElement('li');
    let liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);
    //    =====editbutton====
    let editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.setAttribute("id", "edit")
    editButton.setAttribute("onclick", "editFunction(this)");
    li.appendChild(editButton)

    // ==========delete-button==============
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("id", "delete")
    deleteButton.setAttribute("onclick", "deleteFunction(this)");
    li.appendChild(deleteButton)

    let ol = document.getElementById('list');
    ol.appendChild(li);
}

function editFunction(e) {
    console.log(e)
    let currentValue = e.parentNode.firstChild.nodeValue;
    let newEditValue = prompt("Enter your New Value", currentValue)
    console.log(currentValue)
    console.log(newEditValue)
    e.parentNode.firstChild.nodeValue = newEditValue;
}
function deleteFunction(e) {
    console.log(e.parentNode)
    e.parentNode.remove();
}

function deletall() {
    document.getElementById("list").innerHTML = " ";
}