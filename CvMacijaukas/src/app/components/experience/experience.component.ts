import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  isExpand = false;
  isHidden = true;
  //Funcion para poder expandir experiencia
  onExpand() {
    this.isExpand =! this.isExpand; 

  }
}
