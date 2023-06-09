import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';


const routes: Routes = [
{ path: "", component:IndexComponent },
{ path: "login", component:LoginComponent },
{ path: "registro", component:RegistroComponent },
{ path: "nuevaexp", component: NewExperienciaComponent},
{ path: "editexp/:id", component: EditExperienciaComponent},
{ path: "nuevaedu", component: NeweducacionComponent},
{ path: "editedu/:id", component: EditeducacionComponent},
{ path: "dashboard", component:DashboardComponent},
{ path: 'newskill', component: NewSkillComponent},
{ path: 'editskill/:id', component: EditSkillComponent},
{ path: 'editacercade/:id', component: EditAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
