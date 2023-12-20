import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'to-do',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './to-do.page.html',
  styleUrl: './to-do.page.scss'
})

export class ToDoPage implements OnInit  {
  taskObj: Task;
  taskList: Task[] = [];
  originalTaskList: Task[] = [];
  tagsList: string[] = ['Work', 'Meeting', 'Study', 'Entertainment', 'Meal', 'Personal', 'Shopping', 'Others'];
  filterType: string = '';
  selectedTag: string = '';

  constructor(private dataService: DataService) {
    this.taskObj = new Task();
  }

  ngOnInit() {
    const storedData = this.dataService.getData('todoApp');
    console.log("storedData:", storedData);
    if (storedData != null) {
      this.taskList = storedData;
      this.originalTaskList = this.taskList;
    }
  }

  
  createNewTask(): void {
    const task = JSON.stringify(this.taskObj);
    const parseTask = JSON.parse(task);

    if(parseTask.taskName === undefined || parseTask.taskName === null || parseTask.taskName === '') {
      alert('Please enter task name');
      return;
    }
    if(parseTask.dueDate === undefined || parseTask.dueDate === null || parseTask.dueDate === '') {
      alert('Please enter due date');
      return;
    }
    if(parseTask.tags === undefined || parseTask.tags === null || parseTask.tags === '') {
      alert('Please enter tags');
      return;
    }
    this.originalTaskList.push(parseTask);
    this.taskList = this.originalTaskList;
    this.dataService.setData('todoApp', this.taskList)
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
    if(str !== undefined && str !== null && str !== ''){
      const arr = str.split(',');
      return arr;
    }
    return [];
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
  taskName!: string;
  dueDate!: string;
  tags!: string;
  isCompleted!: boolean;
}







  
