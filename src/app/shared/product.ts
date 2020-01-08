import {ProductCategory} from './product-category';

export class Product {
  id: number;
  name: string;
  pictureLink: string;
  describe: string;
  price: number;
  available: boolean;
  raiting: number;
  category: ProductCategory;
}
