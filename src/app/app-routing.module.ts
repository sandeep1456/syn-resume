import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';

const routes: Routes = [
  { path: 'preview', component: ResumePreviewComponent },
  { path: 'update', component: ResumeFormComponent },
  { path: '', redirectTo: '/preview', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
