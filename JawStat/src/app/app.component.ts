import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Nav } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { Informations } from '../pages/informations/informations';
import { Aide } from '../pages/aide/aide';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = TabsPage;

  // Pages du sideMenu
  loginPage = Login;
  informationsPage = Informations;
  aidePage = Aide;

  @ViewChild(Nav) nav: Nav;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.push(page)
  }

}
