import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonTextarea
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonImg,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonTextarea
  ],
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  constructor() {}
  ngOnInit() {}
}
