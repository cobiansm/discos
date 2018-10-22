import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BiopanicPage } from './biopanic';

@NgModule({
  declarations: [
    BiopanicPage,
  ],
  imports: [
    IonicPageModule.forChild(BiopanicPage),
  ],
})
export class BiopanicPageModule {}
