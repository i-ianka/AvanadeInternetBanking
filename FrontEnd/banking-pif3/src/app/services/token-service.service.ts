import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(@Inject(SESSION_STORAGE) private _storage: StorageService) { }

  setToken(token) {
    this._storage.set(STORAGE_KEY, token);
  }

  getToken() {
    this._storage.get(STORAGE_KEY);
  }

  deleteToken() {
    if(!this._storage.get(STORAGE_KEY)) return false;

    this._storage.remove(STORAGE_KEY);
    return true;
  }

  showToken() {
    console.log('Token described in session storage: ', this._storage.get(STORAGE_KEY));
  }
}
