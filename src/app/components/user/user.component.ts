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
            age: 30,
            address: {
                street: '3/2 main street',
                city: 'vnr',
                state: 'TN'
            }
           }
    }
}

