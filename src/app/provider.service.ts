import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private baseURL : string = 'https://api.themoviedb.org/3/movie/';

  constructor(public http: Http) {
    console.log('Consumindo api!!!');
   }
   public getPopularMovie(){
     return this.getMovie("popular");
   }
   public getLatestMovie(){
    return this.getMovie("Latest");
  }
   public getMovie(url : string){
    return this.http.get(this.baseURL + url + this.getApiKey());
   }
   private getApiKey() : string {
     return '?api_key=f9c758ecadb88b3f227443d019576c37';

   }
}
