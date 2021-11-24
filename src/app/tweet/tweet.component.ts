import { Component, Input, OnInit } from '@angular/core';
import { DateService } from '../services/date.service';
declare var $: any;

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  constructor(
    private date: DateService
  ) { }

  @Input() tweet: any;
  showMore: boolean = false;

  ngOnInit(): void {
  }

  pretty(date:string) {
    return this.date.pretty(date);
  }

  toggle(){
    $(`#${this.tweet.id_str}`).slideToggle();
    this.showMore = !this.showMore;
  }

}
