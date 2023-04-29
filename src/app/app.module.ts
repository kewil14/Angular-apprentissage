import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { FormsModule } from '@angular/forms';
//importons depuis angular l'outil qui nous permet d enregisrer une nouvelle langue
import{registerLocaleData} from '@angular/common';
//importons l outil qui nous permet d enregistrer la langue francaise
import localeFr from '@angular/common/locales/fr'
import {ReplaceComma } from './shared/pipes/replace-comma.pipe';
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';
import { HomeComponent } from './home/home.component';
import { HotelDetailComponent } from './hotel-list/hotel-detail/hotel-detail.component';
import { RouterModule } from '@angular/router';

//enregistrer la langue francaise en appelant la fonction registerlocale data
registerLocaleData(localeFr,'fr');
@NgModule({
  declarations: [
    AppComponent,//declarre les components
    HotelListComponent,
    ReplaceComma,// pour le pipe personnalise
    StarRatingComponent,
    HomeComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule, //permet a l appmodule de faire fonctionner notre appli dans un browser
    FormsModule, //donne la possibilite d utiliser le ng model
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'hotels/:id',component:HotelDetailComponent},
      {path:'hotels',component:HotelListComponent},
      {path:'**',redirectTo:'home', pathMatch:'full'}
    ]),//pour utilisation des root

  ],
  providers: [], // l'array provider
  bootstrap: [AppComponent] //contient la composante principale qui va etre telecharger dans notre cas c est app component, c est aussi la composante dont le selecteur sera utiliser dans l index.html
})
export class AppModule {

}
