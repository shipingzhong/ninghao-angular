import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostModule } from './modules/post/post.module';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './modules/user/user.module';
import { HeaderComponent } from './core/components/header/header.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    UserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
