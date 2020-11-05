import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './view-product/Product';

@Pipe({
  name: 'searchCategory'
})
export class SearchCategoryPipe implements PipeTransform {

  transform(products: Array<Product>, ...args: string[]):  Array<Product> {
    let filteredCategory = products.filter(Product => Product.category.includes(args[0]));
    return filteredCategory
  }

}
