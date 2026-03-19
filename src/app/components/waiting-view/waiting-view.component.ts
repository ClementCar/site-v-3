import { AfterViewInit, Component, ElementRef, NgZone, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IonCol, ModalController, Platform } from '@ionic/angular';
import { inFull, inHeight, inOutOpac, inWidth } from 'src/app/animations/animations';
import { Skill, skills } from 'src/app/config/skills';
import { ModalProject1Component } from '../modal-project1/modal-project1.component';
import { F1projectComponent } from '../f1project/f1project.component';

@Component({
  selector: 'app-waiting-view',
  templateUrl: './waiting-view.component.html',
  styleUrls: ['./waiting-view.component.scss'],
  standalone: false,
  animations: [inOutOpac, inHeight, inWidth, inFull]
})

export class WaitingViewComponent  implements OnInit {
  @ViewChildren('stepBlock', { read: ElementRef }) stepBlocks!: QueryList<ElementRef>;
  
  allSkills: Skill[] = skills;

  steps: boolean [] = [false, false, false, false, false];
  revealSteps: boolean[] = [false, false, false, false, false];
  delays: number[] = [300, 1200, 3100, 4200, 5500];

  constructor(public platform: Platform, private ngZone: NgZone, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.setSteps(true);
  }

  async openModal(last: boolean) {
    const modal = await this.modalCtrl.create({
      component: last ? ModalProject1Component : F1projectComponent,
      cssClass: 'modal'
    });

    modal.present();
  }


  setSteps(reveal: boolean){
    this.delays.forEach((delay, index) => {
      // this.revealSteps[index] = true;
      // this.steps[index] = true;
      setTimeout(() => {
        this.steps[index] = reveal;

        const el = this.stepBlocks.get(index)!.nativeElement as HTMLElement;

        if(!el) return;

        if(this.isInView(el)){
          this.revealSteps[index] = true;
        } else {
          this.observe(el, index);
        }
      }, delay)
    })
  }

  onReveal(step: number){
    this.revealSteps[step] = true;
  }

  observe(el: HTMLElement, index: number){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          this.ngZone.run(() => {
            this.revealSteps[index] = true;
          });
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.2
    });
    observer.observe(el);
  }

  isInView(el: HTMLElement): boolean{
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    const horizontalVisible = (rect.top < windowHeight && rect.bottom >= 0);

    return horizontalVisible;
  }

}
