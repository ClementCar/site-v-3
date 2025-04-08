import { Component, OnInit } from '@angular/core';
import { inBottom } from '../animations/animations';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
  animations: [inBottom]
})
export class TabsPage implements OnInit {

  show: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 250)
  }

}
