import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
  
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration : 3000,
    });
  }

}
