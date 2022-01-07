import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DodajOceneComponent} from './dodaj-ocene/dodaj-ocene.component';
import {DodajStudentaComponent} from './dodaj-studenta/dodaj-studenta.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PocetnaComponent} from './pocetna/pocetna.component';
import {PrikazStudenataComponent} from './prikaz-studenata/prikaz-studenata.component';
import {PrikazOcenaComponent} from './prikaz-ocena/prikaz-ocena.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    DodajOceneComponent,
    DodajStudentaComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    PocetnaComponent,
    PrikazStudenataComponent,
    PrikazOcenaComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
