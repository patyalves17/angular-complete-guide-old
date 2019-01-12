import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;

  @Output() ingredientAdd=new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addItem(){
    console.log(this.nameInput);
   console.log(this.nameInput.nativeElement.value);

   const name=this.nameInput.nativeElement.value;
   const amount=this.amountInput.nativeElement.value;
   const ingredient=new Ingredient(name, amount);

   console.log(ingredient);

   this.ingredientAdd.emit(ingredient);
  }

}
