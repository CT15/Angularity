import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  users: User[];

  constructor() { }

  ngOnInit() {  // lifecycle hook
    this.user = {
      name: null,
      age: null,
      email: null,
      address: null
    }
    this.users = [];
  }

  createUser() {
    const name = this.user.name;
    const age = this.user.age;
    const email = this.user.email;
    const address = this.user.address;

    if(!name || !age || !email || !address) {
      return false;
    }
    
    this.users.push({
      name: name,
      age: age,
      email: email,
      address: address
    })

    this.user = {
      name: null,
      age: null,
      email: null,
      address: null
    }
  }

  deleteUser(toDelete) {
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[i] === toDelete) this.users.splice(i, 1);
    }
  }
}

interface User {
  name: string;
  age: number;
  email: string;
  address: string;
}
