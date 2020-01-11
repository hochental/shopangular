import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductComponent} from './product/product.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {InBuildComponent} from './in-build/in-build.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'add', component: ProductAddComponent },
  { path: 'paypal', component: InBuildComponent },
  { path: 'project', component: ProjectListComponent },
  { path: 'edit/:id', component: ProductEditComponent },
  { path: 'user', component: UserComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
