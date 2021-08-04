import { Component, OnInit } from '@angular/core';

import { ITodo } from './interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  todoList: ITodo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(todoItem: ITodo): void {
    if (todoItem.title !== "") {
      this.todoList.unshift(todoItem);
    }
  }

  toggleCheckbox(index: number): void {
    this.todoList[index].active = !this.todoList[index].active;
    console.log(this.todoList);
  }

}
