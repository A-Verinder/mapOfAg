import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Student }    from "./model/student";
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class StudentsService {

    private apiUrl = 'http://127.0.0.1:8000/api/students/'; 

    constructor(private http: HttpClient) { }

    //limiting to 3 on the call 
    getThreeStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(`${this.apiUrl}?limit=3`);
    }

    //Get all students
    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.apiUrl);
    }

    searchStudents(term: string): Observable<Student[]> {
        const searchUrl = `${this.apiUrl}/students?search=${term}`;
        return this.http.get<Student[]>(searchUrl);
    }
}
