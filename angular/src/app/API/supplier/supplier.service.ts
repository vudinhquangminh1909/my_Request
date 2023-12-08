import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { supplier_DTO } from './model';

@Injectable({
    providedIn: 'root',
})
export class supplier_Service {
    private baseUrl = 'http://localhost:3000/supplier';

    constructor(private http: HttpClient) { }

    create_supplier(data: supplier_DTO): Observable<any> {
        return this.http.post(this.baseUrl, data);
    }

    get_All_supplier(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    delete_supplier(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    get_supplier_By_Id(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/${id}`);
    }

    update_supplier(id: number, data: supplier_DTO): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
}


