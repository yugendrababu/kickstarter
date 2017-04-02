import { Component , OnInit} from '@angular/core';
import {Projects} from './../projects';
import {ProjectService } from './../project.service';


@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjectService]
})
export class ProjectsComponent implements OnInit  {
title=" List of Projects";
  
  projects :Projects [];
  selectedProject:Projects;
  
   constructor(private projectService: ProjectService) { }
   
   onSelect(project : Projects): void {
    this.selectedProject = project;
  }
  
  getProjects():void {
  this.projectService.getProjects().then(projects => this.projects=projects);  
  }
  
  ngOnInit(): void {
    this.getProjects();
  }
  
  setSelected(project : Projects):void{
  console.log('selected');
    this.selectedProject=project;
  }
  
}