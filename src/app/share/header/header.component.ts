import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  aboutOn: boolean= false; 
  contactOn: boolean= false; 
  loginOn: boolean= false; 
  regisOn:boolean = false; 
  loginOutOn:boolean = false;

  constructor() { }

  ngOnInit() {

    $(document).ready(()=>{
       $('[data-toggle="tooltip"]').tooltip();
    })
  }

}
