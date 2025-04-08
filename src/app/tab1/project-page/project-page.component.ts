import { Component, OnInit } from '@angular/core';
import { IonRow } from "@ionic/angular/standalone";
import { inLeft, inLeftBottom } from 'src/app/animations/animations';
import { Cat, cats } from 'src/app/config/cat';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  standalone: false,
  animations: [inLeft, inLeftBottom]
})
export class ProjectPageComponent  implements OnInit {

  allCat: Cat[] = cats;
  shows: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.shows = true;
    }, 500)
  }

  changeProject() {
    this.shows = false;
    setTimeout(() => {
      this.shows = true;
    }, 420)
  }

}
