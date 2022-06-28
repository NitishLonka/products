import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [{path:'home',
component:HomeComponent},
{path:'contact',
component:ContactComponent},
{path:'products',
component:ProductsComponent},
{
  path:'',
  redirectTo:'home',
  pathMatch:'full'
},
{path:'details/:id',
component:ProductDetailsComponent
},
{
  path:'**',
  redirectTo:'home',
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
