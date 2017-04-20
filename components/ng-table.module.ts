import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {DCLModule} from 'ngx-dcl-component/dcl-component';

import {NgTable} from './table/ng-table.component';
import {NgTableFiltering} from './table/ng-table-filtering.directive';
import {NgTablePaging} from './table/ng-table-paging.directive';
import {NgTableSorting} from './table/ng-table-sorting.directive';

@NgModule({
  imports: [CommonModule, DCLModule],
  declarations: [NgTable, NgTableFiltering, NgTablePaging, NgTableSorting],
  exports: [NgTable, NgTableFiltering, NgTablePaging, NgTableSorting],
  entryComponents: [NgTable]
})
export class TableModule { }
