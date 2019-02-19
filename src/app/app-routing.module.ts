import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { RepicesComponent } from './repices/repices.component';
import { RecipeListComponent } from './repices/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './repices/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './repices/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './repices/recipe-detail/recipe-edit/recipe-edit.component';

const appRoutes:Routes =[
  { path:'', redirectTo:'/recipes' , pathMatch:'full'},
  { path:'recipes', component:RepicesComponent , children:[
    { path:'', component: RecipeStartComponent },
    { path:'new', component: RecipeEditComponent },
    { path:':id', component: RecipeDetailComponent },
    { path:':id/edit', component: RecipeDetailComponent },
  ]},
  { path:'shopping-list', component:ShoppingListComponent },
   
];

@NgModule({
  imports:[ RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
