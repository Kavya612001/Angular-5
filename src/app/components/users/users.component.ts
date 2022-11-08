import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
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
  constructor(private dataService: DataService) { 

  }

  ngOnInit(): void {
    // this.dataService.getData().subscribe(data => {
    //   console.log(data);
    // });
    this.dataService.getUsers().subscribe(users => {
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

      this.dataService.addUser(object.value);

      this.form.reset();
    }
  }
}
