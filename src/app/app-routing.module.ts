import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PocetnaComponent} from './pocetna/pocetna.component';
import {DodajStudentaComponent} from './dodaj-studenta/dodaj-studenta.component';
import {DodajOceneComponent} from './dodaj-ocene/dodaj-ocene.component';
import {LoginComponent} from './login/login.component';
import {PrikazStudenataComponent} from './prikaz-studenata/prikaz-studenata.component';
import {MojProfilComponent} from './moj-profil/moj-profil.component';


const routes: Routes = [
  {path: 'pocetna', component: PocetnaComponent},
  {path: '', redirectTo: '/pocetna', pathMatch: 'full'},
  {path: 'dodajStudenta', component: DodajStudentaComponent},
  {path: 'dodajOcenu', component: DodajOceneComponent},
  {path: 'login', component: LoginComponent},
  {path: 'prikazStudenta', component: PrikazStudenataComponent},
   {path: 'mojProfil', component: MojProfilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
