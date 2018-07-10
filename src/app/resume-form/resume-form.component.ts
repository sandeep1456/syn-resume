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
    this.resumeForm.reset(this.resumeData);
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
    console.log(this.resumeForm.value);
  }

  addEduDetail() {
    this.eduDetails.insert(0,this.fb.group(new EduDetails()));
  }

  deleteEduDetail(index) {
    this.eduDetails.removeAt(index);
  }

  addworkDetail() {
    this.workDetails.insert(0, this.fb.group(new WorkDetails()));
  }

  deleteWorkDetail(index) {
    this.workDetails.removeAt(index);
  }

  moveEduDetail(index, dir) {
    this.moveRows(this.eduDetails.controls, index , dir);
  }

  moveWorkDetail(index, dir) {
    this.moveRows(this.workDetails.controls, index , dir);
  }

  moveRows(arr, index, dir) {
    let validMove = dir==='up' ? index!==0 : index!==arr.length-1;
    let offset = dir==='up' ? -1 : 1;
    if(validMove) {
      let tmp = arr[index+offset];
      arr[index+offset] = arr[index];
      arr[index] = tmp;
    }
  }
}
