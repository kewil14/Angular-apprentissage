//creeons une interface pour pouvoir rendre visible notre interface
export interface IHotel{
  //nous definissons les proprietes de notre interface
  hotelId?:number;

  hotelName:string;

  desciption:string;

  price:number;

  imageUrl:string;

  rating:number;
}


