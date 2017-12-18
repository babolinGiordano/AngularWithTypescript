import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected = false;
  @Output('change') click = new EventEmitter();

  constructor() { }

  onClick() {
    // if (!this.isSelected) {
    //   this.isSelected = true;
    // } else {
    //   this.isSelected = false;
    // }

    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected }); // Passare un oggetto 
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
