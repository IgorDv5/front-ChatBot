import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Importando a nova configuração
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Detecção de mudanças
    provideRouter(routes), // Configuração das rotas
    provideHttpClient(withInterceptorsFromDi()) // Usando o novo método para fornecer o HttpClient
  ]
};
