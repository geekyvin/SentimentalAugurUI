import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopicRowComponent } from './component/topic-row/topic-row.component';
import { TopicRowCollectionComponent } from './component/topic-row-collection/topic-row-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicRowComponent,
    TopicRowCollectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
