import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IHotel } from "./hotel";

@Injectable({
  providedIn:'root'
})


export class HotelListService{

  //declarons l url de notre requete
  private readonly HOTEL_API_URL='api/hotels.json'

  constructor(private http : HttpClient  ){

  }


  public getHotels(): Observable<IHotel[]>{
    return this.http.get<IHotel[]>(this.HOTEL_API_URL).pipe(
      tap(hotels=> console.log('hotels', hotels )),
      catchError(this.handleError)
    );
  }

  // methode pour intercepter les erreurs liees a ma requete http
  private handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      //a client-side or network error occurred. handle it accordingly
      console.error('An error occurred:',error.error.message);
    } else{
      //the backend returned an unsuccessful response code.
      //the responses body may containt clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status},` +
        `body was: ${error.error}`
      );
    }
    //Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later. ');

  }
}
