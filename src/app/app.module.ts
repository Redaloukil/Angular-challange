import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Routes , RouterModule} from '@angular/router';
//Components
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShipmentsDetailsComponent } from './shipments-details/shipments-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
//Services
import {AppService} from './app.service'

//Third Party components 
import { NgxHorizontalTimelineComponent} from 'ngx-horizontal-timeline';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shipments' , component : ShipmentsComponent },
  { path: 'shipments/:id' , component : ShipmentsDetailsComponent },
  { path: '**', component: NotFoundComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShipmentsComponent,
    ShipmentsDetailsComponent,
    NotFoundComponent,
    NgxHorizontalTimelineComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),// { enableTracing: true } // <-- debugging purposes only)
    HttpClientModule,
    // other imports here
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
