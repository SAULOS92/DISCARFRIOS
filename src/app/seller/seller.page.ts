import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.page.html',
  styleUrls: ['./seller.page.scss'],
})
export class SellerPage implements OnInit {
  number: number = 0;
  constructor(public router:Router) { }

  ngOnInit() {
  }

  saveNumber() {   
    if (this.number >= 1 && this.number <= 20) {
      localStorage.setItem('number', this.number.toString());
      this.router.navigate(['rutero']);
    } else {
      alert('Ingresa el codigo de la zona correctamente');
    }    
  }

}
