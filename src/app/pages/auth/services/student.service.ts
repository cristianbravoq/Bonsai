import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Cursos , Student } from '../../../shared/constants/constant'
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

// SOLICITAR INFORMACION A LA BASE DE DATOS
export class BonsaiService {

    API_URI = 'http://localhost:3000/api'

    constructor(private http: HttpClient) {}

    getStudents() {
        return this.http.get(`${this.API_URI}/students`);
    }

    getStudent( id: string ) {
        return this.http.get(`${this.API_URI}/students/${id}`);
    }

    getCalificacion( id: string ) {
        return this.http.get(`http://localhost:3000/api/students/report/${id}`);
    }

    deleteStudent (id: string) {
        return this.http.delete(`${this.API_URI}/students/${id}`);
    }

    saveStudent(student: Student) {
        return this.http.post(`${this.API_URI}/students`, student)
    }

    updateStudent(id: number, updateStudent: Student) {
        return this.http.put(`${this.API_URI}/students/${id}`, updateStudent);
    }

    updateCurso(id: number, updateStudent: Cursos) {
        return this.http.put(`http://localhost:3000/api/students/report/${id}`, updateStudent);
    }
}