import { Component, OnInit } from '@angular/core';
import { IHotel } from './hotel';
import { HotelListService } from './hotel-list.service';
@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class  HotelListComponent implements OnInit {
  public title ='liste hotels';
  public getdate():Date{
    return new Date();
  }
  public hotels:IHotel[]=[

  ];

  public showBadge!: boolean;

  private _hotelFilter!:string;

  //implementons ici les getteur et les setteurs
  public filteredHotels:IHotel[] = [];

  //
  public receivedRating!: string ;
  //errmsge
  public errMsg!:string;


  constructor(private hotelListService:HotelListService){

  }
  //definition de la methode OnINit
  ngOnInit() {
    //passons dans l'initialiseur la valeur des hotels
    this.hotelListService.getHotels().subscribe({
      next: hotels=> {
        this.hotels=hotels;
        this.filteredHotels= this.hotels;
      },
      error: err=>this.errMsg=err
    });

    this.hotelFilter="";

  }

  public toggleIsNewBadge():void{
    this.showBadge=!this.showBadge;
  }
  public get hotelFilter():string {
    return this._hotelFilter;
  }
  public set hotelFilter(filter:string){
     this._hotelFilter=filter;

     this.filteredHotels=this.hotelFilter ? this.filterHotel(this.hotelFilter) :  this.hotels;
  }

  public receiveRatingClicked(message:string) : void {
this.receivedRating = message;
  }

  private filterHotel(criteria:string):IHotel[] {
    criteria = criteria.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel:IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) != -1
    );
    return res;
  }
}
