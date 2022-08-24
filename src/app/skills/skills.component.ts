import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
  
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration : 3000,
    });
  }

}
