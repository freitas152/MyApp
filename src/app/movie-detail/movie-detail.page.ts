import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import{ProviderService} from '../provider.service' ;


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  
  public filme: any;
  public id:string;
  public title:string;
  

  constructor(public navCtrl:NavController, private params:ActivatedRoute, public ProviderService: ProviderService ) { }

  ngOnInit() {
   
    this.params.queryParams.subscribe(params => {
      this.id = params["id"];
      this.title = params["title"];  
    });
  
    this.ProviderService.getMovieDetail(this.id).subscribe(
      data=>{
    const obj=(data as any);
    this.filme=JSON.parse(obj._body);
    console.log(this.filme);

    }, error =>{
      console.log(error);})
    }
  }


