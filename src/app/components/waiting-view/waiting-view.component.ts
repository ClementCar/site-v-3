import { Component, OnInit } from '@angular/core';
import { Skill, skills } from 'src/app/config/skills';

@Component({
  selector: 'app-waiting-view',
  templateUrl: './waiting-view.component.html',
  styleUrls: ['./waiting-view.component.scss'],
  standalone: false
})
export class WaitingViewComponent  implements OnInit {
  
  allSkills: Skill[] = skills;

  constructor() { }

  ngOnInit() {}

}
