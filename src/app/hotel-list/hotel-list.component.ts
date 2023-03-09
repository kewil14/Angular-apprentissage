import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent {
  public title ='liste hotels';
  public getdate():Date{
    return new Date();
  }
  public hotels:any[]=[
    {
      hotelId:1,
      hotelName:'Buea sweet life',
      desciption:'belle vue au bord de la mer',
      price:230.5,
      imageUrl:"assets/img/hotel-room.jpg",
    },
    {
      hotelId:2,
      hotelName:'Marakech',
      desciption:'profitez de la vue du desert marocain',
      price:145.5,
      imageUrl:"assets/img/the-interior.jpg",
    },
    {
      hotelId:3,
      hotelName:'libreville hotel',
      desciption:"liberte d'habitation",
      price:250.5,
      imageUrl:"assets/img/window.jpg",
    },
    {
      hotelId:4,
      hotelName:'Cap town city',
      desciption:'le sud ',
      price:300.5,
      imageUrl:"assets/img/indoors.jpg",
    }
  ];

  public showBadge!: boolean;

  public hotelFilter!:string;

  public toggleIsNewBadge():void{
    this.showBadge=!this.showBadge;
  }

}
