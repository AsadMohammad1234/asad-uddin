import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'}, 
  { path : 'home', component: HomeComponent },
  { path : 'education', component:EducationComponent},
  { path : 'Projects', component:ProjectsComponent},
  { path : 'Experience',component:ExperienceComponent},
  { path : 'Skills',component:SkillsComponent},
  { path : 'Contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
