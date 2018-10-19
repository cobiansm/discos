import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Imagen1975Page } from '../imagen1975/imagen1975';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
imagen1 = Imagen1975Page;

  constructor(public navCtrl: NavController) {

  }
  imagen1975() {
    this.navCtrl.push(this.imagen1);
  }

}
