import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { schoolOutline } from 'ionicons/icons';
import { NavbarComponent } from '../../components/navbar/navbar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterLink,
    NavbarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Esto le dice a Angular que ignore si no reconoce los componentes <ion-...>
})
export class LoginPage implements OnInit {
  constructor() {
    addIcons({ schoolOutline });
  }

  ngOnInit() {}
}