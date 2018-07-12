import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ResumeService } from '../services/resume.service';
import { formatDate } from '../resume-utils';

@Component({
  selector: 'app-resume-preview',
  templateUrl: './resume-preview.component.html',
  styleUrls: ['./resume-preview.component.css']
})
export class ResumePreviewComponent implements OnInit {
  today = new Date().getTime();
  resumeData;
  empId;

  constructor(
    private resumeService: ResumeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.empId = this.route.snapshot.paramMap.get("empId");
    this.resumeService.getResume(this.empId).
    subscribe(data => this.resumeData = data);
  }

  formatResumeDate(date) {
    return formatDate(date);
  }

  download() {
    alert("download");
  }
}
