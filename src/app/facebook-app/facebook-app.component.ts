import { Component, OnInit } from '@angular/core';
import { InitParams, LoginOptions, FacebookService, LoginResponse } from 'ng2-facebook-sdk';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import  'rxjs/Rx';

@Component({
  selector: 'app-facebook-app',
  templateUrl: './facebook-app.component.html',
  providers: [FacebookService]
})
export class FacebookAppComponent implements OnInit {
showDiv: boolean = false;
tok: String = '';
bipId: string = '206683399815932';
pageId: string = '';
pageToken: string = '';
pageSubscribeUrl: string = '';
user_pages = [];
user_label_share = [];
routeRoot = 'https://salty-everglades-74818.herokuapp.com';
  constructor(public fb: FacebookService, public http: Http) { 
    let fbParams : InitParams = {
        appId: this.bipId,
        xfbml: true,
        version: 'v2.8'
    };
    this.fb.init(fbParams);
  }
  ngOnInit() {
  }

 loginFb(){
   this.fb.login({scope: 'email, manage_pages, read_page_mailboxes,publish_pages, pages_messaging'}).then(
      (response: LoginResponse) =>{
        let url = 'https://graph.facebook.com/'+response.authResponse.userID+'/accounts?access_token='+response.authResponse.accessToken;
        console.log('User Access Token: ',response.authResponse.userID, response.authResponse.accessToken);
        this.http.get(url).map((res,Response)=> res.json())
          .catch(err=> err.json())
          .subscribe(data=>{
            console.log('Data are: ', data)
            this.showDiv = true;
            this.user_pages = data['data'];
            this.user_pages.forEach((obj)=>{
              this.user_label_share.push(false);
            })
            console.log('User Label: ', this.user_label_share);
          },
          err=>{
            console.log('Error Are: ', err);
            this.showDiv = false;
          })

      } ,
      (error: any) => console.error(error)
   )
 }


connectPage(item, i){
  console.log('Select Page is: ', item.name, item.id, i);
  console.log('Page Subscribe Url: ', this.pageSubscribeUrl);
  this.pageToken = item.access_token;
  this.pageId = item.id;
  var self = this;
  let access_token = "206683399815932|ehMr4fL3JC7HJsoqeMKg9TWctAw";
  this.pageSubscribeUrl = "https://graph.facebook.com/v2.8/me/subscribed_apps?access_token="+ this.pageToken;
  let urlS="https://graph.facebook.com/"+this.pageId+"/subscriptions?object=page&callback_url=" + this.routeRoot + "/api/v1/messenger/userwebhook&fields=messages&verify_token=outgrow_messanger_bot_verify_code_user&access_token="+ access_token;
  console.log('URL IS: ', urlS);
  this.http.post(urlS, {})
    .subscribe(response=>{
      console.log('Webhook Subscribed Data: ', response);
      this.http.post(this.pageSubscribeUrl, {})
        .subscribe(data=> {
          console.log('Page Subscribe Data: ', data);
          let header= new Headers();
          header.append('Content-Type', 'application/json');
          let getSatrtButtonUrl = 'https://graph.facebook.com/v2.8/'+this.pageId + '/thread_settings?access_token='+this.pageToken;
          let dt = {
             "setting_type":"call_to_actions",
              "thread_state":"new_thread",
              "call_to_actions":[
                {
                  "payload":"Start Now"
                }
              ]
          };
          this.http.post(getSatrtButtonUrl, dt, {headers: header})
          .subscribe(res=>{
            console.log('Start Button: ', res);
            let head = new Headers();
            head.append('Content-Type', 'application/json');
            this.http.post(this.routeRoot + '/api/v1/messenger/pageinfo', {pageId: this.pageId, accessToken: this.pageToken}, {headers: head})
            .subscribe(res=> console.log('Access token and Page Id Send')
            , err=> console.log('AccessToken and PageId Not Send', err))
          }, err=>{
            console.log('Get Start Error: ', err);
          })
        }
        ,err=> console.log('Page Subscribe Error: ', err))
    }, err=>{
      console.log('Webhook Subscribed Error: ', err);
  })
 }
 openWindow(){
   window.open("https://www.facebook.com/pages", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
 }

}
