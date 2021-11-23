import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: true }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  ingredientForm: FormGroup;

  editedItem: Ingredient;
  id: number;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing

      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })


        }
      );

  }
  onSubmit() {



    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, this.ingredientForm.value);
    } else {
      this.slService.addIngredient(this.ingredientForm.value);
    }
    this.editMode = false;
    this.onClear();

  }
  private initForm() {
    const ingredient = this.slService.getIngredient(this.id);

    let ingredientName = '';
    let ingredientAmount = '';

    this.ingredientForm = new FormGroup({
      'name': new FormControl(ingredientName, Validators.required),
      'amount': new FormControl(ingredientAmount, Validators.required)



    });

  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
