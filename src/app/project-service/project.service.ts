import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ProductCategory} from '../shared/product-category';
import {Project} from '../shared/project';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private BASE_URL = 'http://localhost:8080/rest/project';

  constructor(private http:HttpClient) { }

  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(this.BASE_URL).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError("Brak dostepu do plików" || "Server Error");
  }

}
