import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-f1project',
  templateUrl: './f1project.component.html',
  styleUrls: ['./f1project.component.scss'],
  standalone: false
})
export class F1projectComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }

}
