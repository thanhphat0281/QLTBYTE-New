import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  constructor() { }
  public data: string[] = ['Sữa chữa', 'Bảo hành', 'Bảo dưỡng'];
  ngOnInit(): void {
  }

}
