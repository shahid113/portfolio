import { ResourceLoader } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { projects } from '../services/datatype';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  loader:boolean=true;

  projects:projects[]=[
    { id:1,
    projectName:'School Management System',
    duration:'May 2022-Jul 2022',
    description:'Developed in PHP Laravel Framework & MySQL.',
    link:'http://furkatingseniorsecondaryschool.org/'
    },

     { id:2,
      projectName:'Crypto Tracker App',
      duration:'December 2022',
      description:'Developed in ReactJs and Data gathered from Coingecko Api',
      link:'https://github.com/shahid113/crypto-app'
      },

       { id:3,
        projectName:'Basic E-Commerce App',
        duration:'Jan 2023',
        description:'Developed in Angular Framework',
        link:'null'
        },

        { id:4,
          projectName:'Netflix UI Clone',
          duration:'Mar 2022',
          description:'Only HTML, CSS, Javascript and Bootstrap',
          link:'https://shahid113.github.io/netflix-clone/'
          },
  ]


  constructor(private router:Router){}

   ngOnInit():void{
      setTimeout(() => {
        this.loader=false;
      }, 1000);
   }

   showSkills(){
    this.router.navigate(['/skills'])
   }



}
