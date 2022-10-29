import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  document:any;  

  constructor(@Inject(DOCUMENT)
   document:Document, private router:Router) {
    this.document=document;
    }

  ngOnInit(): void {
  }
  order(event:any){
    if(this.document.getElementById('order').value){
    alert('want to order');
    this.router.navigate(['menu']);
  }else{
    alert('not ordered');
  }
}
}
