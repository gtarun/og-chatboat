import { Component, OnInit } from '@angular/core';
import { FacebookInitParams, FacebookLoginOptions, FacebookService, FacebookLoginResponse } from 'ng2-facebook-sdk';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import  'rxjs/Rx';

@Component({
  selector: 'app-facebook-inte',
  templateUrl: './facebook-inte.component.html',
  styleUrls: ['./facebook-inte.component.css'],
  providers: [FacebookService]
})
export class FacebookInteComponent implements OnInit {

showDiv: boolean = false;
tok: String = '';
appId: string = '792069617611842';
bipId: string = '206683399815932';
pageId: string = '';
pageToken: string = '';
pageSubscribeUrl: string = '';
user_pages = [];
user_label_share = [];
  constructor(public fb: FacebookService, public http: Http) { 
    let fbParams : FacebookInitParams = {
        appId: this.appId,
        xfbml: true,
        version: 'v2.8'
    };
    this.fb.init(fbParams);
  }

  ngOnInit() {
  }

 loginFb(){
   this.fb.login({scope: 'email, manage_pages, read_page_mailboxes,publish_pages'}).then(
      (response: FacebookLoginResponse) =>{
        let url = 'https://graph.facebook.com/'+response.authResponse.userID+'/accounts?access_token='+response.authResponse.accessToken;
        console.log('User Access Token: ', response.authResponse.accessToken);
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
  //access_token="+item.access_token;
  console.log('Page Subscribe Url: ', this.pageSubscribeUrl);
  this.pageToken = item.access_token;
  this.pageId = item.id;
  var self = this;
  //let access_token = "206683399815932|ehMr4fL3JC7HJsoqeMKg9TWctAw";
  //let access_token = "792069617611842|vuCRMvbZcZhv0OslCzkpoTgCUqQ";
  //console.log('Access Token: ', self.tok);
  this.pageSubscribeUrl = "https://graph.facebook.com/"+ this.pageId + '/subscribed_apps?access_token='+ this.pageToken;
  let urlS="https://graph.facebook.com/"+this.pageId+"/subscriptions?object=page&callback_url=https://7e0826a7.ngrok.io/userwebhook&fields=messages&verify_token=outgrow_messanger_bot_verify_code_user&access_token=792069617611842|vuCRMvbZcZhv0OslCzkpoTgCUqQ";
  console.log('URL IS: ', urlS);
  this.http.post(urlS, {})
    .subscribe(response=>{
      console.log('Webhook Subscribed Data: ', response);
      this.http.get(this.pageSubscribeUrl)
        .subscribe(data=> console.log('Page Subscribe Data: ', data), err=> console.log('Page Subscribe Error: ', err))
    }, err=>{
      console.log('Webhook Subscribed Error: ', err);
  })
 }
 openWindow(){
   window.open("https://www.facebook.com/pages", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
 }
}
