import { Component } from '@angular/core';
import {Benefit} from "../models/benefit";
import {BenefitIcon} from "../models/benefit-icon";
import {Person} from "../models/person";
import Swal from "sweetalert2";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  benefits:Benefit[] = [
    {
      title: "Zona de juegos infantiles al aire libre en terraza",
      description: "Los más pequeños disfrutarán de momentos inolvidables en nuestra zona de juegos al aire libre, diseñada para su diversión y seguridad.",
      picture: "Parque-Acanto2.jpg",
    },
    {
      title: "Piscina cubierta y climatizada para niños y adultos",
      description: "Disfruta de momentos de relax y diversión en nuestra piscina cubierta, perfecta para toda la familia.",
      picture: "Piscina-Acanto2.jpg",
    },
    {
      title: "Cancha sintética de fútbol 5",
      description: "Practica tu deporte favorito en nuestra cancha sintética, perfecta para partidos y entrenamientos.",
      picture: "CanchaFutbol-Acanto2.jpg",
    },
    {
      title: "Salón de juegos de mesa y video juegos",
      description: "Diviértete y relájate en nuestro salón de juegos con una amplia variedad de opciones para todas las edades.",
      picture: "ZonaVideojuegos-Acanto2.jpg",
    },
    {
      title: "Biblioteca – Ludoteca",
      description: "Sumérgete en un mundo de conocimiento y entretenimiento en nuestra biblioteca y ludoteca, ideales para disfrutar de momentos tranquilos.",
      picture: "Bibliotecea-Ludoteca-Acanto2.jpg",
    },
  ];
  benefitsWithIcons:BenefitIcon[] = [
    {
      title: "Gimnasio dotado",
      description: "Mantente en forma con equipos de última generación y espacios diseñados para tu entrenamiento.",
      icon: "fas fa-dumbbell",
    },
    {
      title: "Gimnasio al aire libre en terraza",
      description: "Vive la experiencia de hacer ejercicio al aire libre con vistas impresionantes desde nuestra terraza.",
      icon: "fas fa-running",
    },
    {
      title: "Zona de coworking",
      description: "Potencia tu productividad en un ambiente colaborativo equipado con todas las comodidades necesarias.",
      icon: "far fa-user",
    },
    {
      title: "Zonas para BBQs en terraza",
      description: "Organiza deliciosas parrilladas al aire libre con amigos y familiares en nuestras zonas de BBQ en la terraza.",
      icon: "fas fa-fire",
    },
    {
      title: "Terraza Café",
      description: "Disfruta de momentos de relax y socialización en nuestra terraza café, ideal para encuentros informales.",
      icon: "fas fa-coffee",
    },
    {
      title: "Salones comunales",
      description: "Espacios versátiles para eventos y reuniones, equipados para satisfacer todas tus necesidades.",
      icon: "fas fa-users",
    },
  ];

  houseTour:Benefit[] = [
    {
      title: "Cocina",
      description: "Un espacio listo para que diseñes tu cocina ideal, con la libertad de elegir los electrodomésticos y acabados que se adapten a tu estilo.",
      picture: "Sala-Cocina-Acanto2.jpg",
    },
    {
      title: "Cuarto de lavado",
      description: "Un área preparada para que instales tu lavadora y secadora, facilitando tus tareas de lavandería según tus necesidades.",
      picture: "Sala-Servicio-Acanto2.jpg",
    },
    {
      title: "Cuarto principal",
      description: "Un espacio diseñado para ser tu refugio personal, con la posibilidad de crear tu propio baño privado según tus preferencias y comodidad.",
      picture: "HabitacionPrincipal-Acanto2.jpg",
    },
    {
      title: "Cuarto secundario",
      description: "Un espacio versátil que puedes adaptar según tus necesidades, ya sea como dormitorio adicional, estudio o área de almacenamiento.",
      picture: "Habitacion-secundaria-Acanto2.jpg",
    },
    {
      title: "Cuarto auxiliar",
      description: "Un área flexible que puedes utilizar según tu estilo de vida, ya sea como estudio, sala de juegos o área de almacenamiento.",
      picture: "Sala-Sofa-Acanto2.jpg",
    },
  ];

  person: Person = { name: '', email: '', cellphone: ''};

  constructor() { }

  validateRequiredFields() {
    var validation = this.person.name.length > 3
      && this.person.email.length > 0
      && this.person.cellphone.toString().length == 10;
    return validation;
  }

  sendPersonData() {
    //TODO: SEND PERSON DATA TO AR WEB SERVICE
    Swal.fire(
      'Registro exitoso',
      'En breve nos contactaremos contigo!',
      'success'
    )
  }
}

