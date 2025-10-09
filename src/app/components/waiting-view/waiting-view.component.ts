import { AfterViewInit, Component, ElementRef, NgZone, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IonCol, Platform } from '@ionic/angular';
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
  @ViewChildren('stepBlock', { read: ElementRef }) stepBlocks!: QueryList<ElementRef>;
  @ViewChild('video1') video1!: ElementRef<HTMLVideoElement>;
  @ViewChild('video2') video2!: ElementRef<HTMLVideoElement>;
  
  allSkills: Skill[] = skills;

  steps: boolean [] = [false, false, false, false, false];
  revealSteps: boolean[] = [false, false, false, false, false];
  delays: number[] = [300, 1200, 3100, 4200, 5500];

  constructor(public platform: Platform, private ngZone: NgZone) { }

  ngOnInit() {
    this.setSteps(true);
  }

  // ctrlVideo(){
  //   setTimeout(() => {
  //     const v1 = this.video1.nativeElement as HTMLVideoElement;
  //     const v2 = this.video2.nativeElement as HTMLVideoElement;
  //     v1.addEventListener('canplay', () => {
  //       console.log('video 1 can play')
  //       v1.play()
  //         .then(() => console.log('video 1 played'))
  //         .catch(err => console.warn('video 1 error', err));
  //     })
  //     v2.addEventListener('canplay', () => {
  //       v2.play()
  //         .then(() => console.log('video 2 played'))
  //         .catch(err => console.warn('video 2 error', err));
  //     })
  //   }, 1500)
  // }

  ctrlVideo() {
    setTimeout(() => {
      if (!this.video1 || !this.video2) {
        console.warn('video refs not ready');
        return;
      }
      const v1 = this.video1.nativeElement as HTMLVideoElement;
      const v2 = this.video2.nativeElement as HTMLVideoElement;

      v1.muted = true;
      v2.muted = true;
      v1.setAttribute('playsinline', '');
      v2.setAttribute('playsinline', '');

      // écouteurs pour debug
      v1.addEventListener('loadedmetadata', () => console.log('v1 loadedmetadata'));
      v1.addEventListener('loadeddata', () => console.log('v1 loadeddata'));
      v1.addEventListener('canplay', () => {
        console.log('v1 canplay event');
        v1.play().then(() => console.log('v1 played in canplay'))
          .catch(err => {
            console.warn('v1 play error in canplay:', err);
            // retenter
            setTimeout(() => {
              v1.play().then(() => console.log('v1 played retry')).catch(err2 => console.warn('v1 retry error', err2));
            }, 200);
          });
      });

      v1.play().then(() => console.log('v1 played immediate')).catch(err => {
        console.warn('v1 immediate play failed', err);
      });

      v2.addEventListener('loadedmetadata', () => console.log('v2 loadedmetadata'));
      v2.addEventListener('loadeddata', () => console.log('v2 loadeddata'));
      v2.addEventListener('canplay', () => {
        console.log('v2 canplay event');
        v2.play().then(() => console.log('v2 played in canplay'))
          .catch(err => {
            console.warn('v2 play error in canplay:', err);
            setTimeout(() => {
              v2.play().then(() => console.log('v2 played retry')).catch(err2 => console.warn('v2 retry error', err2));
            }, 200);
          });
      });
      v2.play().then(() => console.log('v2 played immediate')).catch(err => {
        console.warn('v2 immediate play failed', err);
      });

    }, 1500);
  }


  setSteps(reveal: boolean){
    this.delays.forEach((delay, index) => {
      setTimeout(() => {
        this.steps[index] = reveal;

        const el = this.stepBlocks.get(index)!.nativeElement as HTMLElement;

        if(!el) return;

        if(this.isInView(el)){
          this.revealSteps[index] = true;
          if(index == 4){
            this.ctrlVideo();
          }
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
            if(index == 3){
              this.ctrlVideo();
            }
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
