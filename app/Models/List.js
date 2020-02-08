import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name;
    this.task = data.task || [];
  }
  
  get Task() {
    let template = ""
    this.task.forEach(task => {
      template += task.Template
    })
    return template
  }
  get Template(){
    return /* html */`
    <div class="col-6">
    <h1>${this.name}</h1>
    <h3>Tasks: ${this.Task}</h3>
    <form onsubmit="app.listController.addTask(event, '${this.id}')">
    <div class="form-group">
    <label for="">Tasks</label>
    <input type="text" name="taskName" class="form-control" placeholder=""
    aria-describedby="helpId">
    <button class="btn btn-primary" type="submit">Add Task</button>
    <button onclick="app.listController.deleteList('${this.id}')" class="btn btn-danger">Delete</button>
                        </div>
                    </form>
   
    
    </div>
    `
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
}