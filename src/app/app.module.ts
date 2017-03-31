import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './share/header/header.component';
import { StartPageComponent } from './start-page/start-page.component';

import {ImageServicesService} from './services/image-services.service';
import {ReactiveFormsModule} from '@angular/forms';
import { FacebookInteComponent } from './facebook-inte/facebook-inte.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartPageComponent,
    FacebookInteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [ImageServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
