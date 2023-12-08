import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VAT_DTO } from './model';

@Injectable({
    providedIn: 'root',
})
export class VAT_Service {
    private baseUrl = 'http://localhost:3000/VAT';

    constructor(private http: HttpClient) { }

    create_VAT(data: VAT_DTO): Observable<any> {
        return this.http.post(this.baseUrl, data);
    }

    get_All_VAT(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    delete_VAT(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    get_VAT_id(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/${id}`);
    }

    update_VAT(id: number, data: VAT_DTO): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
}


