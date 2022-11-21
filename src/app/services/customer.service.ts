import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  list_c:any=[];

  add(l:any){
    this.list_c.push(l);
  }

  get(){
    return this.list_c;
  }

  submit(){

  }

}
