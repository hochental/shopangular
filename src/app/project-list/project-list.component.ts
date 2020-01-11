import { Component, OnInit } from '@angular/core';
import {Project} from '../shared/project';
import {ProjectService} from '../project-service/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectList: Project[];

  constructor(private projectService:ProjectService) { }

  ngOnInit() {

    this.projectService.getProjects().subscribe( (project : Project[]) => {
      this.projectList=project;
    })

  }

}
