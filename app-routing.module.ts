import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dash-board/dash-board.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroDetailComponent } from './Hero-detail/Hero-detail.component';

const routes: Routes = [
  {
    path:'dash-board' ,
    component: DashboardComponent 
  },
  {
    path:'heroes' ,
    component: HeroesComponent 
  },
  {
    path: 'HeroSearch',
    component: HeroSearchComponent
  },
  {
    path: 'Messages',
    component: MessagesComponent
  },
  
  {
    path: 'Hero-detail',
    component:HeroDetailComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
