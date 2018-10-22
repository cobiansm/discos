import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TracksmjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracksmj',
  templateUrl: 'tracksmj.html',
})
export class TracksmjPage {
  cancionesMJ = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesMJ = ['1. Bad', '2. The Way You Make Me Feel', '3. Speed Demon','4. Liberian Girl', '5. Just Good Friends','6. Another Part of Me', '7. Man in the Mirror','8. I Just Can´t Stop Loving You','9. Dirty Diana','10. Smooth Criminal','11. Leave Me Alone'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TracksmjPage');
  }

}
