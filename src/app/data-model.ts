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

export const defaultResumeData: ResumeData =
/*{ "empId": "1456", "name": "Sandeep Rajendra Kamble", "email": "sandeep.kamble@synerzip.com", "texp": "9.5", "skills": "JS, jQuery, Backbone JS, Underscore JS, Require JS, Java, Spring, Hibernate", "lang": "English, Hindi, Marathi", "os": "Windows, CentOS", "dbs": "MySQL, Mongo DB", "tools": "IntelliJ IDEA, Eclipse IDE, WebStrom IDE", "hobbies": null, "eduDetails": [ { "cn": "B.E. Computer", "in": "Maharashtra Institute of Technology, Pune", "yp": "May 2008" }, { "cn": "Diploma In Computer Engineering", "in": "A.I.S.S.M.S. Polytechnic, Pune", "yp": "May 2005" }, { "cn": "SSC", "in": "Modern High School, Pune", "yp": "March 2002" } ], "workDetails": [ { "cn": "", "pn": "", "tu": "", "dur": "", "role": "", "bp": "", "rsp": "" } ] }
*/
{
  id: 0,
  name: '',
  empId: '',
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
}
