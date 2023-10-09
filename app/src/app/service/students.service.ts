import { Injectable }     from '@angular/core';
import { Observable, of } from "rxjs";
import { Student }        from "./model/student";

@Injectable({ providedIn: 'root' })
export class StudentsService {

    constructor() { }

    getStudents(): Observable<Student[]> {
        return of<Student[]>([]);
    }

}
