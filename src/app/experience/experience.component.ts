import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { experience } from '../services/datatype';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

    experience:experience[]=[
      {id:1, 
      job:"Web Developer Internship", 
      company:"Tech Savvy Software & Security Consultance Pvt Ltd.",
      duration:"5 Months",
      techStack:"PHP & Laravel Framework",
      img:"assets/techSavvy.jpeg"
       },

       {id:2, 
        job:"Full Stack Web Development Internship", 
        company:"Edureka (Online Mode)",
        duration:"7 Months",
        techStack:"MERN Stack Technology",
        img:"assets/edu.png"
        },


    ]

    constructor(private router:Router){}
      
    showEdu(){
      this.router.navigate(['/education'])
    }
}
