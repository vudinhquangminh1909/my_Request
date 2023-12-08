import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EInvoice } from './models';

@Injectable({
    providedIn: 'root',
})
export class EInvoiceService {
    private baseUrl = 'http://localhost:3000/EInvoice';

    constructor(private http: HttpClient) { }

    createEInvoice(data: EInvoice): Observable<any> {
        return this.http.post(this.baseUrl, data);
    }

    getAllEInvoices(): Observable<EInvoice[]> {
        return this.http.get<EInvoice[]>(this.baseUrl);
    }

    deleteEInvoice(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getEInvoiceById(id: number): Observable<EInvoice> {
        return this.http.get<EInvoice>(`${this.baseUrl}/${id}`);
    }

    updateEInvoice(id: number, data: EInvoice): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
}