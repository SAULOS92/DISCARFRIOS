import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { switchMap, take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RuteroOrdenService {
  private itemsCollection: AngularFirestoreCollection;

  constructor(private bd: AngularFirestore) {
    this.itemsCollection = bd.collection('Rutero_Orden');
   }
   create(item: any) {
    return this.itemsCollection.doc(item.codigo).set(item);
  }

  cargaMasiva(data: any) {
    const batchSize = 500; // Tamaño del lote
    const batches = [];
  
    // Dividir los datos en lotes
    for (let i = 0; i < data.length; i += batchSize) {
      batches.push(data.slice(i, i + batchSize));
    }
  
    // Procesar cada lote
    const promises = batches.map(batch => {
      return new Promise((resolve, reject) => {
        const batchFirestore = this.bd.firestore.batch();
        batch.forEach((item: any) => {
          batchFirestore.set(this.itemsCollection.doc().ref, item);
        });
        batchFirestore.commit()
          .then(() => {
            resolve('Carga masiva completada');
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  
    // Combinar las promesas en una sola promesa
    return Promise.all(promises);
  }
  

  getRutero(asesor: any) {
    return this.bd.collection('Rutero_Orden', ref => ref.where('VD', '==', asesor)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data();
          const id = action.payload.doc.id;
          return { id, ...(data as object) }; // Asegúrate de realizar una conversión a objeto aquí
        });
      })
    );
  }

  eliminarDocumentos(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.itemsCollection.snapshotChanges().pipe(
        take(1),
        switchMap(actions => {
          // Divide las acciones en lotes de 500
          const chunks = this.chunkArray(actions, 500);
          const deletePromises:any = [];
  
          // Procesa cada lote de acciones
          chunks.forEach(chunk => {
            const batch = this.bd.firestore.batch();
            chunk.forEach(action => {
              batch.delete(action.payload.doc.ref);
            });
            deletePromises.push(batch.commit());
          });
  
          // Retorna una promesa que se resuelve cuando todos los lotes han sido procesados
          return Promise.all(deletePromises);
        })
      ).toPromise()
        .then(() => {
          resolve(); // Se resuelve la promesa principal
        })
        .catch(error => {
          reject(error); // Se rechaza la promesa principal si hay un error
        });
    });
  }
  
  private chunkArray(array: any[], size: number): any[][] {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }

  update(items: any[]) {
    const batch = this.bd.firestore.batch();
  
    items.forEach((item) => {
      const docRef = this.itemsCollection.doc(item.id).ref;
      batch.update(docRef, item);
    });
  
    return batch.commit();
  }

  getRuteroCompleto() {
    return this.itemsCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((change) => {
          const data = change.payload.doc.data();
          return data;
        });
      })
    );
  }
  

}
