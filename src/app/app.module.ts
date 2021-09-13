import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MobileCardComponent } from './mobile-card/mobile-card.component';
import { HeaderComponent } from './header/header.component';
import { CountComponent } from './count/count.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileCardComponent,
    HeaderComponent,
    CountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
