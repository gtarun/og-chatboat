import { Injectable } from '@angular/core';
import { Http, Response , Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GraphApiService {
  private header;
  private graph;
  private url: any;
  constructor(private http: Http) { 
    this.header = new Headers();
    this.header.append('Content-Type', 'application/json');
    this.graph = 'https://graph.facebook.com';
  }

  webhookSubscribe(data):any  {
    this.url = this.graph + '/' + data.pageId + '/subscriptions?object=page&callback_url='+ data.redirectUrl + '&fields=messages&verify_token=outgrow_messanger_bot_verify_code_user&access_token='+ data.accessToken;
    return  this.http.post(this.url ,{}, {headers: this.header})
    .map((res: Response)=> {return res.json()})
    .catch((error)=> {return error.json()})
  }

  pageSubscribe(data): any{
    console.log('Page Subscribe: ', data);
    this.url = this.graph + '/v2.8/me/subscribed_apps?access_token='+ data.accessToken;
    console.log('URL IS:' , this.url);
    return this.http.post(this.url, {}, {headers: this.header})
    .map((res: Response)=>{return res.json()})
    .catch((error)=>{ return error.json()})
  }

  startButoon(data): any{
    this.url = this.graph + '/v2.8/' + data.pageId + '/thread_settings?access_token=' + data.pageToken;
    let dat = {
       "setting_type":"call_to_actions",
              "thread_state":"new_thread",
              "call_to_actions":[
                {
                  "payload":"Start Now"
                }
              ]
    };
    return this.http.post(this.url, dat, {headers: this.header})
    .map((res: Response)=> { return res.json()})
    .catch((error)=> { return error.json()})
  }

  pageToken(data): any {
   this.url = this.graph + '/oauth/access_token?grant_type=fb_exchange_token&client_id= ' + data.appId + '&client_secret=' + data.appsecret + '&fb_exchange_token=' + data.accessToken;
   console.log('Url is: ', this.url);
   return this.http.get(this.url)
   .map((res: Response ) => { return res.json()})
   .catch((error) => { return error.json()})
 }

 pageListing(data): any {
   this.url = this.graph + '/' + data.id + '/accounts?access_token=' + data.accessToken;
   return this.http.get(this.url)
   .map((res: Response)=> { return res.json()})
   .catch((error)=> { return error.json()})
 }

 unsubscribePage(data): any {
   console.log('Page Unsubscibed: ', data);
   this.url = this.graph + '/v2.8/'+data.pageId+'/subscribed_apps?access_token=' + data.accessToken;  
   return this.http.delete(this.url)
   .map((res: Response)=> { return res.json() })
   .catch((error)=> { return error.json()})
 }
}
