import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router) { }

  one() {
    $('#service-one').addClass('active');
    $('#service-two').removeClass('active');
    $('#service-three').removeClass('active');
     $('#service-four').removeClass('active');
    $('#service-five').removeClass('active');
  }

  two() {
    $('#service-one').removeClass('active');
    $('#service-two').addClass('active');
    $('#service-three').removeClass('active');
     $('#service-four').removeClass('active');
    $('#service-five').removeClass('active');
  }

  three() {
    $('#service-one').removeClass('active');
    $('#service-two').removeClass('active');
    $('#service-three').addClass('active');
     $('#service-four').removeClass('active');
    $('#service-five').removeClass('active');
  }
    four() {
    $('#service-one').removeClass('active');
    $('#service-two').removeClass('active');
    $('#service-three').removeClass('active');
    $('#service-four').addClass('active');
    $('#service-five').removeClass('active');
  }
  five() {
    $('#service-one').removeClass('active');
    $('#service-two').removeClass('active');
    $('#service-three').removeClass('active');
    $('#service-four').removeClass('active');
    $('#service-five').addClass('active');
  }

}
