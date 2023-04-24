import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private role : string ="admin";

  constructor() { }

  login(): Observable<boolean>{
    return of(false).pipe(
      delay(3000));
  }

  getRole(){
    return this.role;
  }
}
