import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.module";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Cheese', 6),
        new Ingredient('Tomatoes', 20),
        new Ingredient('Garam Masala', 4),
        new Ingredient('Rice', 10),
        new Ingredient('onions', 32)];


    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());

    }
    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //    this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}