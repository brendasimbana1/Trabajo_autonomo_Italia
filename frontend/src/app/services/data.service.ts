import { Injectable,Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router,  @Inject(PLATFORM_ID) private platformId: Object,
  @Inject(DOCUMENT) private document: Document ) { }

  registrar(user: { nombre: string; nota: number; }){
    return this.http.post<any>(this.URL + '/register',user);
  }
}
