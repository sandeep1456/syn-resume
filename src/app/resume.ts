export class Resume {
  id: number;
  name: string;
  empId: number;
  email: string;
  texp: string;
  skills: string;
  lang: string;
  os: string;
  dbs: string;
  tools: string;
  eduDetails : EduDetails[];
  workDetails : WorkDetails[];
  hobbies: string;
  updatedOn: number;
}

export class EduDetails {
  cn: string;
  in: string;
  yp: string;
}

export class WorkDetails {
  cn: string;
  pn: string;
  tu: string;
  dur: string;
  role: string;
  bp: string;
  rsp: string;
}
