import { generateId } from "../utils.js"

export default class Task {
  constructor(data) {
    this.taskName = data.taskName
    this.id = data.id || generateId()
    this.listId = data.listId
  }

  get Template() {
    return /*html*/`
<div class="col-6">
<h1>${this.taskName}</h1>
<button onclick="app.listController.deleteTask('${this.id}')" class="btn btn-danger">Delete</button>
</div>
`
  }

}