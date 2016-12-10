import { Component } from '@angular/core';
import { Signin } from '../signin/signin';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(public navCtrl: NavController) {

  }

}
