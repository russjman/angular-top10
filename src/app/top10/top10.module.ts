import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Top10PanelComponent } from './top10-panel/top10-panel.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { Top10ItemComponent } from './top10-item/top10-item.component';
import { CategorySelectFieldComponent } from './category-select-field/category-select-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    Top10ItemComponent,
    AddItemFormComponent,
    CategorySelectFieldComponent,
    Top10PanelComponent,
  ],
  exports: [
    Top10ItemComponent,
    AddItemFormComponent,
    CategorySelectFieldComponent,
    Top10PanelComponent,
  ],
})
export class Top10Module {}
