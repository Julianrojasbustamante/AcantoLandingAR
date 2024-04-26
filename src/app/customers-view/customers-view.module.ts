import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DataTablesModule } from "angular-datatables";
import {AppRoutingModule} from "../app-routing.module";
import { CatalogueComponent } from './catalogue/catalogue.component';
import {FormsModule} from "@angular/forms";
import {ProductComponent} from "./product/product.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    HomePageComponent,
    CatalogueComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    DataTablesModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class CustomersViewModule { }
