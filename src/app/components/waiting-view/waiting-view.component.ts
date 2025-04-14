import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { inFull, inHeight, inOutOpac, inWidth } from 'src/app/animations/animations';
import { Skill, skills } from 'src/app/config/skills';

@Component({
  selector: 'app-waiting-view',
  templateUrl: './waiting-view.component.html',
  styleUrls: ['./waiting-view.component.scss'],
  standalone: false,
  animations: [inOutOpac, inHeight, inWidth, inFull]
})

export class WaitingViewComponent  implements OnInit {
  
  allSkills: Skill[] = skills;

  steps: boolean [] = [false, false, false, false, false];
  delays: number[] = [300, 1200, 3100, 4200, 5500];

  constructor(public platform: Platform) { }

  ngOnInit() {
    this.setSteps(true);
  }

  setSteps(reveal: boolean){
    this.delays.forEach((delay, index) => {
      setTimeout(() => {
        this.steps[index] = reveal;
      }, delay)
    })
  }
}
