import { MovieDetailPage } from './../movie-detail/movie-detail.page';
import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProviderService } from './../provider.service';
import { Http } from '@angular/http';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public lista_filmes: Array<any>;

  constructor( public navCtrl: NavController, public providerservice: ProviderService, public http: Http) {

  }
  ngOnInit(){
    this.providerservice.getPopularMovie().subscribe(
      data =>{
        const obj = (data as any);
        const obj_json = JSON.parse(obj._body);
        this.lista_filmes = obj_json.results;
        console.log (this.lista_filmes);
      },error =>{
        console.log(error);
      }
    )
  }
  MostrarDetalhes(filme){
   // this.navCtrl.(MovieDetailPage);
    console.log("Enxeganndo metado");
  

      let param: NavigationExtras = {
        queryParams:{ id:filme.id,title:filme.title}
      };
      this.navCtrl.navigateForward(["movie-detail"],param); 
  }
}
