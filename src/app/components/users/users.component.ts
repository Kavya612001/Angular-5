import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: User[];
  loaded: boolean = true;
  showExtended: boolean = true;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {}

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
            image: 'http://lorempixel.com/600/600/people/3',
            balance: 200,
            registered: new Date('01/06/2001')
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
          image: 'http://lorempixel.com/600/600/people/2',
          isActive: true,
          balance: 300,
          registered: new Date('01/27/1996')
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
        image: 'http://lorempixel.com/600/600/people/4',
        balance: 500,
        registered: new Date('06/12/2001 09:36:00')
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

    this.setCurrentClasses();
    this.setCurrentStyles();
  }
  addUser(user:User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success' : this.enableAdd,
      'big-text' : this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '': '40px'
    }
  }
}
