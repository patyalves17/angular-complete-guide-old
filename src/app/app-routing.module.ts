import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepicesComponent } from './repices/repices.component';
import { RecipeListComponent } from './repices/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './repices/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './repices/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './repices/recipe-detail/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './repices/recipe-resolver.service';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RepicesComponent,
    resolve: [RecipeResolverService],
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipeResolverService]
      }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
