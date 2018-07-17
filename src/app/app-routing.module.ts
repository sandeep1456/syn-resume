import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'preview/:empId', component: ResumePreviewComponent },
  { path: 'update/:empId', component: ResumeFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
