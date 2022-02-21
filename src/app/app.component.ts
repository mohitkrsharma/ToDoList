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
  pendingToDoList: string[] = [];
  completedToDoList: string[] = [];
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
      this.pendingToDoList.push(this.addTaskForm.value.taskDetails);
      this.addTaskForm.get('taskDetails')?.reset();
    }
  }

  /* function for check/uncheck checkbox */
  checkEvent1(event: any, data: string, index: number) {
    this.index = this.pendingToDoList.findIndex((o) => o === data);
    if (event.target.checked === true) {
      this.completedToDoList.push(data);
      if (index !== -1) {
        this.pendingToDoList.splice(index, 1);
      }
    } else {
      /* do nothing */
    }
  }

  checkEvent2(event: any, data: string, index: number) {
    this.index = this.completedToDoList.findIndex((o) => o === data);
    if (event.target.checked === true) {
      this.pendingToDoList.push(data);
      if (index !== -1) {
        this.completedToDoList.splice(index, 1);
      }
    } else {
      /* do nothing */
    }
  }

  /* delete record function */
  /*   deleteRecord(data: any) {
    const index: number = this.pendingToDoList.indexOf(data);
    if (index !== -1) {
      this.pendingToDoList.splice(index, 1);
    }
  } */
}
