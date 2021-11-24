import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor( private http: HttpClient) { }

  private url: string = environment.backend;

  getRecentTweets(){
    const data = this.http.get(`${this.url}/tweets/recent`).toPromise();
    return data;
  }

  getTweets(word: string) {
    const data = this.http.get(`${this.url}/tweets/search/${word}`).toPromise();
    return data;
  }

}
