import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css']
})
export class ShowPasswordComponent implements OnInit {

  showPasswordFlag = true;
  showPasswordClass = 'show';
  password = 'Password = tuna';
  logs = [];
  logCount = 0;
  logClass;


  constructor() { }

  ngOnInit() {
  }

  showPassword() {
    this.showPasswordFlag = !this.showPasswordFlag;
    this.showPasswordClass = this.showPasswordFlag === true ? 'show' :  'hide';
    this.addlog();
  }

  addlog() {
    this.logCount++;   
    let state = this.showPasswordFlag === true ? 'shown' :  'hidden';
    let log = {
      logNum : this.logCount,
      log : `Log: ${this.logCount} => ${state} at ${new Date()}`,
    }
    this.logs.push(log);    
  }

  getClass(logNum) {
    return logNum >= 5 ? 'blue' : '';
  }
  getColor(logNum) {
    return logNum >= 5 ? 'blue' : '';
  }

}
