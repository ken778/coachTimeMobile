import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/Register/register/register.component';
import { LoginComponent } from './components/Login/login/login.component';
import { LandingComponent } from './components/Landing/landing/landing.component';
import { BottomMenuComponent } from './components/bottomMenu/bottom-menu/bottom-menu.component';
import { bottomMenuModule } from './components/bottomMenu/bottom-menu/bottom-menu.module';

const routes: Routes = [
  {
    path: 'bottomMenu',
    loadChildren: () => import('./components/bottomMenu/bottom-menu/bottom-menu.module').then( m => m.bottomMenuModule)
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path:'bottomMenu',
    component: BottomMenuComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
