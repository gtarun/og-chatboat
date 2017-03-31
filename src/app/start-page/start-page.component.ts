import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, NgForm, Validators} from '@angular/forms';
import {ImageServicesService} from '../services/image-services.service';
import {Observable} from 'rxjs/Rx';
declare var $: any;

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  np: boolean = true;
  nd: boolean = false;
  pp: boolean = true;
  pd: boolean = false;
  dp: boolean = true;
  dd: boolean = false;
  pdp: boolean = true;
  pdd: boolean = false;


  loadShow: boolean = false;
  loadImage: boolean = true;
  loadImageError: boolean = false;
  loadImageMsg: String = '';

  firstData: boolean = false;
  firstDataError: boolean = false;
  firstDataMsg: String = '';
  firstDataList: boolean = false;
  imageAddList = [];

  searchData: boolean = true;

  name_form: FormGroup;
  nameForm: boolean= false;

  degree_form: FormGroup;
  degreeForm:boolean = true;

  place_form: FormGroup;
  placeForm: boolean = false;

  place_degree_form: FormGroup;
  placeDegreeForm: boolean = false;

  constructor(public imgHttp: ImageServicesService, public fb: FormBuilder) {
      let colage_name = new FormControl('',Validators.compose([Validators.required, Validators.minLength(1)]));
      let degree_name = new FormControl('',Validators.compose([Validators.required, Validators.minLength(1)]));
      let place_name = new FormControl('',Validators.compose([Validators.required, Validators.minLength(1)]));
      let pd_degree = new FormControl('',Validators.compose([Validators.required, Validators.minLength(1)]));
      let pd_place = new FormControl('',Validators.compose([Validators.required, Validators.minLength(1)]));
      this.name_form = fb.group({
        'colg_name': colage_name
      })

      this.degree_form = fb.group({
        'degree_name': degree_name
      })

      this.place_form = fb.group({
        'place_name': place_name
      })

      this.place_degree_form = fb.group({
        'pdcombo_place': pd_place,
        'pdcombo_degree': pd_degree
      })
   }

  ngOnInit() {
    /*this.setDivsVisibility(true,false,false);
    this.setLoadImageDiv('', true, false);
    if(this.imgHttp.internetCheck){
        this.setDivsVisibility(true,false,false);
        this.setLoadImageDiv('', true, false);
        this.imgHttp.imageList().subscribe(data=> {
            this.imageAddList = data['imageList'];
            console.log('Image List: ', this.imageAddList);
            this.setDivsVisibility(false, true,false);
            this.setFirstDataDiv('',false, true);
        }, err=>{
          this.setDivsVisibility(false, true,false);
          this.setFirstDataDiv('Some Error, Try Again', true, false);
        })
    }else{  
      this.setDivsVisibility(true, false,false);
      this.setLoadImageDiv('Check Your Internet Connection', false, true);
    }*/
    $(document).ready(()=>{
       $(document).on('mouseover','.imageShowDiv',(e)=>{
         $(e.target).fadeOut('fast');
         $(e.target).fadeIn(2000);
       });
    });
    this.jqueryFunctionLoad();
  }

  jqueryFunctionLoad(){
    $(document).ready(()=>{
       var colageList = ['LPU', 'ABC', 'EFG', 'ICFAI', 'SRM', 'GNU', 'DVD', 'OXFORD'];
       var degreeList = ['MCA','CSE', 'CIVIL', 'MECHANICAL', 'CHEMICAL', 'BIO-TECH', 'IT', 'MBA', 'BBA', 'LLB', 'MBBS', 'MD', 'M.COM', 'M.SC', 'MA ENGLISH', 'MA HINDI']; 
       var placeList = ['Tripura', 'Punjab', 'Delhi', 'West Bengal', 'Assam', 'Meghalaya', 'Nagaland', 'Manipur', 'Andrhapradesh', 'Uttarpradesh', 'Uttarakhand'];
      $('#colge_name').autocomplete({
        source:colageList
      });
      $('#degre_name').autocomplete({
          source:degreeList
      });
      $('#plac_name').autocomplete({
          source:placeList
      });
      $('#pdcomb_place').autocomplete({
          source:placeList
      });
      $('#pdcomb_degree').autocomplete({
          source:degreeList
      });
      $(document).on('click','.collagesearchListBtn', (e)=>{
        if($(e.target).text() == 'Close') $(e.target).parent().parent().remove();
      })
    })
  }
  
  setDivsVisibility(lod, frst,sarch){
      this.loadShow = lod;
      this.firstData = frst;
      this.searchData = sarch;
  }

  setLoadImageDiv(msg: String, li:boolean, lie:boolean){
    this.loadImageMsg = msg;
    this.loadImage = li;
    this.loadImageError = lie;
  }

  setFirstDataDiv(msg: String, fe:boolean, fl: boolean){
    this.firstDataMsg = msg;
    this.firstDataError = fe;
    this.firstDataList = fl;
  }

  setSerchOtionForm(n: boolean,p:boolean,d:boolean,pd:boolean ){
    this.nameForm = n;
    this.placeForm = p;
    this.degreeForm = d;
    this.placeDegreeForm = pd; 
    if(n==true) this.name_form.reset();
    if(p==true) this.place_form.reset();
    if(d==true) this.degree_form.reset();
    if(pd==true) this.place_degree_form.reset();
    this.jqueryFunctionLoad();
  }

  setSerachOptionClass(np,nd,pp,pd,dp,dd,pdp,pdd){
    this.np = np;
    this.nd = nd;
    this.pp = pp;
    this.pd = pd;
    this.dp = dp;
    this.dd = dd;
    this.pdp = pdp;
    this.pdd = pdd;
  }
}
