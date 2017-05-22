import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FacebookAppComponent } from './facebook-app/facebook-app.component';
import { HttpserviceService } from './httpservice.service';
import { GraphApiService } from './graph-api.service';
import { FacebookService } from 'ng2-facebook-sdk';

@NgModule({
  declarations: [
    AppComponent,
    FacebookAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpserviceService, FacebookService, GraphApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
