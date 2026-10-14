import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline, notificationsOutline, alertCircleOutline, informationCircleOutline, checkmarkCircleOutline } from 'ionicons/icons';
import { NavbarComponent } from '../../components/navbar/navbar.component';


@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.page.html',
  styleUrls: ['./avisos.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvisosPage implements OnInit {
  segmento: string = 'oportunidades';

  constructor() {
    addIcons({ arrowBackOutline, notificationsOutline, alertCircleOutline, informationCircleOutline, checkmarkCircleOutline });
  }

  ngOnInit() {}
}