import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ITodo } from '../interface'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent implements OnInit {
  title: string = "";
  @Output() todoAdd: EventEmitter<ITodo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      "title": this.title,
      "active": true
    }
    this.title = "";
    this.todoAdd.emit(todo);
  }

  checkButton() {
    if (this.title === "") {
      return true
    }
    return false
  }
}
