import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from "@angular/common/http";


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaitingViewComponent } from './components/waiting-view/waiting-view.component';
import { ScrollRevealDirective } from './directives/scroll-reveal.directive';

@NgModule({
  declarations: [AppComponent, WaitingViewComponent, ScrollRevealDirective],
  imports: [BrowserModule, 
    IonicModule.forRoot({
      platform: {
        'mobile': (win) => {
          const isMobile = (win.innerWidth < 768) ? true : false;
          return isMobile;
        }
      }
    }), 
    AppRoutingModule, BrowserAnimationsModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent],
  exports: [ ScrollRevealDirective]
})
export class AppModule {}
