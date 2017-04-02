import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {Projects} from './../projects';
import {ProjectService } from './../project.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']

  
  
})
export class DetailspageComponent implements OnInit {
    @Input() project: Projects;
    
    
    
    
  constructor( 
  private projectService : ProjectService,
  private route: ActivatedRoute,
  private location:Location,
  private router: Router
  

  )
  {}

  ngOnInit():void  {
  
  this.route.params
    .switchMap((params : Params)=> this.projectService.getProject(+params['sno']))
    .subscribe(project=> this.project=project)
  
  
  }
  
  goBack():void {
    this.location.back();   
   //this.projectsComponent.setSelected(this.project);    
  }
  redirect(){
     this.router.navigate(['https://www.kickstarter.com'+this.project.url]);
  }

}
