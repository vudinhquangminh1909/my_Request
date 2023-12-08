import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kind_Of_Fal_DTO } from './model';

@Injectable({
    providedIn: 'root',
})
export class Kind_of_fal_Service {
    private baseUrl = 'http://localhost:3000/Kind_of_fal';

    constructor(private http: HttpClient) { }

    create_Kind_of_fal(data: Kind_Of_Fal_DTO): Observable<any> {
        return this.http.post(this.baseUrl, data);
    }

    get_All_Kind_of_fales(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    delete_Kind_of_fal(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    get_Kind_of_fal_By_Id(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/${id}`);
    }

    update_Kind_of_fal(id: number, data: Kind_Of_Fal_DTO): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
}


