import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedFeature = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(navSelected: string) {


    this.selectedFeature.emit(navSelected);


  }
}
