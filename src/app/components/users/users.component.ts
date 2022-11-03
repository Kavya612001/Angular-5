import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user : User = {
    firstName: '',
    lastName: '',
    age: undefined,
    address: {
      street: '',
      city: '',
      state: ''
    } || undefined

  };
  users!: User[];
  loaded: boolean = true;
  showExtended: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = false;


  constructor() { }

  ngOnInit(): void {
      this.users = [
        {
            firstName: 'Kavya',
            lastName: 'Sampath',
            age: 30,
            address: {
                street: '3/2 main street',
                city: 'vnr',
                state: 'TN'
            },
            registered: new Date('01/06/2001'),
            hide: false
         },
         {
          firstName: 'Rajesh',
          lastName: 'Dayalan',
          age: 26,
          address: {
              street: '3/4 rose street',
              city: 'Chennai',
              state: 'TN'
          },
          isActive: true,
          registered: new Date('01/27/1996'),
          hide: false
       },
       {
        firstName: 'Premalatha',
        lastName: 'Chandran',
        age: 50,
        address: {
            street: '3/1 cross street',
            city: 'vnr',
            state: 'TN'
        },
        registered: new Date('06/12/2001 09:36:00'),
        hide: false
     }
      ];
      this.loaded = true;
  
    this.addUser({
      firstName: 'Subbu',
      lastName: 'Chandran',
      // age: 80,
      address: {
          street: '3/1 cross street',
          city: 'vnr',
          state: 'TN'
      }
    })
  }
  addUser(user:User) {
    this.users.push(user);
  }

  onSubmit(e: Event) {
    e.preventDefault();
  }
}
