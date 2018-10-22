import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Imagen1975Page } from '../imagen1975/imagen1975';
import { Biografia1975Page } from '../biografia1975/biografia1975';
import { Review1975Page } from '../review1975/review1975';
import { ThrowStmt } from '@angular/compiler';
import { Tracks1975Page } from '../tracks1975/tracks1975';
import { ImagenmjPage } from '../imagenmj/imagenmj';
import { BiomjPage } from '../biomj/biomj';
import { ReviewmjPage } from '../reviewmj/reviewmj';
import { TracksmjPage } from '../tracksmj/tracksmj';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
imagen1 = Imagen1975Page;
bio1 = Biografia1975Page;
reseña1 = Review1975Page;
tracks1 = Tracks1975Page;
imagen2 = ImagenmjPage;
bio2 = BiomjPage;
reseña2 = ReviewmjPage;
tracks2 = TracksmjPage;

  constructor(public navCtrl: NavController) {

  }
  imagen1975() {
    this.navCtrl.push(this.imagen1);
  }
  bio1975() {
    this.navCtrl.push(this.bio1);
  }
  review1975() {
    this.navCtrl.push(this.reseña1);
  }
  tracks1975() {
    this.navCtrl.push(this.tracks1);
  }
  imagenmj() {
    this.navCtrl.push(this.imagen2);
  }
  biomj() {
    this.navCtrl.push(this.bio2);
  }
  tracksmj() {
    this.navCtrl.push(this.tracks2);
  }
  reviewmj() {
    this. navCtrl.push(this.reseña2);
  }

}
