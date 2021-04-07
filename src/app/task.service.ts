import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
 url="http://localhost:3000/task"
  constructor(private http:HttpClient) { }

  getTask(){
                return this.http.get(this.url);
  }

  createTask(Data: any){
    return this.http.post(this.url,Data)
  }
}

