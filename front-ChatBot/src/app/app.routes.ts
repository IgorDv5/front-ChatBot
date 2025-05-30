import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FaleConoscoComponent } from './components/fale-conosco/fale-conosco.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './components/usuario/usuario-edit/usuario-edit.component';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';

export const routes: Routes = [

      {
        path: 'faleconosco',
        component: FaleConoscoComponent
      },
      {
        path: 'sobrenos',
        component: SobreNosComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'usuario/create',
        component: UsuarioCreateComponent
      },
      {
        path: 'usuario/edit',
        component: UsuarioEditComponent
      },
      {
        path: 'usuario',
        component: UsuarioListComponent
      }
];