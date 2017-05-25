import { Injectable } from '@angular/core';
import {Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpserviceService {
  header:any;
  router:any = '';
  url: any ;

  constructor(public http: Http) { 
    this.header = new Headers();
    this.header.append('Content-Type', 'application/json');
    this.router = 'http://outgrow-biz-api.herokuapp.com/api/v1/integration';
  }
  
 getUserToken(data): any {
   this.url = this.router + '/auth/chatbot/' + data.companyId;
   return this.http.post(this.url, {})
   .map((res: Response) => { return res.json()})
   .catch((error) => { return error.json()})
 }

 setUserConfig(data): any { 
   this.url = this.router + '/getlink/chatbot/'+ data.companyId;
   console.log('Data: ', data);
   let dat = {
     userId : data.userId,
     accessToken : data.accessToken
   }
   return this.http.post(this.url, data, {headers: this.header})
   .map((res: Response)=> {return res.json()})
   .catch((error)=>{return error.json()})
 }

 getPages(data): any {
   this.url = this.router + '/getpages/chatbot/' + data.companyId;
   return this.http.get(this.url)
   .map((res: Response)=> {return res.json()})
   .catch((error)=> {return error.json()})
 }

calIntegration(data): any {
  this.url = this.router + '/' + data.appId;
  return this.http.get(this.url)
  .map((res: Response)=> {return res.json()})
  .catch((err)=>{return err.json()})
}

savePage(data): any {
  this.url = this.router + '/' + data.appId;
  return this.http.put(this.url, data)
  .map((res: Response)=> { return res.json()})
  .catch((err)=> {return err.json()})

}

 updateToken(data): any {
   this.url = this.router + '/getlink/chatbot/' + data.companyId;
   return this.http.post(this.url, {accessToken: data.accessToken}, {headers: this.header})
   .map((res: Response)=> { return res.json()})
   .catch((error)=> {return error.json()})
 }

 unsubscribePage(data): any {
   console.log('Unsubscribed Data: ', data);
   this.url = this.router + '/deletepage/chatbot/' + data.appId + '/' + data.pageId;
   return this.http.delete(this.url)
   .map((res: Response)=> { return res.json()})
   .catch((error)=> { return error.json()})
 }
}
