import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-view-app',
  templateUrl: './view-app.component.html',
  styleUrls: ['./view-app.component.css']
})
export class ViewAppComponent implements OnInit {

  constructor(private customer : CustomerService) { }

  list_cus:any=[];

  ngOnInit(): void {

    this.list_cus=this.customer.get();

  }

  

}
