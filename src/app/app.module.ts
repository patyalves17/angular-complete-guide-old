import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { RepicesComponent } from "./repices/repices.component";
import { RecipeDetailComponent } from "./repices/recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./repices/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./repices/recipe-list/recipe-item/recipe-item.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { HeaderComponent } from "./header/header.component";
import { RecipeStartComponent } from "./repices/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./repices/recipe-detail/recipe-edit/recipe-edit.component";
import { AuthComponent } from "./auth/auth.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";

import { HightlightDirective } from "./shared/directives/hightlight.directive";
import { DropdownDirective } from "./shared/directives/dropdown.directive";

import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from "./repices/recipe.service";

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
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
