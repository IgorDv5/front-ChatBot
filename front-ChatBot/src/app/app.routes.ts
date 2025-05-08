import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FaleConoscoComponent } from './components/fale-conosco/fale-conosco.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';

export const routes: Routes = [

      {
        path: 'faleconosco',
        component: FaleConoscoComponent
      },
      {
        path: 'sobrenos',
        component: SobreNosComponent
      }
];
