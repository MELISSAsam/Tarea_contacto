import { Component } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-verde',
  templateUrl: './verde.page.html',
  styleUrls: ['./verde.page.css'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButton, RouterLink]
})
export class VerdePage {}
