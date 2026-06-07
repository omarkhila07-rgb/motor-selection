export type Car = {
  slug: string;
  title: string;
  image?: string;
  brand: string;
  model: string;
  price: string;
  monthly: string;
  year: string;
  km: string;
  fuel: string;
  gearbox: string;
  power: string;
  location: string;
  status: string;
  description: string;
  equipment: string[];
  images: string[];
};

export const cars: Car[] = [
  
  {
    slug: "peugeot-308-2015-1-6-hdi",
    title: "Peugeot 308 1.6 HDi 100 CV",
    image: "/cars/peugeot-308-2015/1.jpg",
    brand: "Peugeot",
    model: "308",
    price: "Consultar",
    monthly: "",
    year: "2015",
    km: "254.441 km",
    fuel: "Diésel",
    gearbox: "Manual",
    power: "100 CV",
    location: "Figueres, Girona",
    status: "Disponible",
    description:
      "Peugeot 308 del año 2015 con motor 1.6 HDi de 100 CV. Vehículo práctico, económico y cómodo para uso diario, con buen consumo y equipamiento funcional.",
    equipment: [
      "Pantalla multimedia",
      "Bluetooth",
      "Sistema Start & Stop",
      "Climatizador",
      "Control de velocidad",
      "Ordenador de abordo",
      "Volante multifunción",
      "Cierre centralizado",
      "Elevalunas eléctricos",
      "Dirección asistida",
      "Bajo consumo",
      "Ideal para uso diario",
    ],
        images: [
      "/cars/peugeot-308-2015/1.jpg",
      "/cars/peugeot-308-2015/2.jpg",
      "/cars/peugeot-308-2015/3.jpg",
      "/cars/peugeot-308-2015/4.jpg",
      "/cars/peugeot-308-2015/5.jpg",
      "/cars/peugeot-308-2015/6.jpg",
      "/cars/peugeot-308-2015/7.jpg",
      "/cars/peugeot-308-2015/8.jpg",
      "/cars/peugeot-308-2015/9.jpg",
      "/cars/peugeot-308-2015/10.jpg",
      "/cars/peugeot-308-2015/11.jpg",
      "/cars/peugeot-308-2015/12.jpg",
      "/cars/peugeot-308-2015/13.jpg",
      "/cars/peugeot-308-2015/14.jpg",
      "/cars/peugeot-308-2015/15.jpg",
      "/cars/peugeot-308-2015/16.jpg"
    ],
  },

  {
    slug: "volkswagen-touran-2011-1-2-tsi",
    title: "Volkswagen Touran 1.2 TSI",
    image: "/cars/volkswagen-touran-2011/1.jpg",
    brand: "Volkswagen",
    model: "Touran",
    price: "Consultar",
    monthly: "",
    year: "2011",
    km: "235.000 km",
    fuel: "Gasolina",
    gearbox: "Manual",
    power: "105 CV",
    location: "Figueres, Girona",
    status: "Disponible",
    description:
      "Volkswagen Touran 1.2 TSI del año 2011. Vehículo amplio, cómodo y práctico para uso familiar o diario.",
    equipment: [
      "Climatizador",
      "Bluetooth",
      "Control de velocidad",
      "Elevalunas eléctricos",
      "Volante multifunción"
    ],
        images: [
      "/cars/volkswagen-touran-2011/1.jpg",
      "/cars/volkswagen-touran-2011/2.jpg",
      "/cars/volkswagen-touran-2011/3.jpg",
      "/cars/volkswagen-touran-2011/4.jpg",
      "/cars/volkswagen-touran-2011/5.jpg",
      "/cars/volkswagen-touran-2011/6.jpg",
      "/cars/volkswagen-touran-2011/7.JPG",
      "/cars/volkswagen-touran-2011/8.jpg",
      "/cars/volkswagen-touran-2011/9.jpg",
      "/cars/volkswagen-touran-2011/10.jpg"
    ]
  },

  {
    slug: "volkswagen-golf-2011-1-2-tsi",
    title: "Volkswagen Golf 1.2 TSI",
    image: "/cars/volkswagen-golf-2011/1.jpg",
    brand: "Volkswagen",
    model: "Golf",
    price: "Consultar",
    monthly: "",
    year: "2011",
    km: "190.000 km",
    fuel: "Gasolina",
    gearbox: "Manual",
    power: "105 CV",
    location: "Figueres, Girona",
    status: "Disponible",
    description:
      "Volkswagen Golf 1.2 TSI del año 2011. Compacto fiable, cómodo y económico con buena conducción diaria.",
    equipment: [
      "Pantalla multimedia",
      "Bluetooth",
      "Climatizador",
      "Control de velocidad",
      "Llantas"
    ],
        images: [
      "/cars/volkswagen-golf-2011/1.jpg",
      "/cars/volkswagen-golf-2011/2.jpg",
      "/cars/volkswagen-golf-2011/3.jpg",
      "/cars/volkswagen-golf-2011/4.jpg",
      "/cars/volkswagen-golf-2011/5.jpg",
      "/cars/volkswagen-golf-2011/6.jpg",
      "/cars/volkswagen-golf-2011/7.jpg",
      "/cars/volkswagen-golf-2011/8.jpg",
      "/cars/volkswagen-golf-2011/9.jpg",
      "/cars/volkswagen-golf-2011/10.jpg",
      "/cars/volkswagen-golf-2011/11.jpg",
      "/cars/volkswagen-golf-2011/12.jpg",
      "/cars/volkswagen-golf-2011/13.jpg",
      "/cars/volkswagen-golf-2011/14.jpg",
      "/cars/volkswagen-golf-2011/15.jpg",
      "/cars/volkswagen-golf-2011/16.jpg",
      "/cars/volkswagen-golf-2011/17.jpg"
    ]
  }

];