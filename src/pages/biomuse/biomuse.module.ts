import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BiomusePage } from './biomuse';

@NgModule({
  declarations: [
    BiomusePage,
  ],
  imports: [
    IonicPageModule.forChild(BiomusePage),
  ],
})
export class BiomusePageModule {}
