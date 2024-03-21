import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  isExpand = false;
  //Funcion para poder expandir educacion
  onExpand() {
    this.isExpand = !this.isExpand;
  }
}
