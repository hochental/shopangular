import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductCategory} from '../shared/product-category';
import {Project} from '../shared/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private BASE_URL = 'http://localhost:8080/rest/project';

  constructor(private http:HttpClient) { }

  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(this.BASE_URL);
  }
}
