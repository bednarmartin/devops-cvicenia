import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAccountsRoutingModule } from './basic-accounts-routing.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionTypePipe } from './transaction-type.pipe';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionDetailComponent,
    TransactionTypePipe,
  ],
  imports: [
    CommonModule,
    BasicAccountsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
  ]
})
export class BasicAccountsModule { }
