import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../project.service";
import {MatDialog} from "@angular/material/dialog";
import {TodoComponent} from "../todo/todo.component";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  titles: any;

  constructor(private service: ProjectService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.service.getToDoList('/titles').subscribe(data => {
      this.titles = data;
      console.log(data)
    })
  }

  addNewTodo() {
    const dialogRef = this.dialog.open(TodoComponent, {
        width: '60%',
        maxHeight: '100vh - 100px'
      }
    );
    dialogRef.afterClosed().subscribe(data => {
      this.service.getToDoList('/titles').subscribe(data => {
        this.titles = data;
      });
    })
  }

}
