export class ResumeData {
  id = 0;
  name = '';
  empId = '';
  email = '';
  texp = '';
  skills = '';
  lang = '';
  os = '';
  dbs = '';
  tools = '';
  eduDetails : EduDetails[];
  workDetails : WorkDetails[];
  hobbies = '';
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
  dur  = '';
  role  = '';
  bp  = '';
  rsp  = '';
}

export const defaultResumeData: ResumeData = {
  id: 0,
  empId: '',
  updatedOn: null,
  name: '',
  email: '',
  texp: '',
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
    dur: '',
    role: '',
    bp: '',
    rsp: '',
  }],
  hobbies: ''
};
