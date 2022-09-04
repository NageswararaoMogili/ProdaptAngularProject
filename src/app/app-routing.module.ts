import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'input', component:InputPasswordComponent},
  {path:'dashboard', component:DashboardComponent},
  {
    path: '404',
    pathMatch: 'full', 
    loadChildren: () => import('./notfound/notfound.component').then(m => m.NotfoundComponent)
  },
  { 
    path: '**', 
    pathMatch: 'full', 
    component: NotfoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
