import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Imagen1975Page } from '../imagen1975/imagen1975';
import { Biografia1975Page } from '../biografia1975/biografia1975';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
imagen1 = Imagen1975Page;
bio1 = Biografia1975Page;

  constructor(public navCtrl: NavController) {

  }
  imagen1975() {
    this.navCtrl.push(this.imagen1);
  }
  bio1975() {
    this.navCtrl.push(this.bio1);
  }

}
