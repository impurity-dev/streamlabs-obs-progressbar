import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SciFiComponent } from './components/sci-fi/sci-fi.component';

@NgModule({
  declarations: [
    AppComponent,
    SciFiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
