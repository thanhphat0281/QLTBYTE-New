import { Component, OnInit } from '@angular/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //template: ``,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  public data: string[] = ['Admin', 'User1', 'User2', 'User3', 'User4'];
  ngOnInit(): void {
  }

}
