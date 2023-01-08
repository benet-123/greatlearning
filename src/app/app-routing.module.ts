import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DegreeComponent } from './degree/degree.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:SignupComponent },
  {path:'new',component:FrontpageComponent },
{path:'degree',component:DegreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
