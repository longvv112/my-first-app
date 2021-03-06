import {Ingredient} from "../shared/ingredient.model";

export class ShoppingListService {
  ingredients: Ingredient[] = []

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    // console.log(this.ingredients)
  }
}
