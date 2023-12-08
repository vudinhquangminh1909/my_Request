import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { form_father_DTO } from './model';

@Injectable({
    providedIn: 'root',
})
export class My_request_Service {
    private baseUrl = 'http://localhost:3000/My_request';

    constructor(private http: HttpClient) { }

    create_My_request(data: form_father_DTO): Observable<any> {
        return this.http.post(this.baseUrl, data);
    }

    get_All_My_request(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    delete_My_request(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    get_My_request_By_Id(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/${id}`);
    }

    update_My_request(id: number, data: form_father_DTO): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
    updateStatus(id: number, newStatus: string): Observable<void> {
        return this.http.patch<void>(`${this.baseUrl}/${id}`, { status: newStatus });
      }
    

}



