import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { About } from '../pages/about/about';
import { Analysis } from '../pages/analysis/analysis';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Informations } from '../pages/informations/informations';
import { Aide } from '../pages/aide/aide';
import { Redigefc } from '../pages/redigefc/redigefc';
import { Consultefc } from '../pages/consultefc/consultefc';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    About,
    Analysis,
    Home,
    Informations,
    Login,
    Aide,
    Redigefc,
    Consultefc,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    About,
    Analysis,
    Home,
    Informations,
    Login,
    Aide,
    Redigefc,
    Consultefc,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
