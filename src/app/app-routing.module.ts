import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumePreviewComponent } from './resume-preview/resume-preview.component';

const routes: Routes = [
  { path: 'preview', component: ResumePreviewComponent },
  { path: '', redirectTo: '/preview', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
