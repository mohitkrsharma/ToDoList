import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  index!: number;
  title = 'To-Do-List';
  addTaskForm!: FormGroup;
  customStyle: any = {};
  /* delcaring to do list array */
  todoList: string[] = [];
  modalService: any;
  closeResult!: string;
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    this.addTaskForm = new FormGroup({
      taskDetails: new FormControl(),
    });
  }

  /* function for adding task in array and in table */
  addTask() {
    if (
      this.addTaskForm.value.taskDetails === null ||
      this.addTaskForm.value.taskDetails === ''
    ) {
      /* do nothing */
    } else {
      this.todoList.push(this.addTaskForm.value.taskDetails);
      this.addTaskForm.get('taskDetails')?.reset();
    }
  }

  /* function for check/uncheck checkbox */
  checkEvent(event: any, data: string, index: number) {
    this.index = this.todoList.findIndex((o) => o === data);
    if (event.target.checked === true) {
      this.customStyle = {
        'text-decoration': 'line-through',
      };
      console.log('checked');
    } else {
      this.customStyle = {
        'text-decoration': 'none',
      };
      console.log('unchecked');
    }
  }

  /* delete record function */
  deleteRecord(data: any) {
    const index: number = this.todoList.indexOf(data);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
  }
}
