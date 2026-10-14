import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, arrowBackOutline, documentTextOutline } from 'ionicons/icons';
import { NavbarComponent } from '../../components/navbar/navbar.component';


@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.page.html',
  styleUrls: ['./inscripcion.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InscripcionPage implements OnInit {
  // Variable para simular la materia seleccionada
  materiaSeleccionada: string = '';

  constructor() {
    addIcons({ checkmarkCircleOutline, arrowBackOutline, documentTextOutline });
  }

  ngOnInit() {}

  confirmarInscripcion() {
    if (!this.materiaSeleccionada) {
      alert('Por favor selecciona una materia.');
      return;
    }
    alert(`¡Inscripción confirmada para: ${this.materiaSeleccionada}!`);
    this.materiaSeleccionada = '';
  }
}