import { Component, OnInit } from '@angular/core';
import { BookService } from '../books/services/book.service';
import { ReservationsService } from '../services/reservations.service';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading = false;
  hide = true;
  public selectedIndex = 0;
  departmentList: Array<any> = [
    {
      departamento: 'San Salvador',
      municipios: [
        'San Salvador',
        'Aguilares',
        'Apopa',
        'Ayutuxtepeque',
        'Ciudad Delgado',
        'Cuscatancingo',
        'El Paisnal',
        'Guazapa',
        'Ilopango',
        'Mejicanos',
        'Nejapa',
        'Panchimalco',
        'Rosario de Mora',
        'San Marcos',
        'San Martin',
        'Santiago Texacuangos',
        'Santo Tomás',
        'Soyapango',
        'Tonacatepeque'
      ]
    },
    {
      departamento: 'Ahuachapán',
      municipios: [
        'Ahuachapán',
        'Apaneca',
        'Atiquizaya',
        'Concepción de Ataco',
        'El Refugio',
        'Guaymango',
        'Jujutla',
        'San Francisco Menéndez',
        'San Lorenzo',
        'San Pedo Puxtla',
        'Tacuba',
        'Turín'
      ]
    },
    {
      departamento: 'Cabañas',
      municipios: [
        'Sensuntepeque',
        'Cinquera',
        'Dolores',
        'Guacotecti',
        'Ilobasco',
        'Jutiapa',
        'San Isidro',
        'Tejutepeque',
        'Victoria'
      ]
    },
    {
      departamento: 'Chalatenango',
      municipios: [
        'Chalatenango',
        'Agua Caliente',
        'Arcatao',
        'Azacualpa',
        'Citalá',
        'Comalapa',
        'Concepción Quzaltepeque',
        'Dulce Nombre de María',
        'El Carrizal',
        'El Paraiso',
        'La Laguna',
        'La Palma',
        'La Reina',
        'Las Vueltas',
        'Nombre de Jesús',
        'Nueva Concepción',
        'Nueva Trinidad',
        'Ojos de Agua',
        'Potonico',
        'San Antonio de la Cruz',
        'San Antonio Los Ranchos',
        'San Fernando',
        'San Francisco Lempa',
        'San Francisco Morazán',
        'San Ignacio',
        'San Isidro Labrador',
        'San José Cancasque',
        'San José Las Flores',
        'San Luis del Carmen',
        'San Miguel de Mercedes',
        'San Rafael',
        'Santa Rita',
        'Tejutla'
      ]
    },
    {
      departamento: 'La Paz',
      municipios: [
        'Zacatecoluca',
        'Cuyultitán',
        'El Rosario',
        'Jerusalén',
        'Mercedes La Ceiba',
        'Olocuilta',
        'Paraíso de Osorio',
        'San Antonio Masahuat',
        'San Emigdio',
        'San Francisco Chinameca',
        'San Juan Nonualco',
        'San Juan Talpa',
        'San Juan Tepezontes',
        'San Luis La Herradura',
        'San Luis Talpa',
        'San Miguel Tepezontes',
        'San Pedro Masahuat',
        'San Pedro Nonualco',
        'San Rafael Obrajuelo',
        'Santa María Ostuma',
        'Santiago Nonualco',
        'Tapalhuaca'
      ]
    },
    {
      departamento: 'Cuscatlán',
      municipios: [
        'Cojutepeque',
        'Candelaria',
        'El Carmen',
        'El Rosario',
        'Monte San Juan',
        'Oratorio de Concepción',
        'San Bartolomé Perulapía',
        'San Cristobal',
        'San José Guayabal',
        'San Pedro Perulapán',
        'San Rafael Cedros',
        'San Ramón',
        'Santa Cruz Analquito',
        'Santa Cruz Michapa',
        'Suchitoto',
        'Tenancingo'
      ]
    },
    {
      departamento: 'La Libertad',
      municipios: [
        'Santa Tecla',
        'Antiguo Cuscatlán',
        'Chiltiupán',
        'Ciudad Arce',
        'Colón',
        'Comasagua',
        'Huizúcar',
        'Jayaque',
        'Jicalapa',
        'Nuevo Cuscatlán',
        'Puerto de la Libertad',
        'Quezaltepeque',
        'Sacacoyo',
        'San José Villanueva',
        'San Juan Opico',
        'San Matías',
        'San Pablo Tacachico',
        'Talnique',
        'Tamanique',
        'Teotepeque',
        'Tepecoyo',
        'Zaragoza'
      ]
    },
    {
      departamento: 'La Unión',
      municipios: [
        'La Unión',
        'Anamorós',
        'Bolivar',
        'Concepción de Oriente',
        'Conchagua',
        'El Carmen',
        'El Sauce',
        'Intipucá',
        'Lislique',
        'Meanguera del Golfo',
        'Nueva Esparta',
        'Pasaquina',
        'Polorós',
        'San Alejo',
        'San José La Fuente',
        'Santa Rosa de Lima',
        'Yayantique',
        'Yucuaiquín'
      ]
    },
    {
      departamento: 'Morazán',
      municipios: [
        'San Francisco Gotera',
        'Arambala',
        'Cacaopera',
        'Chilanga',
        'Corinto',
        'Delicias de Concepción',
        'El Divisadero',
        'El Rosario',
        'Gualococti',
        'Guatajiagua',
        'Joateca',
        'Jocoatique',
        'Jocoro',
        'Lolotiquillo',
        'Meanguera',
        'Osicala',
        'Perquín',
        'San Carlos',
        'San Fernando',
        'San Isidro',
        'San Simón',
        'Sensembra',
        'Sociedad',
        'Torola',
        'Yamabal',
        'Yoloaiquín'
      ]
    },
    {
      departamento: 'San Miguel',
      municipios: [
        'San Miguel',
        'Carolina',
        'Chapeltique',
        'Chinameca',
        'Chirilagua',
        'Ciudad Barrios',
        'Comacarán',
        'El Tránsito',
        'Lolotique',
        'Moncagua',
        'Nueva Guadalupe',
        'Nuevo Edén de San Juan',
        'Quelepa',
        'San Antonio del Mosco',
        'San Gerardo',
        'San Jorge',
        'San Luis de La Reina',
        'San Rafael Oriente',
        'Sesori',
        'Uluazapa'
      ]
    }
  ];
  municipio: Array<any>;
  private fileArray: Array<File> = [];
  public images = [
    { id: 'image1', name: 'image1', file_name: 'Agregar Foto', src: 'None' }
  ];
  myImage: string;
  selectImages = [
    '../../../assets/images/default_profile_pics/default_01.png',
    '../../../assets/images/default_profile_pics/default_02.png',
    '../../../assets/images/default_profile_pics/default_03.png',
    '../../../assets/images/default_profile_pics/default_04.png',
    '../../../assets/images/default_profile_pics/default_05.png',
    '../../../assets/images/default_profile_pics/default_06.png',
    '../../../assets/images/default_profile_pics/default_07.png',
    '../../../assets/images/default_profile_pics/default_08.png',
    '../../../assets/images/default_profile_pics/default_09.png',
    '../../../assets/images/default_profile_pics/default_10.png',
  ];
  picAdded: number;
  imagePreview: string;
  user: any = {};

  anuncios: [] = [];
  books: [] = [];
  reservations: [] = [];

  numeroBooks = 0;
  numeroReserv = 0;
  isLibrarian: boolean;

 
  constructor(

    private booksService: BookService,
    public authService: AuthService,
    private reservationsService: ReservationsService,

  ) {}
 
  ngOnInit(): void {
    this.pickImagefun();
    this.isLibrarian = this.authService.isLibrarian.value;


  this.booksService.getBooks().subscribe(res => {
    console.log(res);
    this.books = res['books'];
    this.numeroBooks = this.books.length;
  })

  this.reservationsService.getReservationsAll().subscribe(res => {
    console.log(res);
    this.reservations = res.reservationes;
    this.numeroReserv = this.reservations.length;
  })
 
 
  }
 
  next() {
    this.selectedIndex = this.selectedIndex + 1;
  }
 
  previous() {
    this.selectedIndex = this.selectedIndex - 1;
  }
 
  changeDepartment(count) {
    this.municipio = this.departmentList.find(
      concat => concat.departamento === count
    ).municipios;
  }
 
  pickImagefun() {
    this.myImage = this.selectImages[Math.floor(Math.random() * 10)];
  }
 
  onImagePicked(event: Event, image: any) {
    const file = (event.target as HTMLInputElement).files[0];
    const index = parseInt(image.id.substring(5, image.id.length), 10) - 1;
    const newItemNo = this.images.length + 1;
    this.images[index].file_name = file.name;
    this.fileArray.push(file);
    const reader = new FileReader();
    reader.onload = () => {
      this.images[index].src = reader.result as string;
    };
    reader.readAsDataURL(file);
    // Create new item
    if (newItemNo < 1) {
      this.images.push({
        id: 'image' + newItemNo,
        name: 'image' + newItemNo,
        file_name: 'Add another photo',
        src: 'None'
      });
    }
  }
 

}
