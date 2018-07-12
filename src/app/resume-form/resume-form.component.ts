import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ResumeData, EduDetails, WorkDetails, defaultResumeData } from '../data-model';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnChanges {
  resumeData: ResumeData;
  resumeForm: FormGroup;
  empId;

  ngOnChanges() {
    this.rebuildForm();
  }

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.empId = this.route.snapshot.paramMap.get("empId");
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
    console.log(this.resumeForm.status);

    let data = this.resumeForm.value;
    data.updatedOn = new Date().getTime();

    //Save data
    this.router.navigate(['/preview',this.empId]);
  }

  addEduDetail() {
    this.eduDetails.insert(0, this.fb.group(new EduDetails()));
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
    this.moveRows(this.eduDetails, index , dir);
  }

  moveWorkDetail(index, dir) {
    this.moveRows(this.workDetails, index , dir);
  }

  moveRows(formArr, index, dir) {
    let validMove = dir==='up' ? index!==0 : index!==formArr.controls.length-1;
    let offset = dir==='up' ? -1 : 1;
    if(validMove) {
      let currentFA = formArr.at(index);
      formArr.removeAt(index);
      formArr.insert(index+offset, currentFA);
    }
  }

  formatDate(date) {
    let dateStr = "";
    if(date){
      try {
        let dt = new Date(date);
        dateStr = (dt.getDate() < 10 ? "0" : "") + dt.getDate() + "/" +
                (dt.getMonth() < 10 ? "0" : "") + dt.getMonth() + "/" +
                dt.getFullYear();
      } catch (e) { }
    }
    return dateStr;
  }
}
