import { Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import  'rxjs/Rx';

@Injectable()
export class ImageServicesService {
  
  constructor(public http: Http) { }
  imageList(){
    console.log('Inside ImageList Function');
    return this.http.get('http://localhost:3000/viewcollagelist')
                    .map((res:Response)=> res.json())
                    .catch(err=> err.json());
  }

  internetCheck(){
    return navigator.onLine;
  }
}
