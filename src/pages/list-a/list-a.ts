import { Component } from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {LazyLoad} from "../../app/lazy.load";

/**
 * Generated class for the ListAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-a',
  templateUrl: 'list-a.html',
})
export class ListAPage {

  items=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private httpClint:HttpClient) {
  }

  ionViewDidLoad() {
    this.loadList();
  }

  loadList(e?){
    this.httpClint.get("https://randomuser.me/api/?results=20").subscribe(data=>{
      console.log(data);
      this.items=this.items.concat(data["results"]);
      e&&e.complete();
    });
  }

  refresh(e){
    this.items=[];
    this.loadList(e);
  }
  loadMore(e){
    this.loadList(e);
  }

  scrollEnd(content: Content) {
    LazyLoad.getInstance().scrollEnd(content);
  }

}
