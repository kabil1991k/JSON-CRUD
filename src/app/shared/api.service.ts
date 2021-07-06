import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  postEmployee(data : any)
  {
    return this.http.post<any>('http://localhost:3000/posts',data).pipe(map((Response : any)=>{
      return Response;
    }))
  }
  getEmploye()
  {
    return this.http.get('http://localhost:3000/posts').pipe(map((Response)=>
    {
      return Response;
    }))
  }
  updateEmploye(data : any,id:number)
  {
return this.http.put<any>('http://localhost:3000/posts'+id,data).pipe(map((Response)=>
{

}))
  }
  deleteEmployee(id:number)
  {
    return this.http.delete('http://localhost:3000/posts'+id).pipe(map((Response:any)=>
    {
return Response;
    }))
  }
}
