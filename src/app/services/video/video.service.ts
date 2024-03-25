import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc,  collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private firestore: Firestore) { }

  getdata():Observable<any>{
    const collectionInstant = collection(this.firestore, 'videos')
    return collectionData(collectionInstant)
  }
}
