/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

inject();
injectSpeedInsights();

registerLocaleData(localeFr);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
