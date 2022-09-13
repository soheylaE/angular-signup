import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { user } from '../app-interface';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  users: user[] = [
    {
      name : 'ali',
      userName : 'aliahmadi',
      email : 'aliahmadi@gmail.com',
      phoneNumber : '09123456789',
      password : '12345678'
    },
    {
      name : 'mahdi',
      userName : 'mm',
      email : 'mm@gmail.com',
      phoneNumber : '09123456789',
      password : '87654321'
    },
  ];

  @Output() onAddUserClicked = new EventEmitter <user[]>();

  constructor() { }

  ngOnInit(): void {
  }

    
  public onAddUser (name: string, userName: string, email: string, phoneNumber: string, pasword:string, e: Event){
    e.preventDefault();
    let u: user = {
      name: name,
      userName: userName,
      email: email,
      phoneNumber: phoneNumber,
      password: pasword,
    };

    this.users.push(u);
    this.onAddUserClicked.emit(this.users)

  }

}
