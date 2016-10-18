import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { MembersComponent } from './members/members.component';
import { NewsLatestComponent } from './news-latest/news-latest.component';

import { LoginService } from './shared/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewsListComponent,
    NewsDetailComponent,
    MembersComponent,
    NewsLatestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
