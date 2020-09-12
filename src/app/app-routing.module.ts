import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddEditRecipeComponent,
  },
  {
    path: 'edit/:id',
    component: AddEditRecipeComponent,
  },
  {
    pathMatch: 'full',
    path: '',
    component: RecipeListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
