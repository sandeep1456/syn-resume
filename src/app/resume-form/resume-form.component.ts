import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnInit {

  updatedOnDate = new Date().toDateString();

  eduDetails = [
    {cn:"SSC", in:"Modern High School", yp:"2002"},
    {cn:"Diploma", in:"AISSMS Polytechnic", yp:"2005"}
  ];
  constructor() { }

  ngOnInit() {
  }

  save() {

  }

}
