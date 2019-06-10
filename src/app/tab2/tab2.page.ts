import { ProviderService } from './../provider.service';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { error } from '@angular/compiler/src/util';
import { NavController } from '@ionic/angular';



@Component({
 
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss',]
})
export class Tab2Page {

  constructor( public navCtrl: NavController, public providerservice: ProviderService, public http: Http) {

  }
  ngOnInit(){
    this.providerservice.getPopularMovie().subscribe(
      data =>{
        const obj = (data as any);
        const obj_json = JSON.parse(obj._body);
        console.log (obj_json);
      },error =>{
        console.log(error);
      }
    )
    this.providerservice.getLatestMovie().subscribe(
      data =>{
        const obj = (data as any);
        const obj_json = JSON.parse(obj._body);
        console.log (obj_json);
      },error =>{
        console.log(error);
      }
    )

  }

}
