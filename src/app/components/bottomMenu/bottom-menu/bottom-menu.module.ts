import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BottomMenuComponent } from './bottom-menu.component'; 
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from '../../Landing/landing/landing.component';
import { NewsComponent } from '../../news/news/news.component';
import { ProfileComponent } from '../../profile/profile/profile.component';
import { ScoreComponent } from '../../scores/score/score.component';

const routes: Routes = [
    {
      path: 'bottomMenu',
      redirectTo: 'bottomMenu',
      pathMatch: 'full',
    },
    {
      path: '',
      component: BottomMenuComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'landing',
        },
        {
          path: 'landing',
          component: LandingComponent,
        },
        {
            path:'news',
            component:NewsComponent,
        },
        {
            path:'profile',
            component:ProfileComponent,
        },
        {
            path:'score',
            component:ScoreComponent,
        }
       
      ],
    },
  ];



@NgModule({
    declarations: [
      BottomMenuComponent,ProfileComponent,ScoreComponent
    ],
    imports: [IonicModule.forRoot(), RouterModule.forChild(routes), CommonModule, FormsModule,ReactiveFormsModule],
    exports: [
     
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class bottomMenuModule {}