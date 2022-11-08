import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users!: User[];
  data!: Observable<any>;

  constructor() { 

    this.users = [
      {
          firstName: 'Kavya',
          lastName: 'Sampath',
          email: 'kavya612001@gmail.com',
          registered: new Date('01/06/2001'),
          hide: true
       },
       {
        firstName: 'Rajesh',
        lastName: 'Dayalan',
        email: 'rd@gmail.com',
        isActive: true,
        registered: new Date('01/27/1996'),
        hide: true
     },
     {
      firstName: 'Premalatha',
      lastName: 'Chandran',
      email: 'premalatha@gmail.com',
      registered: new Date('06/12/2001 09:36:00'),
      hide: true
   }
    ];

  }

  getUsers(): Observable<User[]> {
    return of(this.users); // returns as an observable
  }

  addUser(user: User) {
    this.users.unshift(user); //adds to the begining of the array
  }

  // getData() {
  //   this.data = new Observable(observer => {
  //     setTimeout(() => {
  //       observer.next(1);
  //     },1000)

  //     setTimeout(() => {
  //       observer.next(2);
  //     },2000)

  //     setTimeout(() => {
  //       observer.next(3);
  //     },3000)

  //     setTimeout(() => {
  //       observer.next({name: 'Rajesh'});
  //     },4000)
  //   });

  //   return this.data;
  // }
}
