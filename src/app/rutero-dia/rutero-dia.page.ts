import { Component, OnInit } from '@angular/core';
import { CargaRuteroService } from "../servicios/firebase/carga-rutero.service";
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-rutero-dia',
  templateUrl: './rutero-dia.page.html',
  styleUrls: ['./rutero-dia.page.scss'],
})
export class RuteroDiaPage implements OnInit {
  items: any;
  sinresult=false;
  constructor(public ruteroService: CargaRuteroService, private route: ActivatedRoute, private loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    const dia = this.route.snapshot.paramMap.get('dia');
    const number = localStorage.getItem('number');
    this.ruteroService.getRutero(number).subscribe((res) => {
      console.log(res);
      this.items = res.filter((item: any) => item.Dias === dia && !item.update)
        .sort((a: any, b: any) => parseInt(a['OrdenDia']) - parseInt(b['OrdenDia']));
      console.log(this.items);
      this.sinresult = this.items.length === 0;
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



}
