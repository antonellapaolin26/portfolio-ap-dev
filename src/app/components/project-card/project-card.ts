import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {

  @Input() project!: Project;

  @Output() openProject = new EventEmitter<Project>();

  viewProject() {
    this.openProject.emit(this.project);
  }

}