import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

import { ResumeData, EduDetails, WorkDetails, defaultResumeData } from '../data-model';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnChanges {
  resumeData: ResumeData;
  resumeForm: FormGroup;

  updatedOnDate = new Date().toDateString();

  ngOnChanges() {
    this.rebuildForm();
  }

  constructor(private fb: FormBuilder) {
    this.resumeData = defaultResumeData;
    this.createForm();
    this.rebuildForm();
  }

  rebuildForm() {
    this.resumeForm.reset({
      name: this.resumeData.name
    });
    this.setEduDetails(this.resumeData.eduDetails);
    this.setWorkDetails(this.resumeData.workDetails);
  }

  setEduDetails(eduDetails: EduDetails[]) {
    const eduDetailsFGs = eduDetails.map(eduDetail => this.fb.group(eduDetail));
    const eduDetailsFormArray = this.fb.array(eduDetailsFGs);
    this.resumeForm.setControl('eduDetails', eduDetailsFormArray);
  }

  setWorkDetails(workDetails: WorkDetails[]) {
    const workDetailsFGs = workDetails.map(workDetail => this.fb.group(workDetail));
    const workDetailsFormArray = this.fb.array(workDetailsFGs);
    this.resumeForm.setControl('workDetails', workDetailsFormArray);
  }

  get eduDetails(): FormArray {
    return this.resumeForm.get('eduDetails') as FormArray;
  };

  get workDetails(): FormArray {
    return this.resumeForm.get('workDetails') as FormArray;
  };

  createForm() {
    this.resumeForm = this.fb.group({
      empId: ['', Validators.required ],
      name: ['', Validators.required ], // <--- the FormControl called "name"
      email: ['', Validators.required ],
      texp: ['', Validators.required ],
      skills: ['', Validators.required ],
      lang: ['', Validators.required ],
      os: ['', Validators.required ],
      dbs: ['', Validators.required ],
      tools: ['', Validators.required ],
      workDetails: this.fb.array([]),
      eduDetails: this.fb.array([]),
      hobbies: ''
    });
  }

  ngOnInit() {
  }

  save() {

  }

  addEduDetail() {
    this.eduDetails.push(this.fb.group(new EduDetails()));
  }

  deleteEduDetail(index) {
    this.eduDetails.controls.splice(index, 1);
  }

  moveEduDetailUp(index) {
    let eduArr = this.eduDetails.controls;
    if(index!==0) {
      let tmp = eduArr[index-1];
      eduArr[index-1] = eduArr[index];
      eduArr[index] = tmp;
    }
  }

  moveEduDetailDown(index) {
    let eduArr = this.eduDetails.controls;
    if(index!==eduArr.length-1) {
      let tmp = eduArr[index+1];
      eduArr[index+1] = eduArr[index];
      eduArr[index] = tmp;
    }
  }

  addworkDetail() {
    this.workDetails.controls.unshift(this.fb.group(new WorkDetails()));
  }

  deleteWorkDetail(index) {
    this.workDetails.controls.splice(index, 1);
  }
}
