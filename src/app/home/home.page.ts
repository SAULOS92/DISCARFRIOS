import { Component } from '@angular/core';


import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsersService } from "../servicios/firebase/users.service";
import { LoadingController } from '@ionic/angular';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datos={};
  user_mob='';
  pass_mob='';
  loading: any;
  constructor(public authService: UsersService, public router:Router, public toast:ToastController, 
    private loadingController: LoadingController
    ) 
    {
      
      this.verifyRegister();
    }
    ionViewWillEnter(){ }
      
    async logIn(email: any, password: any) {
      this.presentLoading();
      this.authService.SignIn(email, password)
        .then((res) => {
           this.verifyRegister();
           this.dismissLoading()
        }).catch((error) => {
          this.presentToast(error.message);   
          this.dismissLoading()       
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
          this.presentLoading();
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
            this.dismissLoading()
          });
    }//fin de funcion verificar usuario
    async presentLoading() {
      this.loading = await this.loadingController.create({
        message: 'Iniciando sesión...', // Puedes personalizar el mensaje del loader
        translucent: true, // Permite que el fondo sea semi-transparente
        spinner: 'crescent' // Elige el estilo del spinner (puedes utilizar 'lines', 'circles', 'crescent', 'dots' o 'lines-small')
      });
      await this.loading.present();
    }
    
    async dismissLoading() {
      await this.loading.dismiss();
    }
}
