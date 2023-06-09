import { Component, OnInit } from '@angular/core';
import { Sheet } from './../../../node_modules/xlsx/types/index.d';
import * as XLSX from 'xlsx';
import { CargaRuteroService } from "../servicios/firebase/carga-rutero.service";
import { RuteroOrdenService } from "../servicios/firebase/rutero-orden.service";
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-bulk-load',
  templateUrl: './bulk-load.page.html',
  styleUrls: ['./bulk-load.page.scss'],
})
export class BulkLoadPage implements OnInit {
  mensaje: string = '';
  constructor(public ruteroService: CargaRuteroService, public ruteroOrdenService: RuteroOrdenService, private toast: ToastController, private loadingCtrl: LoadingController) { }
  convertedJson!: String;
  ngOnInit() {
    
  }
  fileUpload(event: any) {
    const fileReader = new FileReader();
    const target = event.target;
    if (target !== null && target.files.length > 0) {
      fileReader.readAsBinaryString(target.files[0]);
      fileReader.onload = (event) => {
        const result = event.target?.result;
        if (result) {
          const workbook = XLSX.read(result, { type: 'binary' });
          workbook.SheetNames.forEach((sheet) => {
            const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
            this.cargarDocumentos(data);
            this.convertedJson = JSON.stringify(data, undefined, 4);
          });
        }
      };
    }
    
  }

  async eliminarDocumentos() {
    const loading = await this.loadingCtrl.create({
      message: 'Eliminando datos...'
    });
    loading.present();
    this.ruteroService.eliminarDocumentos()
      .then(() => {
        loading.dismiss();
        this.presentToast('Documentos eliminados exitosamente');
      })
      .catch((error) => {
        loading.dismiss();
        this.presentToast('Error al eliminar documentos:' + error);
      });
  }

  async cargarDocumentos(data: any) {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando datos...'
    });
    loading.present();
    this.ruteroService.cargaMasiva(data).then(() => {
      loading.dismiss();
      this.presentToast('Documentos cargados exitosamente:');
    }).catch((error) => {
      loading.dismiss();
      this.presentToast('Error al cargar documentos:' + error);
    });
  }

  async presentToast(message1: any) {
    const toast = await this.toast.create({
      message: message1,
      duration: 8000
    });
    toast.present();
  }

  exportExcel() {
    this.ruteroService.getRuteroCompleto().subscribe((res) => {
      console.log(res);
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(res);
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveExcelFile(excelBuffer, 'rutero.xlsx');
    });
  }
  
  saveExcelFile(buffer: any, filename: string) {
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    FileSaver.saveAs(blob, filename);
  }


  fileOrdenUpload(event: any) {
    const fileReader = new FileReader();
    const target = event.target;
    if (target !== null && target.files.length > 0) {
      fileReader.readAsBinaryString(target.files[0]);
      fileReader.onload = (event) => {
        const result = event.target?.result;
        if (result) {
          const workbook = XLSX.read(result, { type: 'binary' });
          workbook.SheetNames.forEach((sheet) => {
            const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
            this.cargarRuteroOrden(data);
            this.convertedJson = JSON.stringify(data, undefined, 4);
          });
        }
      };
    }
    
  }

  async eliminarRuteroOrden() {
    const loading = await this.loadingCtrl.create({
      message: 'Eliminando datos...'
    });
    loading.present();
    this.ruteroOrdenService.eliminarDocumentos()
      .then(() => {
        loading.dismiss();
        this.presentToast('Documentos eliminados exitosamente');
      })
      .catch((error) => {
        loading.dismiss();
        this.presentToast('Error al eliminar documentos:' + error);
      });
  }

  async cargarRuteroOrden(data: any) {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando datos...'
    });
    loading.present();
    this.ruteroOrdenService.cargaMasiva(data).then(() => {
      loading.dismiss();
      this.presentToast('Documentos cargados exitosamente:');
    }).catch((error) => {
      loading.dismiss();
      this.presentToast('Error al cargar documentos:' + error);
    });
  }

  exportExcelOrden() {
    this.ruteroOrdenService.getRuteroCompleto().subscribe((res) => {
      console.log(res);
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(res);
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveExcelFileOrden(excelBuffer, 'rutero.xlsx');
    });
  }
  
  saveExcelFileOrden(buffer: any, filename: string) {
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    FileSaver.saveAs(blob, filename);
  }

  

  
  



}
