import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { department_DTO } from './model';

@Injectable({
    providedIn: 'root',
})
export class department_Service {
    private baseUrl = 'http://localhost:3000/department';

    constructor(private http: HttpClient) { }

    create_department(data: department_DTO): Observable<any> {
        return this.http.post(this.baseUrl, data);
    }

    get_All_department(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    delete_department(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    get_department_id(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/${id}`);
    }

    update_department(id: number, data: department_DTO): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
}


