import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListBPage } from './list-b';
import {DirectivesModule} from "../../directives/directives.module";

@NgModule({
  declarations: [
    ListBPage,
  ],
  imports: [
    IonicPageModule.forChild(ListBPage),DirectivesModule,
  ],
})
export class ListBPageModule {}
