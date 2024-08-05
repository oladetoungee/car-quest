import images from '@/constants/images';
import { CarData } from '@/lib/definitions';

export const carData: CarData[] = [
  {
    image: images.wtwd1,
    name: "Toyota Corolla",
    transmission: "Automatic",
    model: "2021",
    rentalRatePerHour: 15,
    additionalInfo: "A reliable sedan with great fuel efficiency.",
  },
  {
    image: images.wtwd,
    name: "Honda Civic",
    transmission: "Manual",
    model: "2020",
    rentalRatePerHour: 12,
    additionalInfo: "Sporty and compact with advanced safety features.",
  },
  {
    image: images.wtwd2,
    name: "Ford Mustang",
    transmission: "Automatic",
    model: "2019",
    rentalRatePerHour: 20,
    additionalInfo: "A classic muscle car with powerful performance.",
  },
  {
    image: images.logo,
    name: "Chevrolet Malibu",
    transmission: "Automatic",
    model: "2022",
    rentalRatePerHour: 18,
    additionalInfo: "A comfortable midsize sedan with modern amenities.",
  },
  {
    image: images.carHome,
    name: "Tesla Model 3",
    transmission: "Automatic",
    model: "2023",
    rentalRatePerHour: 25,
    additionalInfo: "An electric car with impressive range and features.",
  },
  // Add more cars as needed
];
