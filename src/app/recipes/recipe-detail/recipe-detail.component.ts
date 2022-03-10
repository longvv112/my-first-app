import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.modal";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  clickAddShoppingList() {
    for (let i = 0; i < this.recipe.ingredients.length; i++) {
      this.slService.addIngredient(this.recipe.ingredients[i])
    }
  }

}
