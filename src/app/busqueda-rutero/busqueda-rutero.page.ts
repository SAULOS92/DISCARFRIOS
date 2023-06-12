import { Component, OnInit } from '@angular/core';
import { CargaRuteroService } from "../servicios/firebase/carga-rutero.service";
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Console } from 'console';

@Component({
  selector: 'SO-busqueda-rutero',
  templateUrl: './busqueda-rutero.page.html',
  styleUrls: ['./busqueda-rutero.page.scss'],
})
export class BusquedaRuteroPage implements OnInit {
  items: any;
  filteredItems: any;
  sinresult=true;
  ruteroSubscription: Subscription | undefined;
  lastCallTimestamp: number = 0;
  cacheDuration: number = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

  constructor(public ruteroService: CargaRuteroService, private loadingController: LoadingController) { }

  ngOnInit() {
    
    const number = localStorage.getItem('number');
    // Verificar si existe una entrada en caché y si la llamada se realizó hace menos de 24 horas
    const cachedData = localStorage.getItem('ruteroCache');
    const cachedTimestamp = localStorage.getItem('ruteroCacheTimestamp');

    if (cachedData && cachedTimestamp) {
      const timestamp = parseInt(cachedTimestamp);
      const currentTime = new Date().getTime();
      if (currentTime - timestamp < this.cacheDuration) {
        // Utilizar los datos en caché
        this.items = JSON.parse(cachedData);
        
        console.log(this.items);
        return;
      }
    }
    
    this.presentLoading();

    this.ruteroSubscription = this.ruteroService.getRutero(number).subscribe((res) => {
      this.items = res;
      

      // Actualizar la caché con los nuevos datos y la marca de tiempo actual
      localStorage.setItem('ruteroCache', JSON.stringify(res));
      localStorage.setItem('ruteroCacheTimestamp', new Date().getTime().toString());

      this.dismissLoading();
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      translucent: true,
      spinner: 'crescent'
    });
    await loading.present();
  }

  async dismissLoading() {
    await this.loadingController.dismiss();
  }

  filterItems(texto: string) {
    
      texto=texto.toLocaleLowerCase();
      this.filteredItems = this.items.filter((item: any) => {
        
        return (
          item.Cliente.toLocaleLowerCase().includes(texto) ||
          item.RZ.toLocaleLowerCase().includes(texto)
        );
      });
      if(this.items.length===0){this.sinresult=true;}
      console.log(this.filteredItems);
    }
     
  
  capturar(event : any){
    if(event.target.value.length===0){this.filteredItems=[];this.sinresult=true;}
    else{
      this.sinresult=false;
      this.filterItems(event.target.value);
      console.log(event.target.value);
    } }

  ngOnDestroy() {
    if (this.ruteroSubscription) {
      this.ruteroSubscription.unsubscribe();
    }
  }
}
