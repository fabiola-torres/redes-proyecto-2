import { Injectable } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/es';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  pretty(date:string){
    return date ? moment(date).format('LLLL'): '--';
  }
}
