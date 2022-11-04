import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    email: ''
  };
  users!: User[];
  loaded: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm' , {static: false}) form: any;


  constructor() { }

  ngOnInit(): void {
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
      this.loaded = true;
  }
 
  onSubmit(object: NgForm) {
    if(!object.valid) {
      console.log('form is not valid');
    }
    else {
      object.value.isActive = true;
      object.value.registered = new Date();
      object.value.hide = true;

      this.users.unshift(object.value);

      this.form.reset();
    }
  }
}
