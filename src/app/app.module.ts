import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { LikedComponent } from './components/liked.component';
import { UnlikedComponent } from './components/unliked.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LikedComponent,
    UnlikedComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
