import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';


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
    },
      {
    id: '4',
    title: 'Hulk',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png'
    },
      {
    id: '5',
    title: 'Thor',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8PEOhAlD9VC4Hyl6oZMaWsY9KkkCEV4DLQ&usqp=CAU'
    },
      {
    id: '6',
    title: 'Captain Marvel',
      imageUrl: 'https://genderit.org/sites/default/files/styles/large_feature/public/captainmarvel2.jpg?itok=k52yjKQ3'
    },
      {
    id: '7',
    title: 'Black Phanter',
      imageUrl: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/08/hipertextual-2020103397.jpg?fit=1200%2C676&quality=60&strip=all&ssl=1'
    },
      {
    id: '8',
    title: 'Scarlet Witch',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/97/Scarlet_Witch.jpg'
    },
       {
    id: '9',
    title: 'Spiderman',
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/marvelspidermanseries-emeagrid_45274dc0.jpeg?region=240,0,480,480'
    },
        {
    id: '10',
    title: 'Spiderman',
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/marvelspidermanseries-emeagrid_45274dc0.jpeg?region=240,0,480,480'
    },
         {
    id: '11',
    title: 'Spiderman',
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/marvelspidermanseries-emeagrid_45274dc0.jpeg?region=240,0,480,480'
    },
          {
    id: '12',
    title: 'Spiderman',
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/marvelspidermanseries-emeagrid_45274dc0.jpeg?region=240,0,480,480'
    },
           {
    id: '13',
    title: 'Spiderman',
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/marvelspidermanseries-emeagrid_45274dc0.jpeg?region=240,0,480,480'
    },
            {
    id: '14',
    title: 'Spiderman',
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/marvelspidermanseries-emeagrid_45274dc0.jpeg?region=240,0,480,480'
    },
             {
    id: '15',
    title: 'Spiderman',
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/marvelspidermanseries-emeagrid_45274dc0.jpeg?region=240,0,480,480'
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
