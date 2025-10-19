import { Injectable } from '@angular/core';

// This is the data structure for a single project
export interface Project {
  title: string;
  description: string;
  tags: string[];
}

// THIS IS THE CRUCIAL PART THAT WAS LIKELY MISSING OR INCORRECT
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [
    {
      title: 'Animalia Project',
      description: 'Un videojuego 2D de supervivencia contra hordas inspirado en "Escuadrón Animalia". Cuenta con un ciclo de juego completo, oleadas de enemigos y un sistema de mejoras con cartas.',
      tags: ['Unity', 'C#', '2D Game Dev', 'Survival']
    },
    {
      title: 'Sprite Sheets para Videojuego 2D',
      description: 'Creación de hojas de sprites para enemigos, como un zombi alienígena, utilizando herramientas de pixel art y diseño digital.',
      tags: ['Unity', 'Pixel Art']
    },
    {
      title: 'Migración de un Sitio Estático a Angular',
      description: 'Actividad académica para convertir un sitio web simple (HTML, CSS, JS) en una Single Page Application (SPA) utilizando Angular, componentes y enrutamiento.',
      tags: ['Angular', 'Git']
    },
    {
      title: 'Configuración de Repositorio Colaborativo',
      description: 'Administración de un repositorio en GitHub para un proyecto en equipo, gestionando ramas de trabajo para cada colaborador y fusionando los cambios.',
      tags: ['Git', 'GitHub']
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }
}