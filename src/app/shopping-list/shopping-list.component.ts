import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingrediesnts: Ingredient[] = [new Ingredient('Apples', 10), new Ingredient('Pears', 50)];
  constructor() { }

  ngOnInit() {
  }

  manageIngrdient(ing: Ingredient) {
    console.log(ing);
    this.ingrediesnts.push(ing);
  }
}
