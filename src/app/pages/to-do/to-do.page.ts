import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'to-do',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './to-do.page.html',
  styleUrl: './to-do.page.scss'
})

export class ToDoPage  {
  taskObj: Task;
  taskList: Task[] = [];
  originalTaskList: Task[] = [];
  tagsList: string[] = ['Work', 'Meeting', 'Study', 'Entertainment', 'Meal', 'Personal', 'Shopping', 'Others'];
  filterType: string = '';
  selectedTag: string = '';

  constructor() {
    this.taskObj = new Task();
    const localData = localStorage.getItem('todoApp');
    if (localData != null) {
      this.taskList = JSON.parse(localData);
      this.originalTaskList = this.taskList;
    }
  }
  createNewTask(): void {
    const task = JSON.stringify(this.taskObj);
    const parseTask = JSON.parse(task);
    this.originalTaskList.push(parseTask);
    this.taskList = this.originalTaskList;
    localStorage.setItem('todoApp', JSON.stringify(this.taskList))
    this.taskObj = new Task();
    this.filterType = '';
  }

  onComplete(): void {
    this.originalTaskList = this.taskList;
    localStorage.setItem('todoApp', JSON.stringify(this.taskList))
  }

  onRemove(index:number) {
    this.taskList.splice(index, 1);
    this.originalTaskList = this.taskList;
    localStorage.setItem('todoApp', JSON.stringify(this.taskList))
  } 

  getArrayFromCommaSeparatedString(str: string): string[] {
    const arr = str.split(',');
    return arr;
  }

  setFilter(filterType: string): void {
    this.filterType = filterType;
    this.selectedTag = '';
    if(filterType === 'completed') {
      this.taskList = this.originalTaskList.filter((task) => {
        return task.isCompleted;
      });
    }
    else if(filterType === 'incomplete') {
      this.taskList = this.originalTaskList.filter((task) => {
        return !task.isCompleted;
      });
    } 
    else {
      this.taskList = this.originalTaskList;
    }

  }

  filterByTag() {
    const filteredList = this.originalTaskList.filter((task) => {
      return task.tags.includes(this.selectedTag);
    });
    this.taskList = filteredList;
  }

}
export class Task {
  taskName: string;
  dueDate: string;
  tags: string;
  isCompleted: boolean;
  constructor() {
    this.taskName = "";
    this.dueDate = "";
    this.tags = "";
    this.isCompleted = false;
  }
}







  
