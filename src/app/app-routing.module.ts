import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'scoreboard',
    loadChildren: () => import('./scoreboard/scoreboard.module').then( m => m.ScoreboardPageModule)
  },
  {
    path: 'second',
    loadChildren: () => import('./second/second.module').then( m => m.SecondPageModule)
  },
  {
    path: 'third',
    loadChildren: () => import('./third/third.module').then( m => m.ThirdPageModule)
  },
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
