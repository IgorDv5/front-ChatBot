import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth/auth.service'; // ou UserService

@Component({
  selector: 'app-usuario-edit',
    standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './usuario-edit.component.html',
  styleUrl: './usuario-edit.component.css'
})
export class UsuarioEditComponent {

 userForm!: FormGroup;
  userId!: number;
  token = localStorage.getItem('token'); // ou como você salva

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      telefone: [''],
      password: [''],
      setor: ['']
    });

    this.loadUser();
  }

  loadUser(): void {
    if (!this.token) return;
    this.authService.getUserById(this.userId, this.token).subscribe(user => {
      this.userForm.patchValue({
        name: user.name,
        email: user.email,
        telefone: user.telefone,
        setor: user.setor
        // senha deixamos vazia por segurança
      });
    });
  }

  onSubmit(): void {
    if (!this.token) return;
    this.authService.updateUser(this.userId, this.userForm.value, this.token).subscribe(() => {
      alert('Usuário alterado com sucesso!');
      this.router.navigate(['/usuarios']);
    });
  }

}
