import { Directive, ElementRef, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
  standalone: false
})
export class ScrollRevealDirective implements OnInit, OnDestroy{
  @Output() revealed = new EventEmitter<void>();
  private observer!: IntersectionObserver;

  @Input() threshold: number = 0.2;
  @Input() rootMargin: string = '0px';

  constructor(private el: ElementRef, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach( entry => {
          console.log(entry.isIntersecting, entry.intersectionRatio);
          if(entry.isIntersecting && (entry.intersectionRatio >= this.threshold)){
            console.log('true for :', this.el.nativeElement);
            this.ngZone.run(() => {
            this.revealed.emit();
          });
          this.observer.unobserve(this.el.nativeElement);
          }
        });
      }, {
        root: null,
        rootMargin: this.rootMargin,
        threshold: this.threshold
      });
      // console.log(this.el.nativeElement);
      this.observer.observe(this.el.nativeElement);
    })
  }

  ngOnDestroy(): void {
    if(this.observer){
      this.observer.disconnect();
    }
  }

}
