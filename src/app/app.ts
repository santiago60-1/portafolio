import { Component, signal } from '@angular/core';
import { MenuNavegacion } from './componentes/menu-navegacion/menu-navegacion';
import { Contacto } from './contacto/contacto';
import { Inicio } from './inicio/inicio';
import { Proyectos } from './proyectos/proyectos';

@Component({
  selector: 'app-root',
  imports: [MenuNavegacion, Inicio, Proyectos, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portafolio');
}
