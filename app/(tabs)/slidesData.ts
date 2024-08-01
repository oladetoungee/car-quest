import { images } from '@/constants';

// types.ts
 interface SlideData {
    image: any; // Type for the image, typically require or an imported image
    title: string;
    description: string;
    buttonText: string;
    onPress: () => void;
  }
  

  
  export const slidesData: SlideData[] = [
    {
      image: images.wtwd1,
      title: "How does our rental work?",
      description: "Go over our car rental process.",
      buttonText: "Learn more",
      onPress: () => { /* Handle press */ },
    },
    {
      image: images.wtwd,
      title: "Why choose us?",
      description: "Affordable rates, wide range of vehicles.",
      buttonText: "Discover benefits",
      onPress: () => { /* Handle press */ },
    },
    {
      image: images.wtwd2,
      title: "Customer testimonials",
      description: "Our customers enjoy our services.",
      buttonText: "Read more",
      onPress: () => { /* Handle press */ },
    },
  ];
  