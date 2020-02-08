import List from "../Models/List.js";
import _store from "../store.js"
import Task from "../Models/Task.js"

//Public
class ListService {
  constructor(){

  }
  addList(newList){
  newList = new List(newList)
_store.State.lists.push(newList)
_store.saveState()
  }
  deleteTask(id) {
    let tasks = _store.State.tasks.filter(task => task.id !== id)
    _store.State.tasks = tasks
   _store.saveState()

  }
  addTask(obj, listId) {
    let newTask = new Task(obj)
    let list = _store.State.lists.find(list => list.id === listId)
    list.task.push(newTask)
    console.log("storeTasks", _store.State.lists);
    
   _store.saveState()
  }

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
