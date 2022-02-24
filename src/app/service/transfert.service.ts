import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {

  constructor(private http:HttpClient) { }

  AddNewquantiteTr(quantiteTr: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/quantiteTr', quantiteTr);
  }
}
