webpackJsonp([0,3],{334:function(e,t,n){"use strict";var o=n(1),s=n(214),r=n(245);n.n(r);n.d(t,"a",function(){return c});var a=this&&this.__decorate||function(e,t,n,o){var s,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.http=e,this.header=new s.b,this.header.append("Content-Type","application/json"),this.graph="https://graph.facebook.com"}return e.prototype.webhookSubscribe=function(e){return this.url=this.graph+"/"+e.pageId+"/subscriptions?object=page&callback_url="+e.redirectUrl+"&fields=messages&verify_token=outgrow_messanger_bot_verify_code_user&access_token="+e.accessToken,this.http.post(this.url,{},{headers:this.header}).map(function(e){return e.json()}).catch(function(e){return e.json()})},e.prototype.pageSubscribe=function(e){return console.log("Page Subscribe: ",e),this.url=this.graph+"/v2.8/me/subscribed_apps?access_token="+e.accessToken,console.log("URL IS:",this.url),this.http.post(this.url,{},{headers:this.header}).map(function(e){return e.json()}).catch(function(e){return e.json()})},e.prototype.startButoon=function(e){this.url=this.graph+"/v2.8/"+e.pageId+"/thread_settings?access_token="+e.pageToken;var t={setting_type:"call_to_actions",thread_state:"new_thread",call_to_actions:[{payload:"Start Now"}]};return this.http.post(this.url,t,{headers:this.header}).map(function(e){return e.json()}).catch(function(e){return e.json()})},e.prototype.pageToken=function(e){return this.url=this.graph+"/oauth/access_token?grant_type=fb_exchange_token&client_id= "+e.appId+"&client_secret="+e.appsecret+"&fb_exchange_token="+e.accessToken,console.log("Url is: ",this.url),this.http.get(this.url).map(function(e){return e.json()}).catch(function(e){return e.json()})},e.prototype.pageListing=function(e){return this.url=this.graph+"/"+e.id+"/accounts?access_token="+e.accessToken,this.http.get(this.url).map(function(e){return e.json()}).catch(function(e){return e.json()})},e.prototype.unsubscribePage=function(e){return console.log("Page Unsubscibed: ",e),this.url=this.graph+"/v2.8/me/subscribed_apps?access_token="+e.accessToken,this.http.delete(this.url).map(function(e){return e.json()}).catch(function(e){return e.json()})},e=a([n.i(o.Injectable)(),i("design:paramtypes",["function"==typeof(t=void 0!==s.c&&s.c)&&t||Object])],e);var t}()},335:function(e,t,n){"use strict";var o=n(1),s=n(214),r=n(245);n.n(r);n.d(t,"a",function(){return c});var a=this&&this.__decorate||function(e,t,n,o){var s,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.http=e,this.router="",this.header=new s.b,this.header.append("Content-Type","application/json"),this.router="https://outgrow-biz-api.herokuapp.com/api/v1/integration"}return e.prototype.getUserToken=function(e){return this.url=this.router+"/auth/chatbot/"+e.companyId,this.http.post(this.url,{}).map(function(e){return e.json()}).catch(function(e){return e.json()})},e.prototype.setUserConfig=function(e){this.url=this.router+"/getlink/chatbot/"+e.companyId,console.log("Data: ",e);e.userId,e.accessToken;return this.http.post(this.url,e,{headers:this.header}).map(function(e){return e.json()}).catch(function(e){return e.json()})},e.prototype.getPages=function(e){return this.url=this.router+"/getpages/chatbot/"+e.companyId,this.http.get(this.url).map(function(e){return e.json()}).catch(function(e){return e.json()})},e.prototype.calIntegration=function(e){return this.url=this.router+"/"+e.appId,this.http.get(this.url).map(function(e){return e.json()}).catch(function(e){return e.json()})},e.prototype.savePage=function(e){return this.url=this.router+"/"+e.appId,this.http.put(this.url,e).map(function(e){return e.json()}).catch(function(e){return e.json()})},e.prototype.updateToken=function(e){return this.url=this.router+"/getlink/chatbot/"+e.companyId,this.http.post(this.url,{accessToken:e.accessToken},{headers:this.header}).map(function(e){return e.json()}).catch(function(e){return e.json()})},e.prototype.unsubscribePage=function(e){return console.log("Unsubscribed Data: ",e),this.url=this.router+"/deletepage/chatbot/"+e.appId+"/"+e.pageId,this.http.delete(this.url).map(function(e){return e.json()}).catch(function(e){return e.json()})},e=a([n.i(o.Injectable)(),i("design:paramtypes",["function"==typeof(t=void 0!==s.c&&s.c)&&t||Object])],e);var t}()},405:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=405},406:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=(n(516),n(492)),s=n(1),r=n(515),a=n(513);r.a.production&&n.i(s.enableProdMode)(),n.i(o.a)().bootstrapModule(a.a)},512:function(e,t,n){"use strict";var o=n(1);n.d(t,"a",function(){return a});var s=this&&this.__decorate||function(e,t,n,o){var s,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return e=s([n.i(o.Component)({selector:"app-root",template:n(670)}),r("design:paramtypes",[])],e)}()},513:function(e,t,n){"use strict";var o=n(218),s=n(1),r=n(483),a=n(214),i=n(512),c=n(514),u=n(335),l=n(334),p=n(373);n.n(p);n.d(t,"a",function(){return g});var h=this&&this.__decorate||function(e,t,n,o){var s,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(){function e(){}return e=h([n.i(s.NgModule)({declarations:[i.a,c.a],imports:[o.a,r.a,a.a],providers:[u.a,p.FacebookService,l.a],bootstrap:[i.a]}),d("design:paramtypes",[])],e)}()},514:function(e,t,n){"use strict";var o=n(1),s=n(373),r=(n.n(s),n(245)),a=(n.n(r),n(335)),i=n(334);n.d(t,"a",function(){return l});var c=this&&this.__decorate||function(e,t,n,o){var s,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e,t,n){this.fb=e,this.backend=t,this.graphApi=n,this.SubscribedPageList=[],this.unsubscribedPageList=[],this.share_link=[],this.process_array=[],this.unsubscribedPageDiv=!1,this.subscribedPageDiv=!1,this.logBtnDiv=!1,this.firstLoadDiv=!0,this.showDiv=!1,this.appId="792069617611842",this.appSecret="41d54e064a632d0696943ec75abdd985",this.appAccessToken="792069617611842|vuCRMvbZcZhv0OslCzkpoTgCUqQ",this.company="5922ca0a7148720011dd0e95",this.cal="5922cb857148720011dd0fd9",this.logdo=!1,this.tokUpdate=!1,this.routeRoot="https://outgrow-biz-api.herokuapp.com";var o={appId:this.appId,xfbml:!0,version:"v2.8"};this.fb.init(o)}return e.prototype.ngOnInit=function(){var e=this;this.backend.getUserToken({companyId:this.company}).subscribe(function(t){if(console.log("Get Token Data: ",t.data),1==t.data.er)e.logdo=!0,console.log("First Attempt");else if(2==t.data.er)console.log("No Page Subscribed: ",t.data.data),e.SubscribedPageList=[],e.userData=t.data.data,console.log("User Data: ",e.userData),e.subscribedPageDiv=!1;else{e.logdo=!1,e.userData=t.data.data,console.log("User Data: ",e.userData);var n=t.data.pages;console.log("Subscribed Page List: ",n),null==n||n.length<=0?e.subscribedPageDiv=!1:(e.SubscribedPageList=n,console.log("Page List: ",e.SubscribedPageList),e.subscribedPageDiv=!0)}e.logBtnDiv=!0},function(e){return console.log("Load Erroor======>>> ",e)})},e.prototype.loginFb=function(){var e=this;if(console.log("In Login Fb: "),1==this.logdo)this.fbLoginFun();else{console.log("User Data: ",this.userData);this.pageList(this.userData[0].client_id,this.userData[0].access_token).then(function(t){if(e.SubscribedPageList.length<=0)e.clearArray(),e.unsubscribedPageList=t.data,console.log("Pages1: ",e.unsubscribedPageList),e.unsubscribedPageDiv=!0,e.unsubscribedPageList.forEach(function(t){e.share_link.push(!1),e.process_array.push(!1)}),e.logBtnDiv=!1;else{e.clearArray();var n=t.data;e.clearArray(),n.forEach(function(t){-1==e.SubscribedPageList.findIndex(function(e){return e.id==t.id})&&(e.unsubscribedPageList.push(t),e.share_link.push(!1),e.process_array.push(!1))}),console.log("Pages2: ",e.unsubscribedPageList),e.unsubscribedPageDiv=!0,e.logBtnDiv=!1}e.selectUnSubsIndex=e.unsubscribedPageList.length+2},function(t){console.log("Token Update"),e.logdo=!0,e.tokUpdate=!0,e.fbLoginFun()})}},e.prototype.connectPage=function(e,t){var n=this;console.log("Connect Call: ",e,t),this.selectUnSubsIndex=t,this.process_array[t]=!0,console.log("App Access Token: ",this.appAccessToken),this.graphApi.webhookSubscribe({pageId:e.id,redirectUrl:this.routeRoot+"/api/v1/messenger/chatbot",accessToken:this.appAccessToken}).subscribe(function(o){n.graphApi.pageSubscribe({accessToken:e.access_token}).subscribe(function(o){console.log("Webpage Subs: ",o),n.graphApi.pageToken({appId:n.appId,appsecret:n.appSecret,accessToken:e.access_token}).subscribe(function(o){console.log("Fixed Token: ",o);var s=o.access_token;n.graphApi.startButoon({pageId:e.id,pageToken:e.access_token}).subscribe(function(o){console.log("Start Add: ",o),console.log("User Data: ",n.userData),n.backend.calIntegration({appId:n.cal}).subscribe(function(o){console.log("Page Details Save: ",o),n.backend.savePage({types:"chatbot",appId:n.cal,pageId:e.id,pageName:e.name,accessToken:s,userId:n.userData[0].client_id,shareLink:"https://www.messenger.com/t/"+e.id}).subscribe(function(o){var r={slink:"https://www.messenger.com/t/"+e.id,id:e.id,token:s,name:e.name};n.SubscribedPageList.push(r),n.removeItem(t),n.subscribedPageDiv=!0,n.process_array[t]=!1},function(e){n.process_array[t]=!1,console.log("Save Error: ",e)})},function(e){n.process_array[t]=!1,console.log("Cal Integration Error: ",e)})},function(e){n.process_array[t]=!1,console.log("Page Start Btn Error: ",e)})},function(e){n.process_array[t]=!1,console.log("Error Long Page Token: ",e)})},function(e){n.process_array[t]=!1,console.log("Page Subscribe Error: ",e)})},function(e){n.process_array[t]=!1,console.log("Error Is: ",e)}),this.selectUnSubsIndex=this.unsubscribedPageList.length+1},e.prototype.openWindow=function(){window.open("https://www.facebook.com/pages","_blank","location=yes,height=570,width=520,scrollbars=yes,status=yes")},e.prototype.fbLoginFun=function(){var e=this;console.log("in Login Functtion........"),this.fb.login({scope:"email, manage_pages, read_page_mailboxes,publish_pages, pages_messaging"}).then(function(t){e.dat={appId:e.appId,appsecret:e.appSecret,accessToken:t.authResponse.accessToken},console.log("done1"),e.graphApi.pageToken(e.dat).subscribe(function(n){console.log("Data: ",n);var o=n.access_token;e.userData=[{access_token:o,client_id:t.authResponse.userID}],e.tokUpdate?e.backend.setUserConfig({companyId:e.company,accessToken:o,userId:t.authResponse.userID}).subscribe(function(n){console.log("Token Updation Done"),e.tokUpdate=!1,e.listingPageToken(t)},function(e){return console.log("Token Update Error")}):e.backend.setUserConfig({companyId:e.company,accessToken:o,userId:t.authResponse.userID}).subscribe(function(n){console.log("Set Done "),e.listingPageToken(t)},function(e){return console.log("Set Error: ",e)})},function(e){return console.log("Long Token Error Is: ",e)})},function(e){return console.error(e)})},e.prototype.pageList=function(e,t){var n=this;return new Promise(function(o,s){n.graphApi.pageListing({id:e,accessToken:t}).subscribe(function(e){console.log("Data Page: ",e.data),o({er:0,data:e.data})},function(e){return s({er:1,data:e})})})},e.prototype.clearArray=function(){this.share_link=[],this.process_array=[],this.unsubscribedPageList=[]},e.prototype.listingPageToken=function(e){var t=this;this.pageList(e.authResponse.userID,e.authResponse.accessToken).then(function(e){if(t.SubscribedPageList.length<=0)t.clearArray(),t.unsubscribedPageList=e.data,console.log("Pages1: ",t.unsubscribedPageList),t.unsubscribedPageDiv=!0,t.unsubscribedPageList.forEach(function(e){t.share_link.push(!1),t.process_array.push(!1)}),t.logBtnDiv=!1;else{console.log("Else part: "),t.clearArray();var n=e.data;console.log("Pages-----",n),t.clearArray(),n.forEach(function(e){-1==t.SubscribedPageList.findIndex(function(t){return t.id==e.id})&&(t.unsubscribedPageList.push(e),t.share_link.push(!1),t.process_array.push(!0))}),console.log("Pages2: ",t.unsubscribedPageList),t.unsubscribedPageDiv=!0,t.logBtnDiv=!1}t.selectUnSubsIndex=t.unsubscribedPageList.length+1},function(e){return console.log("Error Is: Error")})},e.prototype.removeItem=function(e){this.unsubscribedPageList.splice(e,1),this.process_array.splice(e,1),this.share_link.splice(e,1)},e.prototype.unsubscribe=function(e,t){var n=this;this.selectSubsIndex=t,console.log("Iiems: ",e,"    Index: ",t),this.graphApi.unsubscribePage({accessToken:e.token}).subscribe(function(o){console.log("Result: ",o),n.backend.unsubscribePage({appId:n.cal,pageId:e.id}).subscribe(function(o){console.log("Page Delete Result: ",o),n.SubscribedPageList.splice(t,1);var s={name:e.name,id:e.id,access_token:e.token};n.unsubscribedPageList.push(s),n.share_link.push(!1),n.process_array.push(!1),n.unsubscribedPageDiv=!0})},function(e){return console.log("Error Page Unsubscribed: ",e)}),this.selectSubsIndex=this.SubscribedPageList.length+1},e=c([n.i(o.Component)({selector:"app-facebook-app",template:n(671)}),u("design:paramtypes",["function"==typeof(t=void 0!==s.FacebookService&&s.FacebookService)&&t||Object,"function"==typeof(r=void 0!==a.a&&a.a)&&r||Object,"function"==typeof(l=void 0!==i.a&&i.a)&&l||Object])],e);var t,r,l}()},515:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={production:!0}},516:function(e,t,n){"use strict";var o=n(530),s=(n.n(o),n(523)),r=(n.n(s),n(519)),a=(n.n(r),n(525)),i=(n.n(a),n(524)),c=(n.n(i),n(522)),u=(n.n(c),n(521)),l=(n.n(u),n(529)),p=(n.n(l),n(518)),h=(n.n(p),n(517)),d=(n.n(h),n(527)),g=(n.n(d),n(520)),f=(n.n(g),n(528)),b=(n.n(f),n(526)),y=(n.n(b),n(531)),v=(n.n(y),n(944));n.n(v)},670:function(e,t){e.exports='<div style="margin-left: 5%; margin-top: 2%;">\r\n    <app-facebook-app></app-facebook-app>\r\n</div>'},671:function(e,t){e.exports='<div *ngIf="subscribedPageDiv" style="margin-left: 10%; width: 80%; height: auto;">\r\n    <div *ngFor="let item of SubscribedPageList; let i =index;">\r\n        <div class="alert alert-info" style="margin-top: 1%; border: solid; width: 80%; height: 100%;">\r\n            <h5 style="float: left;  margin-left: 1%;"> {{item.name}}</h5>\r\n            <h5 style="float: left; margin-left: 8%"> Share Link: <a target="blank" href="{{item.slink}}"> {{item.slink}} </a></h5>\r\n            <button class="btn btn-danger" style=" float: right;" (click)="unsubscribe(item, i)" [disabled]="selectSubsIndex == i">Unsubscribe Page</button>\r\n            <div style="clear:both "></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="alert alert-warning" style="margin-left: 10%;width: 64%;height: auto;" *ngIf="logBtnDiv ">\r\n    <h4 style="float:left; margin-left: 0.75%; margin-top: 1.5%; color: blue;">facebook</h4>\r\n    <button class=" btn btn-default " style="float: right; margin-right: 1%; " type="buttton " (click)="loginFb()">+    Connect With Facebook</button>\r\n    <div style="clear:both "></div>\r\n</div>\r\n<div *ngIf="unsubscribedPageDiv " style="margin-left: 10%; width: 80%; ">\r\n    <div *ngFor="let item of unsubscribedPageList; let i=index; ">\r\n        <div class="alert alert-info " style="margin-top: 1%;height: auto; ">\r\n            <button class="btn btn-primary disabled" style="float: left;">{{item.name}}</button>\r\n            <button class="btn btn-danger" style="float: left; margin-left: 2%;" (click)="connectPage(item, i);" [disabled]=\'selectUnSubsIndex == i\'>Connect</button>\r\n            <i style="margin-left: 2%;" *ngIf="process_array[i] ">Processing...</i>\r\n            <div style="clear:both "></div>\r\n        </div>\r\n    </div>\r\n    <button class="btn btn-primary " (click)="openWindow() ">Create New Page</button>\r\n</div>'},945:function(e,t,n){e.exports=n(406)}},[945]);