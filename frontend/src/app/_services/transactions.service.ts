import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Transaction {
  transactionId: number;
  fullName: string;
  transactionType: string;
  accountNumber: string;
  bankCode: string;
  issueDate: string;
  amount: number
}

export interface DataTransaction{
  data: Transaction
}

export interface DataTransactions{
  data: Transaction[]
}

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  apiUrl: string = 'api/transactions/'

  constructor(private http: HttpClient) { }


  getTransaction(id:string) {
    return this.http.get<Transaction>(this.apiUrl + id);
  }

  getAllTransaction(){
    return this.http.get<Transaction[]>(this.apiUrl)
  }
}
