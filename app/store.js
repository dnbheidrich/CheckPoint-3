import List from "./Models/List.js";
import Task from "./Models/Task.js"

let _state = {
  /** @type {List[]} */
  lists: [],
  tasks: [],
};

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  try {
    let stateObj = JSON.parse(localStorage.getItem("TaskMaster"))
    _state.lists = stateObj.lists.map(l => {
      let list = new List(l)
      list.task = list.task.map(i => new Task(i))
      return list
    })
  } catch (e) {

  }
}
_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
