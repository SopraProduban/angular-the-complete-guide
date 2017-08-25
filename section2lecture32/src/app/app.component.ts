import { Component } from '@angular/core';

import {CardComponent} from './card/card.component'
import {CardComponentModel} from './card-component-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  cardModels: Array< CardComponentModel > ;


  constructor() {

    this.initiateCards();
  }


  initiateCards() {

    this.cardModels = [

      new CardComponentModel( 'Usuarios', 'assets/img/users-icon.png' ),

      new CardComponentModel( 'Entornos', 'assets/img/workspaces-icon.png' ),

      new CardComponentModel( 'Listas de Distribución', 'assets/img/distribution-list-icon.png' )

/*
      new CardComponentModel( 'Campañas' ),

      new CardComponentModel( 'Track de Mensajes' ),

      new CardComponentModel( 'Log de Mensajes' )
*/
    ];
  }


}
