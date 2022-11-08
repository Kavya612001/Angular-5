import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
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
  @ViewChild('userForm') form: any;
  data:any;

  // Injecting the service inside the constructor 
  // We can now access the serice props and methods inside this component
  constructor(private userService: UserService) { 

  }

  ngOnInit(): void {
    // this.dataService.getData().subscribe(data => {
    //   console.log(data);
    // });
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
  }
 
  onSubmit(object: NgForm) {
    if(!object.valid) {
      console.log('form is not valid');
    }
    else {
      object.value.isActive = true;
      object.value.registered = new Date();
      object.value.hide = true;

      this.userService.addUser(object.value);

      this.form.reset();
    }
  }
}
