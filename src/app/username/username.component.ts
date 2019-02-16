import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  // resetUserName = false;
  userName = '';

  constructor() { }

  ngOnInit() {
  }


  onUpdateUserName(event) {
    console.log(event);
    this.userName = event.target.value;
    console.log(event.target.value);
    // if (this.userName.trim() !== '') {
    //   this.resetUserName = true;
    // } else{
    //   this.resetUserName = false;
    // }
  }

  onResetUserName(event) {
    this.userName = '';
    // this.resetUserName = false;
  }

}
