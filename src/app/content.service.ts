import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }
  public editItem = {};
  addContent(formData){
   // console.log(formData);
    return this.http.put("http://localhost:3000/dev/content", formData);

  }
  getContent(){
    // console.log(formData);
     return this.http.get("http://localhost:3000/dev/content");
     
   }
   deleteContent(id){
     return this.http.delete(`http://localhost:3000/dev/content/${id}`)
   }

   updateContent(id,formData){
     return this.http.post(`http://localhost:3000/dev/content/${id}`,formData);
   }
}

