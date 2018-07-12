export class ResumeData {
  id = 0;
  name = '';
  empId = 0;
  email = '';
  texp = 0;
  skills = '';
  lang = '';
  os = '';
  dbs = '';
  tools = '';
  eduDetails : EduDetails[];
  workDetails : WorkDetails[];
  hobbies = '';
  updatedOn = '';
}

export class EduDetails {
  cn = '';
  in   = '';
  yp  = '';
}

export class WorkDetails {
  cn = '';
  pn   = '';
  tu  = '';
  dur  = 0;
  role  = '';
  bp  = '';
  rsp  = '';
}

export const defaultResumeData: ResumeData = {
  id: 0,
  empId: 0,
  updatedOn: null,
  name: '',
  email: '',
  texp: null,
  skills: '',
  lang: '',
  os: '',
  dbs: '',
  tools: '',
  eduDetails: [{
    cn: '',
    in: '',
    yp: ''
  }],
  workDetails: [{
    cn: '',
    pn: '',
    tu: '',
    dur: null,
    role: '',
    bp: '',
    rsp: '',
  }],
  hobbies: ''
};
