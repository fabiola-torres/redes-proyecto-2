import { Component, OnInit } from '@angular/core';
import { TwitterService } from './services/twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private twitter: TwitterService) {
    
  }

  tweets: any[] =[];

  async ngOnInit(){
    try {
      const data: any = await this.twitter.getRecentTweets();
      console.log(data);
      this.tweets = data.data;
    }
    catch(e){
      console.log(e);
    }
  }

  async onWordSelected(word: string){
    try {
      const data: any = await this.twitter.getTweets(word);
      console.log(data);
      this.tweets = data.data.statuses;
    }
    catch(e){
      console.log(e);
    }

  }
}
