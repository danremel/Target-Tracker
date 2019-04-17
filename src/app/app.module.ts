import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TargetFormComponent } from './target-form/target-form.component';
import { TargetComponent } from './target/target.component';
import { TargetDetailsComponent } from './target/target-details/target-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TargetFormComponent,
    TargetComponent,
    TargetDetailsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
