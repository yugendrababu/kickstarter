import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailspageComponent } from './detailspage/detailspage.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'detail/:sno', component: DetailspageComponent },
  { path: 'projects',     component: ProjectsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}