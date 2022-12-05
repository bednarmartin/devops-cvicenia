import { Component, OnInit } from '@angular/core';
import { DataTransactions, TransactionsService, Transaction } from 'src/app/_services/transactions.service';
import { TransactionTypePipe } from '../transaction-type.pipe';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
  providers: [TransactionsService, TransactionTypePipe]
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[];
  transactionTypePipe : TransactionTypePipe;
  displayedColumns: string[] = ['meno', 'typ', 'ucet', 'hodnota', 'akcia'];

  constructor(private transactionService: TransactionsService, transactionTypePipe: TransactionTypePipe) { 
    this.transactionTypePipe = transactionTypePipe
    this.transactions = [];
    
  }

  showTransactions() {
    this.transactionService.getAllTransaction().subscribe((data : Transaction[]) => {
        this.transactions = data;
    }
      );
  }

  ngOnInit(): void {
    this.showTransactions();
  }
}
