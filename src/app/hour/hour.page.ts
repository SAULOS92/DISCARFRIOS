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
  telefono: String= '';
  telefono2: String = '';
  sinTelefono: boolean = false;
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
      message: error,
      duration: 4000,
      color: 'danger',
      position: 'top'
    });
    toast.present();    
  }
  onSubmit() {
    console.log(this.telefono);
    console.log(this.telefono.length);
if(this.isContinuous){
      if (!this.openingTime ||
        !this.closingTime ||
        !this.telefono ||
        !this.telefono2 || this.telefono.length <10 || this.telefono2.length <10)
        {
        this.showErrorToast('Por favor complete todos los campos y asegúrese de que los campos de teléfono tengan al menos 10 dígitos.');
      return;
      }else{
      const item = {
        codigo: this.codigo, // Reemplaza con el código correcto del documento        
        openingTime: this.openingTime,
        closingTime: this.closingTime,
        isContinuous: this.isContinuous,
        update: 'si',
        Telefono: this.telefono,
        Telefono2: this.telefono2
      };
      if (!this.validateTimeRange(this.openingTime, this.closingTime)) {
        this.showErrorToast('La hora de cierre debe ser superior a la hora de apertura.');
        return;
      }
      this.updateItemInLocalStorage(this.codigo);
      this.cargaRuteroService.update(item)
      .then(() => {
        this.router.navigate(['rutero']);
      })
      .catch(error => {
        this.showErrorToast(error);
      });
    }
    
  }
  else{
    if (!this.morningOpeningTime || !this.morningClosingTime || !this.afternoonOpeningTime || !this.afternoonClosingTime
      ||!this.telefono || !this.telefono2 || this.telefono.length <10 || this.telefono2.length <10 )
    {
      this.showErrorToast('Por favor complete todos los campos y asegúrese de que los campos de teléfono tengan al menos 10 dígitos.');
      return;
    }else{
    const item = {
      codigo: this.codigo, // Reemplaza con el código correcto del documento
      morningOpeningTime: this.morningOpeningTime,
      morningClosingTime: this.morningClosingTime,
      afternoonOpeningTime: this.afternoonOpeningTime,
      afternoonClosingTime: this.afternoonClosingTime,
      update: 'si',
      Telefono: this.telefono,
      Telefono2: this.telefono2
    };
    if (
      !this.validateTimeRange(this.morningOpeningTime, this.morningClosingTime) ||
      !this.validateTimeRange(this.afternoonOpeningTime, this.afternoonClosingTime) ||
      !this.validateTimeRange(this.morningClosingTime, this.afternoonOpeningTime)
    ) {
      this.showErrorToast('Por favor ingrese un rango de horas válido.');
      return;
    }
    this.updateItemInLocalStorage(this.codigo);
    this.cargaRuteroService.update(item)
      .then((res) => {
        console.log(res);
        this.router.navigate(['rutero']);
      })
      .catch(error => {
        this.showErrorToast(error);
        console.log(error);
      });
      
  }
}
  }
  updateItemInLocalStorage(codigo: string) {
    const dataString = localStorage.getItem('ruteroCache');
    console.log(this.codigo);
    if (dataString) {
      const data = JSON.parse(dataString);
      const updatedData = data.map((item: any) => {
        if (item.Codigo === codigo) {
          return { ...item, update: 'si' };
        } else {
          return item;
        }
      });
      localStorage.setItem('ruteroCache', JSON.stringify(updatedData));
      console.log(updatedData);
    }
  }
  validateTimeRange(startTime: string, endTime: string): boolean {
    const start = new Date(`1970-01-01T${startTime}`);
    const end = new Date(`1970-01-01T${endTime}`);
  
    return start < end;
  }
  toggleSinTelefono() {
    if (this.sinTelefono) {
      this.telefono2 = '0000000000';
    } else {
      this.telefono2 = '';
    }
  } 
  

}
