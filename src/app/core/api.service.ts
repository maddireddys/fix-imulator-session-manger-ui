import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FixSession} from "../model/fixSession.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {
  
  constructor(private http: HttpClient) { 
   
  }
  
  baseUrl: string = 'http://localhost:8080/fix/session/';
  
  getSessions() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"load");
  }

  startSession(fixSession: FixSession) : Observable<ApiResponse> {
  
    return this.http.post<ApiResponse>(this.baseUrl+"start", fixSession);
  }

  addSession(fixSession: FixSession) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+"add", fixSession);
  }

  stopSession(fixSession: FixSession) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+"stop", fixSession);
  }

}