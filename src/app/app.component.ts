import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { inOutOpac } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
  animations: [inOutOpac]
})
export class AppComponent implements OnInit {
  @ViewChild('moveContainer') moveContainer!: ElementRef;

  loader: boolean = true;
  enter: boolean = true;
  simpleView: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
      // this.setElement();
    }, 2500)
  }

  setElement(): void {
    const element = this.moveContainer.nativeElement;
    if(element){
      element.addEventListener('mousemove', this.onMouseMove.bind(this));
      element.addEventListener('touchmove', (e: TouchEvent) => {
        e.preventDefault();
        this.onTouchMove(e)
      });
      element.addEventListener('touchend', this.onMouseMove.bind(this));
      element.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    }
  }

  onMouseMove(event: MouseEvent) {
    this.updateShadow(event.clientX, event.clientY);
  }

  onTouchMove(event: TouchEvent) {
    const touch = event.touches[0];
    this.updateShadow(touch.clientX, touch.clientY);
  }

  onMouseLeave() {
    document.documentElement.style.setProperty('--shadow-x', `0px`);
    document.documentElement.style.setProperty('--shadow-y', `0px`);
  }

  updateShadow(clientX: number, clientY: number) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = (clientX - centerX) / 20;
    const offsetY = (clientY - centerY) / 20;

    // Mise à jour des variables CSS
    document.documentElement.style.setProperty('--shadow-x', `${offsetX}px`);
    document.documentElement.style.setProperty('--shadow-y', `${offsetY}px`);
  }

  onEnter(){
    // this.enter = !this.enter;
    document.body.classList.add('bg-animated');
  }


}
