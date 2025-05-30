import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/auth.service'; 

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatSlideToggleModule, FormsModule],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.css',
})
export class UsuarioListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'status', 'onof', 'acoes'];
  dataSource: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.getUsers(token).subscribe(
        (users) => {
          this.dataSource = users;
        },
        (error) => {
          console.error('Erro ao buscar usuários:', error);
        }
      );
    }
  }

  onStatusChange(element: any): void {
    console.log(`${element.name} está ${element.status ? 'Ativo' : 'Desativado'}`);
    
  }

  toggleOnOff(element: any): void {
    element.onof = !element.onof;
    console.log(`${element.name} está ${element.onof ? 'Online' : 'Offline'}`);
    
  }
}
