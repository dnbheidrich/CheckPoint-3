import _listService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = _store.State.lists
  let listElem = document.getElementById("listRow")
  let template = ""

  lists.forEach(list => {
    template += list.Template
  })
  listElem.innerHTML = template
}


//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  addList(event) {
    

    event.preventDefault();

    let formData = event.target;

    let newList = {
      name: formData.listName.value
    }

    console.log(newList);

    _listService.addList(newList)
    _drawLists() 
  }

  addTask(event, id) {
    event.preventDefault();
    let formData = event.target;

    let newTask = {
      taskName: formData.taskName.value,
      listId: id,

    }
    console.log(newTask);

    _listService.addTask(newTask, id);
    console.log(_store.State.tasks);
    
    _drawLists();

  }



  deleteTask(id){
    debugger
    _listService.deleteTask(id)
    _drawLists()
  }



  deleteList(id){
  
debugger
_listService.deleteList(id);
_drawLists();



  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
