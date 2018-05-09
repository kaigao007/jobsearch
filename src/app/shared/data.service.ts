import { Injectable } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getJobs(){
    let myHeaders: Headers = new Headers();
    myHeaders.append("Authorization", "Token 2ce2ea522b02c8d75ebaad92a49954d81ebf2357");



    return this.http.get("https://apptradedesk.zination.com/api/job/", {headers: myHeaders})
    .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    )
  }




}
