import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../_services/category.service';
import { AppUserAuth } from '../security/app-user-auth';

@Component({
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  private getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
