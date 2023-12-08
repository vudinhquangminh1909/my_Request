import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { expence_code_DTO } from './model';

@Injectable({
    providedIn: 'root',
})
export class expence_code_Service {
    private baseUrl = 'http://localhost:3000/expence_code';

    constructor(private http: HttpClient) { }

    create_expence_code(data: expence_code_DTO): Observable<any> {
        return this.http.post(this.baseUrl, data);
    }

    get_All_Kiexpence_code(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    delete_expence_code(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    get_expence_code_By_Id(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/${id}`);
    }

    update_expence_code(id: number, data: expence_code_DTO): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
}


