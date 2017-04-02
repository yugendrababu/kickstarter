import { Injectable } from '@angular/core';
import {PROJECTS} from './mock-projects'
import {Projects} from './projects';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

   getProjects(): Promise<Projects []> {
   return Promise.resolve(PROJECTS);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  
  getProject(sno: number): Promise <Projects>{
  
  return this.getProjects()
             .then(projects=> projects.find(project => project.sno===sno));
  
  }
   search(term: string): Observable<Projects[]> {
    return this.http
               .get(`projects/?name=${term}`)
               .map(response => response.json() as Projects[]);
  }
  
  
  
  
}
