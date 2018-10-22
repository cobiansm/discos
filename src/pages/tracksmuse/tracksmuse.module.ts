import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TracksmusePage } from './tracksmuse';

@NgModule({
  declarations: [
    TracksmusePage,
  ],
  imports: [
    IonicPageModule.forChild(TracksmusePage),
  ],
})
export class TracksmusePageModule {}
