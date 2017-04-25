import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { FacebookModule } from 'ng2-facebook-sdk';
import { AppComponent } from './app.component';
import { FacebookAppComponent } from './facebook-app/facebook-app.component';

@NgModule({
  declarations: [
    AppComponent,
    FacebookAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //FacebookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
