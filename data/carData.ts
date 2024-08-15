import images from '@/constants/images';
import { CarData } from '@/lib/definitions';

export const carData: CarData[] = [
  {
    id: '1',
    image: images.car1,
    name: "Toyota Corolla",
    transmission: "Automatic",
    model: "2021",
    rentalRatePerHour: 1500,
    additionalInfo: "A reliable sedan with great fuel efficiency.",
    station: "Ikeja"
  },
  {
    id: '2',
    image: images.car2,
    name: "Honda Civic",
    transmission: "Manual",
    model: "2020",
    rentalRatePerHour: 1200,
    additionalInfo: "Sporty and compact with advanced safety features.",
    station: "Yaba"
  },
  {
    id: '3',
    image: images.car3,
    name: "Ford Mustang",
    transmission: "Automatic",
    model: "2019",
    rentalRatePerHour: 2000,
    additionalInfo: "A classic muscle car with powerful performance.",
    station: "Lekki"
  },
  {
    id: '4',
    image: images.car4,
    name: "Chevrolet Malibu",
    transmission: "Automatic",
    model: "2022",
    rentalRatePerHour: 1800,
    additionalInfo: "A comfortable midsize sedan with modern amenities.",
    station: "Victoria Island"
  },
  {
    id: '5',
    image: images.car5,
    name: "Tesla Model 3",
    transmission: "Automatic",
    model: "2023",
    rentalRatePerHour: 2500,
    additionalInfo: "An electric car with impressive range and features.",
    station: "Ikoyi"
  },
  {
    id: '6',
    image: images.car6,
    name: "BMW 3 Series",
    transmission: "Automatic",
    model: "2021",
    rentalRatePerHour: 2200,
    additionalInfo: "A luxury sedan with sporty handling and comfort.",
    station: "Surulere"
  },
  {
    id: '7',
    image: images.car7,
    name: "Audi A4",
    transmission: "Automatic",
    model: "2020",
    rentalRatePerHour: 2400,
    additionalInfo: "Elegant and powerful with advanced technology.",
    station: "Ajah"
  },
  {
    id: '8',
    image: images.car8,
    name: "Mercedes-Benz C-Class",
    transmission: "Automatic",
    model: "2019",
    rentalRatePerHour: 2600,
    additionalInfo: "Luxurious and refined with a smooth ride.",
    station: "Ikeja GRA"
  },
  {
    id: '9',
    image: images.car2,
    name: "Nissan Altima",
    transmission: "Automatic",
    model: "2022",
    rentalRatePerHour: 1700,
    additionalInfo: "A stylish sedan with a comfortable interior.",
    station: "Ogudu"
  },
];
