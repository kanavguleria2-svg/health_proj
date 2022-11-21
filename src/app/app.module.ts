import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';


import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaceAppComponent } from './place-app/place-app.component';
import { ViewAppComponent } from './view-app/view-app.component';  
import { QueryComponent } from './query/query.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [	
  {path:'', component:HomeComponent},
  {path:'viewapp', component:ViewAppComponent},
  {path:'makeapp', component:PlaceAppComponent},
  {path:'query', component:QueryComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PlaceAppComponent,
    ViewAppComponent,
    QueryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
