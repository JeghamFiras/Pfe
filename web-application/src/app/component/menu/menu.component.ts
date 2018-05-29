import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
format:String[]=["active","","","",""];
  constructor(private router: Router) { }

  one() {
   this.format[0]="active";
   this.format [1]="";
   this.format[2]="";
   this.format[3]="";
   this.format[4]="";
   
  }

  two() {
    this.format[0]="";
   this.format [1]="active";
   this.format[2]="";
   this.format[3]="";
   this.format[4]="";
   
  }

  three() {
       this.format[0]="";
   this.format [1]="";
   this.format[2]="active";
   this.format[3]="";
   this.format[4]="";
  }
    four() {
      this.format[0]="";
   this.format [1]="";
   this.format[2]="";
   this.format[3]="active";
   this.format[4]="";
  }
  five() {
       this.format[0]="";
   this.format [1]="";
   this.format[2]="";
   this.format[3]="";
   this.format[4]="active";
  }

}
