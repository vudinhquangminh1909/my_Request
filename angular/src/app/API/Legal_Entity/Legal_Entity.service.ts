import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Legal_Entity_DTO } from './model';

@Injectable({
    providedIn: 'root',
})
export class Legal_Entity_Service {
    private baseUrl = 'http://localhost:3000/legal_Entity';

    constructor(private http: HttpClient) { }

    create_Legal_Entity(data: Legal_Entity_DTO): Observable<any> {
        return this.http.post(this.baseUrl, data);
    }

    get_All_Legal_Entities(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    delete_Legal_Entity(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    get_Legal_Entity_By_Id(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/${id}`);
    }

    update_Legal_Entity(id: number, data: Legal_Entity_DTO): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
}


