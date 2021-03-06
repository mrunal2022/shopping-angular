import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    /*private recipes: Recipe[] = [
         new Recipe('Chicken Biryani', 'Chicken Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice', 'https://geekrobocook.com/wp-content/uploads/2021/05/Muradabadi-chicken-biryani.jpg', [
             new Ingredient('Chicken', 1),
             new Ingredient('Onions', 4),
             new Ingredient('Tomatoes', 3)
         ]),
         new Recipe('Dosa', 'Dosa is a popular South Indian thin crepe made with fermented rice and lentil batter.', 'https://wallpapercave.com/wp/wp6734909.jpg', [
             new Ingredient('Rice', 2),
             new Ingredient('Dal', 5)
 
         ])
     ];*/
    private recipes: Recipe[] = [];
    constructor(private slService: ShoppingListService) {

    }
    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());

    }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }


}