import { Component, OnInit } from '@angular/core';
import { UsersService } from "../servicios/firebase/users.service";
import { LoadingController, AlertController, ToastController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  email: any;
  password: any;
  formSignup: FormGroup = new FormGroup({});
  constructor(
    public authService: UsersService,
    public toast: ToastController,
    public formBuilder:FormBuilder,
    public router: Router   
  )
  { }

  ngOnInit() {
    this.formSignup= this.formBuilder.group({
      email: new FormControl ('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.pattern('(?=.*[-!#$%&/()?¡_*.])(?=.*[A-Z])(?=.*[a-z]).{8,15}')]),
    
    });
  }
  signUp(email: String, password: String){
    let postData=this.formSignup.value;
    
    this.authService.RegisterUser(postData.email, postData.password)      
    .then((res) => {
      this.authService.SendVerificationMail();
      this.presentToast('El usuario se creo correctamente');
      this.router.navigate(['home']);
      
      // Do something here
    }).catch((error) => {
      
      this.presentToast(error);
    })
}
async presentToast(message1: string) {
  const toast = await this.toast.create({
    message: message1,
    duration: 8000
  });
  toast.present();
}

}
