import { Component } from '@angular/core';


import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsersService } from "../servicios/firebase/users.service";





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datos={};
  user_mob='';
  pass_mob='';
  constructor(public authService: UsersService, public router:Router, public toast:ToastController, 
    ) 
    {
      
      this.verifyRegister();
    }
    ionViewWillEnter(){ }
      
    logIn(email: any, password: any) {
      this.authService.SignIn(email, password)
        .then((res) => {
           this.verifyRegister();
        }).catch((error) => {
          this.presentToast(error.message);          
        })
    }
    async presentToast(message1: any) {
      const toast = await this.toast.create({
        message: message1,
        duration: 8000
      });
      toast.present();
    }
    verifyRegister()
    {  
          //validar que el usuario este autenticado
          this.authService.ngFireAuth.authState.subscribe((user) => {
            if (user) {//esta autenticado
              //localStorage.setItem('user', JSON.stringify(user));
              const number = localStorage.getItem('number');
              console.log(number);
              if (number === 'null') {
                this.router.navigate(['seller']);
              } else {
                this.router.navigate(['rutero']);
              }
              
                  if(this.authService.isEmailVerified){//Si el email esta verificado                       
                  }else{//email no verificado                   
                  }              
            } else {//usuario no logueado
              localStorage.setItem('user', 'null');
              localStorage.setItem('number', 'null');
            }
          });
    }//fin de funcion verificar usuario
}
