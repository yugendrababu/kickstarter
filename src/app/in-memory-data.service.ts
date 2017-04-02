import { InMemoryDbService } from 'angular-in-memory-web-api';
import {PROJECTS} from './mock-projects'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let projects = [PROJECTS]
      
    return {projects};
  }
}