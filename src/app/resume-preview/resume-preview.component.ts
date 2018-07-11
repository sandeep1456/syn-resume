import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume-preview',
  templateUrl: './resume-preview.component.html',
  styleUrls: ['./resume-preview.component.css']
})
export class ResumePreviewComponent implements OnInit {

  resumeData;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resumeData = this.resumeService.getResume();
  }

  download() {
    alert("download");
  }

}
