import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
