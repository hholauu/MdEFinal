import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { notificationsOutline, settingsOutline, calendarOutline, timeOutline, locationOutline } from 'ionicons/icons';
import { NavbarComponent } from '../../components/navbar/navbar.component';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioPage implements OnInit {
  constructor() {
    addIcons({ notificationsOutline, settingsOutline, calendarOutline, timeOutline, locationOutline });
  }

  ngOnInit() {}
}