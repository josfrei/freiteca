import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),//proveemos el cliente
    provideHttpClient(withFetch()),

    //Solucionamos que redireccione correctamente en netlify
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
};
