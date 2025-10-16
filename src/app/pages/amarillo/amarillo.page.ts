import { Component } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-amarillo',
  templateUrl: './amarillo.page.html',
  styleUrls: ['./amarillo.page.css'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButton, RouterLink],
})
export class AmarilloPage {}
