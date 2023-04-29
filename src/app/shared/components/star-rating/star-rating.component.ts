import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnChanges{

  public starwidth!: number;

  //pour que le component enfant puisse retrouver les donnes du component parent
  @Input()

  public rating: number=2;

//decorateur pour le composant parent puisse retrouver les donnees du composant parent
  @Output()
  //propriete qui servira de liaison entre le composant enfant et le composant parent

  public starRatingClicked : EventEmitter<string>= new EventEmitter<string>();

  ngOnChanges() {
      this.starwidth = this.rating*125/5;
  }
  public sendRating():void {
    this.starRatingClicked.emit(`la note est de ${this.rating}`)
  }
}

