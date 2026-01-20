import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionSnapshots } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private firestore = inject(Firestore);

  async addUser() {
    const now = Date.now();
    const data = {
      email: 'test',
      firstname: 'test',
      lastname: String(now)
    };
    try {
      const usersCollection = collection(this.firestore, 'users');
      const docRef = await addDoc(usersCollection, data);
      return docRef;
    } catch (err) {
      throw err;
    }
  }

  getUsers() {
    const usersCollection = collection(this.firestore, 'users');
    return collectionSnapshots(usersCollection);
  }
}
