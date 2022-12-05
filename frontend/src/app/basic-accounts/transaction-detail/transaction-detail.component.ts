import { Component, OnInit } from '@angular/core';
import { DataTransaction, TransactionsService } from 'src/app/_services/transactions.service';
import {Transaction} from 'src/app/_services/transactions.service'
import { ActivatedRoute } from '@angular/router';
import { TransactionTypePipe } from '../transaction-type.pipe';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css'],
  providers:[TransactionsService, TransactionTypePipe]
})
export class TransactionDetailComponent implements OnInit {

  transaction: Transaction | undefined;
  transactionTypePipe : TransactionTypePipe

  public id: string = "";

  profileForm = new FormGroup({
    name: new FormControl(''),
    account: new FormControl(''),
    value: new FormControl(''),
    issueDate: new FormControl('')
  });


  constructor(private route : ActivatedRoute, private transactionService: TransactionsService, transactionTypePipe: TransactionTypePipe) { 
    this.transactionTypePipe = transactionTypePipe}
    

  showTransaction() {
    this.transactionService.getTransaction(this.id).subscribe((data : Transaction) => {
        this.transaction = data;
        if(this.transaction.accountNumber == undefined){
          this.transaction.accountNumber = "";
        }
        this.profileForm.patchValue({
          name: this.transaction.fullName,
          account: this.transaction.bankCode.concat("/").concat(this.transaction.accountNumber),
          value: String(this.transaction.amount),
          issueDate: this.transaction.issueDate
        })
    }
      );
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
  });
  this.showTransaction();
  }
  

}
