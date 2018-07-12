import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume-preview',
  templateUrl: './resume-preview.component.html',
  styleUrls: ['./resume-preview.component.css']
})
export class ResumePreviewComponent implements OnInit {

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

  download() {
    alert("download");
  }

}
