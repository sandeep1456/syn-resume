import { Injectable } from '@angular/core';
import { ResumeData } from '../data-model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  constructor() { }

  getResume(): ResumeData {
    return {
      "empId": "1456",
      "name": "Sandeep Rajendra Kamble",
      "email": "sandeep.kamble@synerzip.com",
      "texp": "9.5",
      "skills": "JS, jQuery, Backbone JS, Underscore JS, Require JS, Java, Spring, Hibernate",
      "lang": "English, Hindi, Marathi",
      "os": "Windows, CentOS",
      "dbs": "MySQL, Mongo DB",
      "tools": "IntelliJ IDEA, Eclipse IDE, WebStrom IDE",
      "hobbies": "Playing cricket, Trekking, Listen to music",
      "eduDetails": [
        { "cn": "B.E. Computer", "in": "Maharashtra Institute of Technology, Pune", "yp": "May 2008" },
        { "cn": "Diploma In Computer Engineering", "in": "A.I.S.S.M.S. Polytechnic, Pune", "yp": "May 2005" },
        { "cn": "SSC", "in": "Modern High School, Pune", "yp": "March 2002" }
      ],
      "workDetails": [
        {
          "bp": "Single Page Web application for tracking solar power plants",
          "cn": "Synerzip",
          "dur": "5",
          "pn": "Mercatus",
          "role": "UI Lead",
          "rsp": "Was involve in designing UI architecture, Responsible for converting wireframes (.png files) to HTML and applying CSS, adding JS functionality using JS framework BackBoneJS, UnderScoreJS and RequireJS",
          "tu": "Backbone JS, Underscore JS, Require JS, jQuery, Java, Spring, Hibernate"
        },
        {
          "bp": "Social Networking webapp, Designed as Single Page webapp",
          "cn": "Synerzip",
          "dur": "1",
          "pn": "EveryLog",
          "role": "UI developer",
          "rsp": "Handled all UI development alone using JS framework BackBoneJS, UnderScoreJS and RequireJS. Was responsible for converting wireframes (.png files) to HTML",
          "tu": "Backbone JS, Underscore JS, Require JS, jQuery, Java, Spring, Hibernate"
        },
        {
          "bp": "A complete Inventory management project developed for Starbucks coffee",
          "cn": "Krawler Networks",
          "dur": "2",
          "pn": "Inventory System",
          "role": "Software developer",
          "rsp": "Responsible for delivering end to end module, designed using ExtJS for UI screen and Java for backend services",
          "tu": "ExtJS 2.0, Java, Spring, Hibernate"
        },
        {
          "bp": "Accounting lets you create invoices and purchase orders, manages receipt, journal transactions and tracks your income and expenses",
          "cn": "Krawler Networks",
          "dur": "1",
          "pn": "Accounting System",
          "role": "Software developer",
          "rsp": "Responsible for delivering end to end module, designed using ExtJS for UI screen and Java for backend services",
          "tu": "ExtJS 2.0, Java, Spring, Hibernate"
        }
      ]
    }
  }
}
