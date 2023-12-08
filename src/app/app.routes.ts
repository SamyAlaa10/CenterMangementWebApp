import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const routes: Routes = [
    {path:"",redirectTo:"/Home",pathMatch:"full"},
    {path:"Home",component:HomeComponent},
    {path:"**",component:NotFoundPageComponent}
];
