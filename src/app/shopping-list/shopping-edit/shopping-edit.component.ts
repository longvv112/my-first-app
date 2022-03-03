import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef: ElementRef
  @ViewChild('amountInput') amountRef: ElementRef
  @Output() ingredientAdded = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit(): void {
  }

  onClickAdd() {
    const name = this.nameRef.nativeElement.value
    const amount = this.amountRef.nativeElement.value
    const newIngredient = new Ingredient(name, amount)
    this.ingredientAdded.emit(newIngredient)
  }
}
