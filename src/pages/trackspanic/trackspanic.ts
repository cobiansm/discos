import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrackspanicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trackspanic',
  templateUrl: 'trackspanic.html',
})
export class TrackspanicPage {
  cancionesPanic = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesPanic = ['1. Silver Lining', '2. Say Amen', '3. Hey Look Ma. I Made It','4. High Hopes','5. Roaring 20´s', '6. Dancing´s Not A Crime','7. One Of Th Drunks','8. The Overpass','9. King of the Clouds','10. Old Fashioned','11. Dying in LA'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackspanicPage');
  }

}
