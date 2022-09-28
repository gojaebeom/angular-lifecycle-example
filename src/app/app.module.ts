import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifecycleComponent } from './lifecycle.component';

@NgModule({
  imports: [BrowserModule, FormsModule, LifecycleComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
