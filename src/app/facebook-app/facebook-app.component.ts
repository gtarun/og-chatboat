import { Component, OnInit } from '@angular/core';
import { FacebookInitParams, FacebookLoginOptions, FacebookService, FacebookLoginResponse } from 'ng2-facebook-sdk';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import  'rxjs/Rx';
import { HttpserviceService } from '../httpservice.service';
import { GraphApiService } from '../graph-api.service';

@Component({
  selector: 'app-facebook-app',
  templateUrl: './facebook-app.component.html'
})
export class FacebookAppComponent implements OnInit {

//Array For Releted To Page List
SubscribedPageList: any = [];
unsubscribedPageList: any =[];
share_link: any = [];
process_array: any = [];

// Boolean For Show Divs
unsubscribedPageDiv: boolean = false;
subscribedPageDiv: boolean = false;
logBtnDiv: boolean  = false;
firstLoadDiv: boolean = true;
showDiv: boolean = false;

//Releted Facebook App
appId: any = '792069617611842'; 
appSecret: any = '41d54e064a632d0696943ec75abdd985'; 
appAccessToken: any = '792069617611842|vuCRMvbZcZhv0OslCzkpoTgCUqQ';

// Company Id
company: any = '5922ca0a7148720011dd0e95';// company-id
cal: any = '5922cb857148720011dd0fd9';//app-id

//Supported Variables
logdo: boolean = false;
tokUpdate: boolean = false;
userData: any;
dat: any;
selectSubsIndex: any;
selectUnSubsIndex: any;
routeRoot = 'http://outgrow-biz-api.herokuapp.com/api/v1';
pageAccessToken: any;
  constructor(private fb: FacebookService, private backend: HttpserviceService, private graphApi: GraphApiService) { 
    let fbParams : FacebookInitParams = {
        appId: this.appId,
        xfbml: true,
        version: 'v2.8'
    };
    this.fb.init(fbParams);
  }
  ngOnInit() {
    this.backend.calIntegration({appId: this.cal}).subscribe((data)=>{
       this.pageAccessToken = data.data.chatbot ? data.data.chatbot : null;
    })
     this.backend.getUserToken({companyId: this.company})
     .subscribe((data)=>{
       console.log('Get Token Data: ', data.data);
       if(data.data.er == 1 ) {
         this.logdo = true;
         console.log('First Attempt');
        }
       else if (data.data.er == 2 ) {
         console.log('No Page Subscribed: ', data.data.data);
         this.SubscribedPageList = [];
         this.userData = data.data.data;
         console.log('User Data: ', this.userData);
         this.subscribedPageDiv = false;
       } 
       else{
          this.logdo = false;
          this.userData = data.data.data;
          console.log('User Data: ', this.userData);
          let subsPageLst = data.data.pages;
          console.log('Subscribed Page List: ', subsPageLst);
          if(subsPageLst == null || subsPageLst.length <= 0) {
              this.subscribedPageDiv = false;
          }
          else{
              this.SubscribedPageList = subsPageLst;
              console.log('Page List: ', this.SubscribedPageList);
              this.subscribedPageDiv = true;
          }
       }
       this.logBtnDiv = true;
     }, (error)=> console.log('Load Erroor======>>> ', error))
  }

 loginFb(){
  console.log('In Login Fb: ');
  if(this.logdo == true ){
    this.fbLoginFun();
  }
  else{
    console.log('User Data: ', this.userData);
    let dat = this.pageList(this.userData[0].client_id, this.userData[0].access_token);
    dat.then(solve => {
      if(this.SubscribedPageList.length <= 0){
         this.clearArray();
         this.unsubscribedPageList = solve.data;
         console.log('Pages1: ', this.unsubscribedPageList);
         this.unsubscribedPageDiv = true; 
         this.unsubscribedPageList.forEach(element => {this.share_link.push(false); this.process_array.push(false)}); 
         this.logBtnDiv = false;  
      }
      else{
        this.clearArray();
        let pages = solve.data;
         this.clearArray();
         pages.forEach(element => {
           if(this.SubscribedPageList.findIndex(x=> x.id == element.id) == -1){
             this.unsubscribedPageList.push(element);
             this.share_link.push(false);
             this.process_array.push(false);
           }  
       });
       console.log('Pages2: ', this.unsubscribedPageList);
       this.unsubscribedPageDiv = true;
       this.logBtnDiv = false;
      }
      this.selectUnSubsIndex = this.unsubscribedPageList.length + 2;
    },error=>{
      console.log('Token Update');
      this.logdo = true;
      this.tokUpdate = true;
      this.fbLoginFun();
    })
  }
 }


connectPage(item, i): any {
   console.log('Connect Call: ', item, i);
   this.selectUnSubsIndex = i;
   this.process_array[i] = true;
   console.log('App Access Token: ', this.appAccessToken);
   if(this.pageAccessToken) {
     this.graphApi.unsubscribePage({accessToken: this.pageAccessToken.access_token, pageId:this.pageAccessToken.page_id})
      .subscribe((result)=>{
        console.log('Unsubscribe Previous Config',result);
      })
    }
   this.graphApi.webhookSubscribe({pageId: item.id, redirectUrl: this.routeRoot + '/api/v1/messenger/chatbot', accessToken: this.appAccessToken})
   .subscribe(webhook=>{
      this.graphApi.pageSubscribe({accessToken: item.access_token})
      .subscribe(pagesubs=>{
          console.log('Webpage Subs: ', pagesubs);
          this.graphApi.pageToken({appId: this.appId, appsecret: this.appSecret, accessToken: item.access_token})
          .subscribe(pagetok=>{
            console.log('Fixed Token: ', pagetok);
            let lngPageToken = pagetok.access_token;
            this.graphApi.startButoon({pageId: item.id, pageToken: item.access_token})
            .subscribe(startfixed=>{
              console.log('Start Add: ', startfixed);
              console.log('User Data: ', this.userData);
              this.backend.calIntegration({appId: this.cal})
              .subscribe(sav=>{
                console.log('Page Details Save: ', sav);
                this.backend.savePage({types: 'chatbot',appId: this.cal, pageId: item.id, pageName: item.name, accessToken: lngPageToken, userId: this.userData[0].client_id, shareLink: 'https://www.messenger.com/t/' + item.id})
                .subscribe(psav=>{
                   let obj = {
                    slink: 'https://www.messenger.com/t/'+item.id,
                    id: item.id,
                    token: lngPageToken,
                    name: item.name
                  }
                  this.SubscribedPageList.push(obj);
                  this.SubscribedPageList.splice(0,1);
                  this.removeItem(i);
                  this.subscribedPageDiv = true;
                  this.process_array[i]= false;
                }, err=> {this.process_array[i] = false; console.log('Save Error: ', err)})
              }, errrr=> { this.process_array[i] = false; console.log('Cal Integration Error: ', errrr)})
            }, errr=> {this.process_array[i]= false;console.log('Page Start Btn Error: ', errr)})
          }, er=> {this.process_array[i]= false;console.log('Error Long Page Token: ', er)})
      }, err=> {this.process_array[i]= false;console.log('Page Subscribe Error: ', err)})
   }, error=>  {this.process_array[i]= false;console.log('Error Is: ', error)})
   this.selectUnSubsIndex = this.unsubscribedPageList.length + 1;
 }
 openWindow(){
   window.open("https://www.facebook.com/pages", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
 }

fbLoginFun(): any  {
  console.log('in Login Functtion........');
  this.fb.login({scope: 'email, manage_pages, read_page_mailboxes,publish_pages, pages_messaging'}).then(
      (response: FacebookLoginResponse) => {
        //response.authResponse.userID
        //response.authResponse.accessToken
        this.dat = {
          appId : this.appId,
          appsecret: this.appSecret,
          accessToken: response.authResponse.accessToken,
        };
        console.log('done1');
        this.graphApi.pageToken(this.dat)
        .subscribe(data=>{
          console.log('Data: ', data);
          let longUserToken = data.access_token;
          this.userData =[ {
            access_token: longUserToken,
            client_id: response.authResponse.userID
          }];
          if(this.tokUpdate){
            this.backend.setUserConfig({companyId: this.company, accessToken: longUserToken,userId: response.authResponse.userID})
            .subscribe(upData=>{
              console.log('Token Updation Done');
              this.tokUpdate = false;
              this.listingPageToken(response);
            }, upError=> console.log('Token Update Error'))
          }
          else{
           this.backend.setUserConfig({companyId: this.company, accessToken: longUserToken, userId: response.authResponse.userID})
            .subscribe(setData => {
            console.log('Set Done ');
            this.listingPageToken(response);
           }, setError=> console.log('Set Error: ', setError))
          }
        }, (error)=> console.log('Long Token Error Is: ', error))
      } ,(error: any) => console.error(error)
   ) 
}

pageList(id, token): any{
  return new Promise((resolve,reject)=>{
      this.graphApi.pageListing({id: id, accessToken: token})
      .subscribe(data=>{
        console.log('Data Page: ', data['data']);
        resolve ({er: 0, data: data['data']})
      }, error=> reject ({er: 1, data: error}))
  })
 }

 clearArray(): any {
   this.share_link = [];
   this.process_array = [];
   this.unsubscribedPageList = [];
 }

listingPageToken(response){
    let val = this.pageList(response.authResponse.userID, response.authResponse.accessToken);
    val.then(solve=>{
    if(this.SubscribedPageList.length <= 0){
       this.clearArray();
       this.unsubscribedPageList = solve.data;
       console.log('Pages1: ', this.unsubscribedPageList);
       this.unsubscribedPageDiv = true; 
       this.unsubscribedPageList.forEach(element => {this.share_link.push(false); this.process_array.push(false)}); 
       this.logBtnDiv = false;  
  }
    else{
      console.log('Else part: ');
     this.clearArray();
     let pages = solve.data;
     console.log( 'Pages-----', pages);
     this.clearArray();
     pages.forEach(element => {
        if(this.SubscribedPageList
        .findIndex(x=> x.id == element.id) == -1){
            this.unsubscribedPageList.push(element);
            this.share_link.push(false);
            this.process_array.push(true);
             this.graphApi.unsubscribePage({accessToken: element.access_token})
              .subscribe((result)=>{
                console.log(element.name,'Unsubscribe Previous Config',result);
              })
        }  
     });
     console.log('Pages2: ', this.unsubscribedPageList);
     this.unsubscribedPageDiv = true;
     this.logBtnDiv = false;
    }
    this.selectUnSubsIndex = this.unsubscribedPageList.length + 1;
  }, error=> console.log('Error Is: Error'))
}
removeItem(i){
 this.unsubscribedPageList.splice(i, 1);
 this.process_array.splice(i,1);
 this.share_link.splice(i,1);
}

unsubscribe(item, i){
  this.selectSubsIndex = i;
  console.log('Iiems: ', item, '    Index: ', i);
  this.graphApi.unsubscribePage({accessToken: item.token})
  .subscribe((result)=>{
    console.log('Result: ', result);
    this.backend.unsubscribePage({appId: this.cal, pageId: item.id})
    .subscribe(rs=>{
      console.log('Page Delete Result: ', rs);
      this.SubscribedPageList.splice(i,1);
      let obj = {
        name: item.name,
        id: item.id,
        access_token: item.token
      };
      this.unsubscribedPageList.push(obj);
      this.share_link.push(false);
      this.process_array.push(false);
      this.unsubscribedPageDiv = true;
    })
  }, (error)=> console.log('Error Page Unsubscribed: ', error))
  this.selectSubsIndex = this.SubscribedPageList.length + 1;
}

}
