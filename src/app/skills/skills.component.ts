import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { skills } from '../services/datatype';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
     
    skills:skills[]=[
      {id:1, name:'HTML', img:'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'},
      {id:1, name:'CSS', img:'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png'},
      {id:1, name:'Javascript', img:'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png'},
      {id:1, name:'React Js', img:'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png'},
      {id:1, name:'Angular', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/375px-Angular_full_color_logo.svg.png'},
      {id:1, name:'Node Js', img:'https://icons-for-free.com/iconfiles/png/512/js+library+long+shadow+nodejs+web+icon-1320184850167478047.png'},
      {id:1, name:'My SQL', img:'https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png'},
      {id:1, name:'MongoDB', img:'https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem-640x400.jpg'},
      {id:1, name:'C++', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png?20170928190710'},
      {id:1, name:'PHP', img:'https://www.freepnglogos.com/uploads/php-logo-png/php-logo-php-elephant-logo-vectors-download-5.png'},
      {id:1, name:'Laravel', img:'https://brandfetch.com/_next/image?url=https%3A%2F%2Fasset.brandfetch.io%2Fide68-31CH%2FidlxAUbIOo.jpeg&w=1920&q=75'},
    ]

    constructor(private router:Router){}

    showContact(){
      this.router.navigate(['/contact'])
    }
}
