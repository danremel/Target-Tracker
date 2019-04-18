import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TargetFormComponent } from './target-form/target-form.component';
import { TargetComponent } from './target/target.component';
import { TargetDetailsComponent } from './target/target-details/target-details.component';
import { TargetsService } from './targets.service';
import { ContactsService } from './contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    TargetFormComponent,
    TargetComponent,
    TargetDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TargetsService,
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
