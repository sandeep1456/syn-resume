import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { AppRoutingModule } from './/app-routing.module';
import { ResumeFormComponent } from './resume-form/resume-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumePreviewComponent,
    ResumeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
