import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-place-app',
  templateUrl: './place-app.component.html',
  styleUrls: ['./place-app.component.css']
})
export class PlaceAppComponent implements OnInit {

  constructor(private customer : CustomerService) { }

  form:any={
    name:'',
    email:'',
    age:'',
    phoneNo:'',
    addressLine1:'',
    addressLine2:'',
    city:'',
    state:'',
    country:'',
    pincode:'',
    trainPref:'',
    physio:'',
    package:'',
    weeks:'',
    amount:'',
  }

  ngOnInit(): void {
  }

  amount=0;

  calc=false;
  charges=0;
  ch_py=0;
  calculate(){
    //logic to calculte the amount
    
    console.log("hello im calculatorl"+this.form.value) 
    if(this.form.physio=="Yes")
    {
      this.ch_py=200;
    }

    if(this.form.package=="500")
    {
      this.charges=500
      this.form.week=1
      
    }

    if(this.form.package=="400")
    {
      this.charges=400
    }

    if(this.form.package=="300")
    {
      this.charges=300
      
    }

    console.log(this.amount);
    this.amount=this.charges*this.form.weeks+this.ch_py
    this.calc=!this.calc
  }

  addMe(event:any)
  {
    this.customer.add(this.form);
    console.log(this.customer.list_c);
    
  }

}
