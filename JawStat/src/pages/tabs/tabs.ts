import { Component } from '@angular/core';

import { Home } from '../home/home';
import { Analysis } from '../analysis/analysis';
import { About } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Home;
  tab2Root: any = Analysis;
  tab3Root: any = About;

  constructor() {

  }
}
