export  interface CarData {
  image: any;
  name: string;
  transmission: string;
  model: string;
  rentalRatePerHour: number;
  additionalInfo: string;
  id: string
}

export  interface SlideData {
    image: any; 
    title: string;
    description: string;
    buttonText: string;
content: string
  }

 export interface Booking {
    carId: string;
    carName: string;
    hours: number;
    totalAmount: number;
    date: string;
  }
  