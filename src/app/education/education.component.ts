import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { education } from '../services/datatype';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

   constructor(private router:Router){}
  
  showProject(){
     this.router.navigate(['/projects'])
   }

   educationalData:education[]=[
         {id:1, degree:'Master of Computer Application', university:'Cotton University, Guwahati', cgpa:7.8},
         {id:2, degree:'Bachelor of Science', university:'Cotton University, Guwahati', cgpa:7.83},
         {id:3, degree:'12th (Science)', university:'Ramanujan Junior College, Nagaon', cgpa:8}

  ]

}
