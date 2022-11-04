import { Component , OnInit} from "@angular/core";

import { User } from "src/app/models/User";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

// To make the clas accessible outside
export class UserComponent implements OnInit{
    // properties 
    user!: User;

    // methods
    constructor() {
       
    }

    ngOnInit(): void {
        this.user = {
            firstName: 'Kavya',
            lastName: 'Sampath',
            email: 'kavya612001@gmail.com'
           }
    }
}

