import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Todo from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos: Todo[] = [
    {
      name: 'Soqqa qilish',
      isCompleted: true
    },
    {
      name: 'Soqqa qilish',
      isCompleted: true
    },
    {
      name: 'Soqqa qilish',
      isCompleted: true
    },
    {
      name: 'Soqqa qilish',
      isCompleted: true
    },
    {
      name: 'Soqqa qilish',
      isCompleted: true
    },
  ];
  newTodo: string
  
  saveTodo() {
    if(this.newTodo) {
      const todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = '';
    } else(
      alert('Todoni Kiriting')
    )
  }


  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted
  }

  remove(id: number) {
    this.todos = this.todos.filter((_v,i) => i !== id)
  }
} 
