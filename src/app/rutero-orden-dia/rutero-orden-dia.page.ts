import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { RuteroOrdenService } from "../servicios/firebase/rutero-orden.service";
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';


@Component({
  selector: 'SO-rutero-orden-dia',
  templateUrl: './rutero-orden-dia.page.html',
  styleUrls: ['./rutero-orden-dia.page.scss'],
})
export class RuteroOrdenDiaPage implements OnInit {
  items: any;
  sinresult=false;
  lastCallTimestamp: number = 0;
  cacheDuration: number = 24 * 60 * 60 * 1000; // 24 horas en milisegundos
  ruteroSubscription: Subscription | undefined;

  constructor(public ruteroService: RuteroOrdenService, private route: ActivatedRoute, 
    private loadingController: LoadingController, private router: Router) { }

  ngOnInit() {
    const dia = this.route.snapshot.paramMap.get('dia');
    const number = localStorage.getItem('number');

  // Verificar si existe una entrada en caché y si la llamada se realizó hace menos de 24 horas
  const cachedData = localStorage.getItem('ruteroCacheOrden');
  console.log(cachedData);
  const cachedTimestamp = localStorage.getItem('ruteroCacheOrdenTimestamp');

  if (cachedData && cachedTimestamp) {
    const timestamp = parseInt(cachedTimestamp);
    const currentTime = new Date().getTime();
    if (currentTime - timestamp < this.cacheDuration) {
      // Utilizar los datos en caché
        this.items = JSON.parse(cachedData);          
        this.filterItemsByDay(dia);
        this.filterItemsByUpdate();   
        this.sinresult = this.items.length === 0;

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
    this.sinresult = this.items.length === 0;

    // Actualizar la caché con los nuevos datos y la marca de tiempo actual
    localStorage.setItem('ruteroCacheOrden', JSON.stringify(res));
    localStorage.setItem('ruteroCacheOrdenTimestamp', new Date().getTime().toString());

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

  
  reorderItems(ev: any) {
    const itemToMove = this.items[ev.detail.from];
    this.items.splice(ev.detail.from, 1);
    this.items.splice(ev.detail.to, 0, itemToMove);
    console.log(this.items);
    ev.detail.complete();  
    
  }
  async saveChanges() {

  await this.presentLoading();  
  const updatedItems: any[] = [];

  try {
    // Crear una copia de this.items
    
    let counter = 3;
    await this.items.forEach(async (item: any, i: any) => {
      const updatedItem = {
        ...item,
        OrdenDia: counter, // Actualiza la propiedad OrdenDia con la nueva posición
        update: 'si'
      };
      counter += 3;
      updatedItems.push(updatedItem);
      
    });

    localStorage.setItem('ruteroCacheOrden', JSON.stringify(updatedItems));
    this.ruteroService.update(updatedItems);
    console.log('Datos actualizados en Firebase');
  } catch (error) {
    console.error('Error al actualizar datos en Firebase', error);
  } finally {
    this.router.navigate(['/rutero']);
    await this.dismissLoading();
  }
}
    ngOnDestroy() {
      if (this.ruteroSubscription) {
        this.ruteroSubscription.unsubscribe();
      }
    }



}


 


