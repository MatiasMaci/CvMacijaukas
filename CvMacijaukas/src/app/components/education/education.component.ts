import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent{

  isExpand = false;
  isHidden = true;
  //Funcion para poder expandir educacion
  onExpand() {
    this.isExpand = true;
    this.isHidden =! this.isExpand;
  }

  //Funcion para poder ocultar educacion
  onHidden() {
    this.isExpand = false;
    this.isHidden =! this.isExpand;
  }
}
