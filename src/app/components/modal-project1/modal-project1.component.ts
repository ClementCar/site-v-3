import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { IonModal } from "@ionic/angular/standalone";

@Component({
  selector: 'app-modal-project1',
  templateUrl: './modal-project1.component.html',
  styleUrls: ['./modal-project1.component.scss'],
  standalone: false
})
export class ModalProject1Component  implements OnInit {

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }

  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: '<ion-icon name="warning-outline" color="danger"></ion-icon> Ce projet a été développé dans le cadre d’une expérience professionnelle précédente.  La maintenance du site n’étant plus assurée par mes soins, certaines fonctionnalités peuvent être obsolètes.',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'retour',
          role: 'close'
        },
        {
          text: 'Voir le site',
          handler: () => {
            window.open('https://app.goodplaceto.live/', '_blank', 'noopener,noreferrer');
          }
        }
      ]
    })

    await alert.present();
  }

}
