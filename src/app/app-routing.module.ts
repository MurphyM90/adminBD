import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/todo-details/todo-details.module').then( m => m.TodoDetailsPageModule)
  },
  { 
    path: 'details', 
    loadChildren: () => import('./pages/todo-details/todo-details.module').then( m => m.TodoDetailsPageModule)
  }
];

// TODO: 4) Video - Como se mostrara el URL de la pagina - En el video aparece de otra manera

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
