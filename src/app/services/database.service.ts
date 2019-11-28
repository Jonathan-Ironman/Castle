import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  addUser() {
    const data = {
      email: 'test',
      firsname: 'test',
      lastname: `${Date.now()}`
    };
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('users')
        .add(data)
        .then(
          res => {},
          err => reject(err)
        );
    });
  }

  constructor(private firestore: AngularFirestore) {}
}
