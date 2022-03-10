import {Recipe} from "./recipe.modal";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://dummyimage.com/600x400/000/fff',
      [new Ingredient('in1', 1), new Ingredient('in2', 2)]
    ),
  ]

  getRecipes() {
    return this.recipes.slice()
  }
}
