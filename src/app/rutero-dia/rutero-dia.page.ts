import { Component, OnInit } from '@angular/core';
import { CargaRuteroService } from "../servicios/firebase/carga-rutero.service";
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rutero-dia',
  templateUrl: './rutero-dia.page.html',
  styleUrls: ['./rutero-dia.page.scss'],
})
export class RuteroDiaPage implements OnInit {
  items: any;
  sinresult=false;
  lastCallTimestamp: number = 0;
  cacheDuration: number = 24 * 60 * 60 * 1000; // 24 horas en milisegundos
  ruteroSubscription: Subscription | undefined;
  constructor(public ruteroService: CargaRuteroService, private route: ActivatedRoute, private loadingController: LoadingController) { }

  ngOnInit() {
    const dia = this.route.snapshot.paramMap.get('dia');
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
      this.filterItemsByDay(dia);
      this.filterItemsByUpdate();
      return;
    }      
  }

  this.presentLoading();

  // Realizar la llamada al servicio si no hay datos en caché o si la caché ha expirado
  this.ruteroSubscription = this.ruteroService.getRutero(number).subscribe((res) => {
    console.log(res);
    this.items = res;
    this.filterItemsByDay(dia);
    this.filterItemsByUpdate();
    console.log(this.items);
    this.sinresult = this.items.length === 0;

    // Actualizar la caché con los nuevos datos y la marca de tiempo actual
    localStorage.setItem('ruteroCache', JSON.stringify(res));
    localStorage.setItem('ruteroCacheTimestamp', new Date().getTime().toString());

    this.dismissLoading();
  });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...', // Puedes personalizar el mensaje del loader
      translucent: true, // Permite que el fondo sea semi-transparente
      spinner: 'crescent' // Elige el estilo del spinner (puedes utilizar 'lines', 'circles', 'crescent', 'dots' o 'lines-small')
    });
    await loading.present();
  }
  
  async dismissLoading() {
    await this.loadingController.dismiss();
  }

  filterItemsByDay(dia: string | null) {
    this.items = this.items.filter((item: any) => item.Dias === dia)
      .sort((a: any, b: any) => parseInt(a['OrdenDia']) - parseInt(b['OrdenDia']));
  }
  
  filterItemsByUpdate() {
    this.items = this.items.filter((item: any) => !item.update);
  }

  ngOnDestroy() {
    if (this.ruteroSubscription) {
      this.ruteroSubscription.unsubscribe();
    }
  }



}
