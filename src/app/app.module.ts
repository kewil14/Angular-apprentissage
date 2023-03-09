import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,//declarre les components
    HotelListComponent
  ],
  imports: [
    BrowserModule, //permet a l appmodule de faire fonctionner notre appli dans un browser
    FormsModule, //donne la possibilite d utiliser le ng model
    HttpClientModule,

  ],
  providers: [], // l'array provider
  bootstrap: [AppComponent] //contient la composante principale qui va etre telecharger dans notre cas c est app component, c est aussi la composante dont le selecteur sera utiliser dans l index.html
})
export class AppModule {

}
