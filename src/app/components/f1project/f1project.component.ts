import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-f1project',
  templateUrl: './f1project.component.html',
  styleUrls: ['./f1project.component.scss'],
  standalone: false
})
export class F1projectComponent  implements OnInit, OnDestroy {

  constructor(private modalCtrl: ModalController, private platform: Platform) { }

  ngOnInit() {
    history.pushState(null, location.href);
    window.addEventListener('popstate', this.close.bind(this));

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.close();
    })
  }

  ngOnDestroy(): void {
    window.removeEventListener('popstate', this.close.bind(this));
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
