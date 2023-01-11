import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';

interface Componente{
  icon: string,
  name: string,
 redirectTo: string
}

interface Superhero{
  id: string,
  title: string,
 imageUrl: string
}




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  superheros: Superhero[] = [
    {
    id: '1',
    title: 'Spiderman',
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/marvelspidermanseries-emeagrid_45274dc0.jpeg?region=240,0,480,480'
    },
     {
    id: '2',
    title: 'Dr.Strange',
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/dr_strange_2016_002_bcd5d6a3.jpeg?region=0,26,638,358'
    },
      {
    id: '3',
    title: 'Iron-Man',
      imageUrl: 'https://w7.pngwing.com/pngs/946/841/png-transparent-ironman-helmet-ironman-icon-thumbnail.png'
    }

  ]

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
   
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirectTo:'/alert'
    }
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
