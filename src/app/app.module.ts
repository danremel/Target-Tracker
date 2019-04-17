import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TargetFormComponent } from './target-form/target-form.component';
import { TargetsComponent } from './targets/targets.component';
import { TargetComponent } from './targets/target/target.component';
import { TargetDetailsComponent } from './targets/target-details/target-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TargetFormComponent,
    TargetsComponent,
    TargetComponent,
    TargetDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
