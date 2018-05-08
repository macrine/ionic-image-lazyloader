import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListAPage } from './list-a';
import {DirectivesModule} from "../../directives/directives.module";

@NgModule({
  declarations: [
    ListAPage,
  ],
  imports: [
    IonicPageModule.forChild(ListAPage),DirectivesModule
  ],
})
export class ListAPageModule {}
