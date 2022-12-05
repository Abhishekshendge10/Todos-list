var todoArray = [];

function saveTodo() {
      let tittle = document.getElementById("tittle").value;
      todoArray.push(tittle);
      localStorage.setItem("Todos", todoArray.toString());
      document.getElementById("tittle").value = "";
      fetchTodos();

}
function fetchTodos() {
      let str = localStorage.getItem("Todos");
      todoArray = str.split(",");
      let htmlString = `
            <tr>
                  <th> Sr.NO. </th>
                  <th> Todo table </th>
                  <th> Action </th>
            </tr>
            ` ;
      let counter = 0;
      todoArray.forEach(ele => {
            counter++;
            htmlString += `
            <tr>
                <td> ${counter} </td>
                <td> ${ele} </td>
             <td>   
                <button onclick="editTodo(${counter - 1})"> Edit </button>
                <button onclick="deleteTodo(${counter - 1})"> Delete </button>
            </td>
            </tr>  `;

      })

      document.getElementById("todoTable").innerHTML = htmlString;
}
function editTodo(index){
      let newValue = prompt("Do you really want to change?",
      todoArray[index]);
      if(newValue!= "") {
            todoArray[index] = newValue;
            localStorage.setItem("Todos", todoArray.toString());
            fetchTodos();
      }

}

function deleteTodo(index) {
      todoArray.splice(index, 1);
      localStorage.setItem("Todos", todoArray.toString());
      fetchTodos();

}

    



