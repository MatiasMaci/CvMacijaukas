import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
  isExpand = false;
  isHidden = true;
  //Funcion para poder expandir experiencia
  onExpand() {
    this.isExpand = !this.isExpand;

  }
}
