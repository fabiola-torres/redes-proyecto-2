import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  constructor() { }

  @Output() selectedWord = new EventEmitter<string>();

  word: string = '';

  ngOnInit() {
  }

  

  selectWord(){
    if(this.word.length <=0) Swal.fire('Ups','Debes escribir algo para realizar la búsqueda','warning')
    this.selectedWord.emit(this.word);
  }

}
