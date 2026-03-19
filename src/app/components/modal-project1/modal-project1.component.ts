import { Location } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { IonModal } from "@ionic/angular/standalone";

@Component({
  selector: 'app-modal-project1',
  templateUrl: './modal-project1.component.html',
  styleUrls: ['./modal-project1.component.scss'],
  standalone: false
})
export class ModalProject1Component  implements OnInit, OnDestroy {
  @ViewChild('video1') video1!: ElementRef<HTMLVideoElement>;
  @ViewChild('video2') video2!: ElementRef<HTMLVideoElement>;

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController, private platform: Platform) { }

  ngOnInit() {
    history.pushState(null, location.href);
    window.addEventListener('popstate', this.close.bind(this))

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.close();
    })

    this.ctrlVideo();
  }

  ngOnDestroy(): void {
    window.removeEventListener('popstate', this.close.bind(this));
  }

  close(){
    this.modalCtrl.dismiss();
  }

  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: '⚠️ Ce projet a été développé dans le cadre d’une expérience professionnelle précédente.  La maintenance du site n’étant plus assurée par mes soins, certaines fonctionnalités peuvent être obsolètes.',
      cssClass: 'danger-alert',
      buttons: [
        {
          text: 'Retour',
          role: 'close',
          cssClass: 'alert-btn'
        },
        {
          text: 'Voir le site',
          cssClass: 'alert-btn',
          handler: () => {
            window.open('https://app.goodplaceto.live/', '_blank', 'noopener,noreferrer');
          }
        }
      ]
    })

    await alert.present();
  }

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

}
