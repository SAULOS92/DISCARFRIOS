import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from "../servicios/firebase/users.service";
import { ActionSheetController } from '@ionic/angular';





@Component({
  selector: 'app-rutero',
  templateUrl: './rutero.page.html',
  styleUrls: ['./rutero.page.scss'],
})
export class RuteroPage implements OnInit {

  constructor(private router: Router, public authService: UsersService, private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  salir(){
    localStorage.setItem('user', 'null');
    localStorage.setItem('number', 'null');
    localStorage.setItem('ruteroCache', 'null');
    localStorage.setItem('ruteroCacheTimestamp', 'null');
    this.router.navigate(['home']);
  }

  async openActionSheet(dia: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Seleccionar acción',
      buttons: [
        {
          text: 'Actualizacion Datos',
          handler: () => {
            this.router.navigate(['rutero-dia', dia]);
          }
        },
        {
          text: 'Ordenamiento Rutero',
          handler: () => {
            this.router.navigate(['rutero-orden-dia', dia]);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }
}
