import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Imagen1975Page } from '../pages/imagen1975/imagen1975';
import { Biografia1975Page } from '../pages/biografia1975/biografia1975';
import { Review1975Page } from '../pages/review1975/review1975';
import { Tracks1975Page } from '../pages/tracks1975/tracks1975';
import { ImagenmjPage } from '../pages/imagenmj/imagenmj';
import { BiomjPage } from '../pages/biomj/biomj';
import { ReviewmjPage } from '../pages/reviewmj/reviewmj';
import { TracksmjPage } from '../pages/tracksmj/tracksmj';
import { ImagenpanicPage } from '../pages/imagenpanic/imagenpanic';
import { ReviewpanicPage } from '../pages/reviewpanic/reviewpanic';
import { BiopanicPage } from '../pages/biopanic/biopanic';
import { TrackspanicPage } from '../pages/trackspanic/trackspanic';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Imagen1975Page,
    Biografia1975Page,
    Review1975Page,
    Tracks1975Page,
    ImagenmjPage,
    BiomjPage,
    ReviewmjPage,
    TracksmjPage,
    ImagenpanicPage,
    ReviewpanicPage,
    BiopanicPage,
    TrackspanicPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Imagen1975Page,
    Biografia1975Page,
    Review1975Page,
    Tracks1975Page,
    ReviewmjPage,
    TracksmjPage,
    BiomjPage,
    ImagenmjPage,
    ImagenpanicPage,
    BiopanicPage,
    ReviewpanicPage,
    TrackspanicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
