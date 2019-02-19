import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RepicesComponent } from './repices/repices.component';
import { RecipeDetailComponent } from './repices/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './repices/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './repices/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { HightlightDirective } from './shared/directives/hightlight.directive';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './repices/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './repices/recipe-detail/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RepicesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    HightlightDirective,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
