import { images } from '@/constants';
import { SlideData } from '@/lib/definitions';

export const slidesData: SlideData[] = [
  {
    image: images.wtwd1,
    title: "How does our rental work?",
    description: "Discover how our car rental process operates from start to finish.",
    buttonText: "Learn more",
    content: `
      Renting a car with CarQuest is straightforward. Choose your vehicle from our diverse fleet, select your rental period, book online, and pick up your car at the designated location. After enjoying your ride, simply return the car, and our team will take care of the rest.
    `,
  },
  {
    image: images.wtwd,
    title: "Why choose us?",
    description: "Learn why we're the top choice for car rentals.",
    buttonText: "Discover benefits",
    content: `
      CarQuest offers competitive rates, a wide range of vehicles, and exceptional customer service. With flexible rental options, transparent pricing, and well-maintained cars, we ensure a seamless and reliable car rental experience.
    `,
  },
  {
    image: images.wtwd2,
    title: "Customer testimonials",
    description: "Read what our customers have to say about their experience with us.",
    buttonText: "Read more",
    content: `
      Our customers love the smooth booking process, well-maintained vehicles, and friendly service. They appreciate our transparency, reasonable rates, and hassle-free experience, making us their preferred choice for car rentals.
    `,
  },
];
