import { NgModule } from '@angular/core';
import { EnviromentComponent } from './enviroment.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {TreeViewComponent} from 'src/app/tree-view/tree-view.component';
import {TreeViewModule} from 'src/app/tree-view/tree-view.module';

@NgModule({
  declarations: [
    EnviromentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TreeViewComponent,
    TreeViewModule,
  ],
  exports: [
    EnviromentComponent,
  ],
  providers: [
  ],
  bootstrap: [
  ]
})
export class EnviromentModule { }
