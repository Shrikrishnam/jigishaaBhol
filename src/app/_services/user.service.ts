import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ allfriends, editfriends} from "../_services/allfriends";
import { Contact } from "../contact-us/contact-us.component";
// import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {

  viewAppointment: allfriends={
    inr: 0,
    paisa:0,
    // date: '',
    streetaddress: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    phonenumber: 0,
    email: '',
    firstname: '',
    lastname: '',
    age: 0,
    trainerpreference: '',
    physiotherapist: '',
    packages: '',
    // id: 0
  }

    public static BaseUrl = "http://localhost:6565/";

    constructor(private http: HttpClient) { }
    postfitnessdata(data : allfriends) : Observable<allfriends[]>{
      return this.http.post<allfriends[]>(UserService.BaseUrl+'allfriends',data,httpOptions);
    }
    getfitnessdata() : Observable<allfriends[]> {
      return this.http.get<allfriends[]>(UserService.BaseUrl+'allfriends',httpOptions);
    }
    deletefitnessdata(id) : Observable<allfriends>{
      return this.http.delete<allfriends>(UserService.BaseUrl+'allfriends/'+id,httpOptions)
    }
    editfitnessData(editdata : editfriends) : Observable<editfriends>{
      console.log(editdata);
      return this.http.put<editfriends>(UserService.BaseUrl+'allfriends/'+editdata.id,editdata,httpOptions);
    }
    postcontactusdata(data : Contact) : Observable<Contact[]>{
      return this.http.post<Contact[]>(UserService.BaseUrl+'contact-us',data,httpOptions);
    }
}