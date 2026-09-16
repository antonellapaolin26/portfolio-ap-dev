import { Component } from '@angular/core';

import { Project } from '../../models/project.model';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCard
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  selectedProject: Project | null = null;
  selectedGalleryImage: string | null = null;

  projects: Project[] = [
    {
      id: 1,
      name: 'Sistema de Veterinaria',
      status: 'Terminado',
      category: 'Sistema Web',

      image: 'images/projects/veterinaria.jpg',

      description:
        'Gestión de pacientes, turnos y consultas.',

      problem:
        'La información de la veterinaria se encontraba distribuida entre registros manuales y diferentes herramientas, dificultando la organización y el acceso rápido a los datos.',

      solution:
        'Se desarrolló un sistema web que centraliza la administración de clientes, mascotas, turnos, consultas, vacunaciones, productos, stock, ventas y reportes.',

      technologies: [
        'React',
        'Django',
        'PostgreSQL',
        'Bootstrap'
      ],

      features: [
        'Gestión de clientes',
        'Gestión de mascotas',
        'Agenda de turnos',
        'Consultas veterinarias',
        'Vacunaciones',
        'Control de stock',
        'Ventas',
        'Reportes',
        'Usuarios y permisos'
      ],

      icon: '🐾',

      gallery: [
        'images/projects/veterinaria-1.jpg',
        'images/projects/veterinaria-2.jpg',
        'images/projects/veterinaria-3.jpg'
      ]
    },


    {
      id: 2,
      name: 'CENTINELA',
      status: 'Idea / Prototipo',
      category: 'UX / UI · Aplicación',

      image: 'images/projects/centinela.jpg',

      description:
        'Propuesta de aplicación para seguridad ciudadana.',

      problem:
        'Los vecinos necesitan canales rápidos y simples para realizar reportes preventivos, recibir alertas y acceder a información municipal relevante.',

      solution:
        'Se diseñó un prototipo de aplicación que reúne reportes preventivos, alertas, avisos municipales y seguimiento de reportes dentro de una misma experiencia.',

      technologies: [
        'Figma',
        'UX/UI',
        'Prototipado'
      ],

      features: [
        'Reportes preventivos',
        'Alertas',
        'Avisos municipales',
        'Seguimiento de reportes',
        'Perfil del vecino',
        'Historial',
        'Prototipo interactivo'
      ],

      icon: '◈',

      gallery: [
        'images/projects/centinela-1.jpg',
        'images/projects/centinela-2.jpg',
        'images/projects/centinela-3.jpg'
      ]
    },


    {
      id: 3,
      name: 'ConsulGlobal AI',
      status: 'Terminado',
      category: 'Página Web · IA',

      image: 'images/projects/consulglobal.jpg',

      description:
        'Sitio web orientado a servicios y soluciones de IA.',

      problem:
        'Era necesario presentar servicios tecnológicos e inteligencia artificial mediante una presencia digital moderna, clara y profesional.',

      solution:
        'Se desarrolló un sitio web con estética tecnológica que presenta la propuesta, servicios, soluciones y canales de contacto de ConsulGlobal AI.',

      technologies: [
        'Web',
        'JavaScript',
        'Diseño UI'
      ],

      features: [
        'Página principal',
        'Servicios',
        'Soluciones',
        'Presentación empresarial',
        'Contacto',
        'Diseño responsive'
      ],

      icon: '◎',

      gallery: [
        'images/projects/consulglobal-1.jpg',
        'images/projects/consulglobal-2.jpg',
        'images/projects/consulglobal-3.jpg'
      ]
    },


    {
      id: 4,
      name: 'Instalación Eléctrica Jeep',
      status: 'Terminado',
      category: 'Web Interactiva',

      image: 'images/projects/jeep.jpg',

      description:
        'Diagramas, circuitos y guía técnica interactiva.',

      problem:
        'Una instalación eléctrica automotriz puede resultar difícil de comprender cuando existen múltiples circuitos, conexiones y componentes.',

      solution:
        'Se creó un sitio organizado por pasos que permite recorrer visualmente los diferentes componentes y conexiones de la instalación eléctrica.',

      technologies: [
        'Next.js',
        'React',
        'CSS'
      ],

      features: [
        'Explicación paso a paso',
        'Componentes eléctricos',
        'Distribución de masa',
        'Positivo principal',
        'Fusilera',
        'Circuitos',
        'Navegación interactiva'
      ],

      icon: '⚙',

      gallery: [
        'images/projects/jeep-1.jpg',
        'images/projects/jeep-2.jpg',
        'images/projects/jeep-3.jpg'
      ]
    },


    {
      id: 5,
      name: 'Zephyr',
      status: 'Terminado',
      category: 'Página Web',

      image: 'images/projects/zephyr.jpg',

      description:
        'Página web moderna con identidad visual tecnológica.',

      problem:
        'El proyecto necesitaba una presencia digital moderna capaz de comunicar su identidad de manera clara y visualmente atractiva.',

      solution:
        'Se desarrolló una página web enfocada en una experiencia visual moderna, navegación clara e identidad digital consistente.',

      technologies: [
        'HTML',
        'CSS',
        'JavaScript'
      ],

      features: [
        'Inicio',
        'Servicios',
        'Sobre nosotros',
        'Contacto',
        'Diseño moderno',
        'Diseño responsive'
      ],

      icon: '≋',

      gallery: [
        'images/projects/zephyr-1.jpg',
        'images/projects/zephyr-2.jpg',
        'images/projects/zephyr-3.jpg'
      ]
    }
  ];


  openProject(project: Project) {

    this.selectedProject = project;

    setTimeout(() => {

      document
        .getElementById('project-detail')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });

    }, 50);

  }


  closeProject() {

    this.selectedProject = null;

    this.selectedGalleryImage = null;

  }


  openImage(image: string) {

    this.selectedGalleryImage = image;

  }


  closeImage() {

    this.selectedGalleryImage = null;

  }

}