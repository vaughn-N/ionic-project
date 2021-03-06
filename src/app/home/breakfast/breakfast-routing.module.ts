import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreakfastPage } from './breakfast.page';

const routes: Routes = [
  {
    path: '',
    component: BreakfastPage
  },  {
    path: 'recipe',
    loadChildren: () => import('./recipe/recipe.module').then( m => m.RecipePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreakfastPageRoutingModule {}
