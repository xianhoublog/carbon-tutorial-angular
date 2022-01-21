import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIShellModule, IconService } from 'carbon-components-angular';

import { HeaderComponent } from './header/header.component';

import { AddModule } from '@carbon/icons-angular';

// import Notification16  from '@carbon/icons/es/notification/16';
// import UserAvatar16 from '@carbon/icons/es/user--avatar/16';
// import AppSwitcher16 from '@carbon/icons/es/app-switcher/16';
@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    AddModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(protected iconsService: IconService){
    iconsService.registerAll([
      // Notification16,
      // UserAvatar16,
      // AppSwitcher16
    ])

  }
 }
