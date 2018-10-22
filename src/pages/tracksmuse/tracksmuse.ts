import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TracksmusePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracksmuse',
  templateUrl: 'tracksmuse.html',
})
export class TracksmusePage {
cancionesMuse = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesMuse = ['1. Algorithm','2. The Dark Side','3. Pressure','4. Propaganda','5. Break it to Me','6. Something Human','7. Thought Contagion','8. Get Up and Fight','9. Blockades','10. Dig Down','11. The Void'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TracksmusePage');
  }

}
