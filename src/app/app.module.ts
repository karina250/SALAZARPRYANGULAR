import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { LeftComponent } from './component/left/left.component';
import { RightComponent } from './component/right/right.component';
import { PaisComponent } from './component/pais/pais.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosService } from './services/servicios.service';
import { PeruComponent } from './component/peru/peru.component';
import { PostComponent } from './component/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LeftComponent,
    RightComponent,
    PaisComponent,
    PeruComponent,
    PostComponent
  ],
  imports: [
    BrowserModule, HttpClientModule

  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
