import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterModule, RouterLink],
  templateUrl: './contacto.page.html',

  styleUrls: ['./contacto.page.scss'],
})
export class contactoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}