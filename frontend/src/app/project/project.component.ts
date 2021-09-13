import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  titles: any;

  constructor(private service: ProjectService) {
  }

  ngOnInit(): void {
    this.service.getToDoList('/titles').subscribe(data => {
      this.titles = data;
      console.log(data)
    })
  }

}
