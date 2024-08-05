export  interface CarData {
  image: any;
  name: string;
  transmission: string;
  model: string;
  rentalRatePerHour: number;
  additionalInfo: string;
}

export  interface SlideData {
    image: any; 
    title: string;
    description: string;
    buttonText: string;
    onPress: () => void;
  }