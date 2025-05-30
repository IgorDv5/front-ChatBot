import { Component,ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export interface PeriodicElement {
  name: string;
  status: boolean;
  onof: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Lucas Sousa', status: false, onof: false },
  { name: 'Roberto Torres', status: true, onof: false },
  { name: 'Linus Tovalds', status: false, onof: true },
  { name: 'Thomas Forles', status: true, onof: true },
  { name: 'Boron Sharp', status: false, onof: false },
];

@Component({
  selector: 'app-usuario-list',
  imports: [CommonModule,RouterModule,MatTableModule,MatSlideToggleModule,FormsModule],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.css'
})
export class UsuarioListComponent {
  displayedColumns: string[] = ['name', 'status', 'onof', 'acoes'];
  dataSource = ELEMENT_DATA;

   onStatusChange(element: PeriodicElement) {
    console.log(`${element.name} está ${element.status ? 'Ativo' : 'Desativado'}`);

   }

    toggleOnOff(element: PeriodicElement) {
    element.onof = !element.onof;
    console.log(`${element.name} está ${element.onof ? 'Online' : 'Offline'}`);
  }
}
