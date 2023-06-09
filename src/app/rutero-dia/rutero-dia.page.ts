import { Component, OnInit } from '@angular/core';
import { CargaRuteroService } from "../servicios/firebase/carga-rutero.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rutero-dia',
  templateUrl: './rutero-dia.page.html',
  styleUrls: ['./rutero-dia.page.scss'],
})
export class RuteroDiaPage implements OnInit {
  items: any;
  sinresult=false;
  constructor(public ruteroService: CargaRuteroService, private route: ActivatedRoute) { }

  ngOnInit() {
    const dia = this.route.snapshot.paramMap.get('dia');
    const number = localStorage.getItem('number');
    this.ruteroService.getRutero(number).subscribe((res) => {
      console.log(res);
      this.items = res.filter((item: any) => item.Dias === dia && !item.update)
        .sort((a: any, b: any) => parseInt(a['Orden Dia']) - parseInt(b['Orden Dia']));
      console.log(this.items);
      this.sinresult = this.items.length === 0;
    });
  }

}
