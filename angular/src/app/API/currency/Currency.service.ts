import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency_DTO } from './model';

@Injectable({
    providedIn: 'root',
})
export class Currency_Service {
    private baseUrl = 'http://localhost:3000/Currencies';

    constructor(private http: HttpClient) { }

    create_Currency(data: Currency_DTO): Observable<any> {
        return this.http.post(this.baseUrl, data);
    }

    get_All_Currency(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    delete_Currency(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    get_Currency_id(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/${id}`);
    }

    update_Currency(id: number, data: Currency_DTO): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
}


