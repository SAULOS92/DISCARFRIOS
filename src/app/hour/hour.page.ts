import { Component, OnInit } from '@angular/core';

import { CargaRuteroService } from "../servicios/firebase/carga-rutero.service";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.page.html',
  styleUrls: ['./hour.page.scss'],
})
export class HourPage implements OnInit {
  codigo: string = '';
  openingTime: string = '';
  closingTime: string = '';
  isContinuous: boolean = false;
  morningOpeningTime: string = '';
  morningClosingTime: string = '';
  afternoonOpeningTime: string = '';
  afternoonClosingTime: string = '';
  telefono: string= '';
  telefono2: string = '';
  constructor(public cargaRuteroService: CargaRuteroService, private route: ActivatedRoute,
    private toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const codigo = params.get('codigo');
      if (codigo !== null) {
        this.codigo = codigo;
        console.log('Código:', this.codigo);
      }
    });
  }

  async showErrorToast(error: any) {
    const toast = await this.toastController.create({
      message: 'Error al actualizar el documento',
      duration: 3000,
      color: 'danger',
      position: 'top'
    });
    toast.present();
    console.error('Error al actualizar el documento:', error);
  }
  onSubmit() {
    
    if(this.isContinuous){
      const item = {
        codigo: this.codigo, // Reemplaza con el código correcto del documento
        openingTime: this.openingTime,
        closingTime: this.closingTime,
        isContinuous: this.isContinuous,
        update: 'si',
        Telefono: this.telefono,
        Telefono2: this.telefono2
      };
      this.cargaRuteroService.update(item)
      .then(() => {
        this.router.navigate(['rutero']);
      })
      .catch(error => {
        this.showErrorToast(error);
      });
  }
  else{
    const item = {
      codigo: this.codigo, // Reemplaza con el código correcto del documento
      isContinuous: this.isContinuous,
      morningOpeningTime: this.morningOpeningTime,
      morningClosingTime: this.morningClosingTime,
      afternoonOpeningTime: this.afternoonOpeningTime,
      afternoonClosingTime: this.afternoonClosingTime,
      update: 'si',
      Telefono: this.telefono,
      Telefono2: this.telefono2
    };
    this.cargaRuteroService.update(item)
      .then(() => {
        this.router.navigate(['rutero-dia']);
      })
      .catch(error => {
        this.showErrorToast(error);
      });
  }
  }

    
  

  
  

}
