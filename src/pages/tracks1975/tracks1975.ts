import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tracks1975Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks1975',
  templateUrl: 'tracks1975.html',
})
export class Tracks1975Page {
  canciones1975 = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.canciones1975=['1. The 1975', '2. Love Me', '3. UGH!', '4. A Change Of Heart', '5. She´s American', '6. If I Believe You', '7. Please Be Naked', '8. Lostmyhead', '9. The Ballad of Me and My Brain', '10. Somebody Else', '11. Loving Someone', '12. I like It When You Sleep. for You Are So Beautiful Yet So Unaware of It'];  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tracks1975Page');
  }

}
