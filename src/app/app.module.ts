import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MidbarComponent } from './midbar/midbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CustomcomponentsComponent } from './customcomponents/customcomponents.component';
import { CardCompComponent } from './card-comp/card-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MidbarComponent,
    SidebarComponent,
    TopbarComponent,
    CustomcomponentsComponent,
    CardCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
