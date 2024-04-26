import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  optionSelected: string = 'home';

  menuOptions: any[] = [
    { value: 'home', label: 'Inicio' },
    { value: 'tour', label: 'Recorrido' },
    { value: 'location', label: 'Ubicación' },
  ];

  constructor() { }
}
