import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name:string;
  speed:number;
  model:string;
  colors:Colors;
  options:string[];
  isEdit:boolean = false;

  constructor() { }
showEdit(){
  this.isEdit = !this.isEdit;
}
  ngOnInit() {
    this.name = 'Audi';
    this.speed = 190;
    this.model = 'RS8';
    this.colors = {
      car: 'White',
      salon:'Black',
      wheels:'Silver'
    }
    this.options = ["ABS", "Autopilot","Autoparking"];

  }
  addOpt(option){
    this.options.unshift(option);
    return false;
  }
  deleteOpt(option){
    for (let i = 0; i < this.options.length; i++){
      if(this.options[i] == option)
      this.options.splice(i, 1);
      break;
    }
  }

  carSelect(carName){
    if(carName == 'bmw'){
    this.name = 'BMW';
    this.speed = 220;
    this.model = 'B6';
    this.colors = {
      car: 'White',
      salon:'Black',
      wheels:'Silver'
    };
    this.options = ["ABS", "AutoWindows","AutoVideo"];
  } else if (carName == 'audi') {
    this.name = 'Audi';
    this.speed = 190;
    this.model = 'RS8';
    this.colors = {
      car: 'Red',
      salon:'Aquamarine',
      wheels:'Black'
    };
    this.options = ["ABS", "Autopilot","Autoparking"];
}else{
  this.name = 'Mercedes';
  this.speed = 140;
  this.model = 'Benz';
  this.colors = {
    car: 'Green',
    salon:'Yellow',
    wheels:'Brown'
  };
  this.options = ["ABS", "Music","EnergySaver"];

}
}
}

interface Colors {
    car:string,
    salon:string,
    wheels:string
  }
