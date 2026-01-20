import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth, { optional: true });
  private provider = new GoogleAuthProvider();

  async authenticate() {
    if (!this.auth) {
      console.warn('Firebase Auth not initialized');
      return;
    }
    
    try {
      const result = await signInWithPopup(this.auth, this.provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      const uid = user.uid;
      return { user, token, uid };
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error('Auth error:', errorCode, errorMessage);
      throw error;
    }
  }
}
