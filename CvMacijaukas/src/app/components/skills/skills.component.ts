import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  isExpand = false;
  isHidden = true;
  //Funcion para poder expandir experiencia
  onExpand() {
    this.isExpand = !this.isExpand;

  }
}
