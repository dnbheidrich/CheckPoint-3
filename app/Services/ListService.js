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

  deleteList(id) {
    // confused on how this works relative to deleting tasks
    // why does filter work here but not when deleting taks
    let lists = _store.State.lists.filter(list => list.id !== id)
    

    let c = confirm("Are you sure?");
    if (c == true) {
      _store.State.lists = lists;
    } else {
      return;
    }
    
    _store.saveState()
    
  
  }
  addTask(obj, listId) {
    let newTask = new Task(obj)
    let list = _store.State.lists.find(list => list.id === listId)
  list.task.push(newTask)
     console.log("storeTasks", _store.State.lists);
    
   _store.saveState()
  }
  
  deleteTask(listId, taskId){
    // can only pop or shift them off the array having trouble filtering out the id of the task
    // can seem to grab the list but having trouble deleting the task off the list
    // why list.task is not referencing here but works in addTask
    // splice and findIndex methods very helpful
    let list = _store.State.lists.find(list => list.id === listId)
    let task = list.task.findIndex(task => task.id === taskId)
    
    list.task.splice(task, 1)

    // console.log("from deleteT", list);
    
// _store.State.lists
  
    
    

    
    let c = confirm("Are you sure?");
    if (c == true) {
      
  
  } else {
      
      return
    }
    _store.saveState()
  }

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
