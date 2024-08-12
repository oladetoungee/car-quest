import { images } from '@/constants';
import { SlideData } from '@/lib/definitions';

export const slidesData: SlideData[] = [
  {
    image: images.wtwd1,
    title: "How does our rental work?",
    description: "Discover how our car rental process operates from start to finish.",
    buttonText: "Learn more",
    content: `
      At [Company Name], we make renting a car as easy as possible. Here’s how it works:

      1. **Select Your Vehicle**: Browse through our diverse fleet of cars and choose the one that suits your needs.
      2. **Choose Your Rental Period**: Decide how long you need the vehicle. Whether it's for a few hours or a few days, we have flexible options.
      3. **Book Online**: Use our user-friendly website or app to complete your booking. You can select additional services and make payments securely.
      4. **Pick Up Your Car**: Visit our designated pickup location or arrange for delivery. Our team will ensure everything is ready for you.
      5. **Enjoy Your Ride**: Drive off and enjoy your journey with peace of mind.
      6. **Return the Vehicle**: Drop off the car at the agreed location. Our team will handle the rest and ensure everything is settled.
    `,
  },
  {
    image: images.wtwd,
    title: "Why choose us?",
    description: "Learn why we're the top choice for car rentals. ",
    buttonText: "Discover benefits",
    content: `
      Here’s why [Company Name] is the preferred choice for car rentals:

      1. **Competitive Rates**: We offer some of the best rates in the industry without compromising on quality.
      2. **Wide Range of Vehicles**: From compact cars to luxury SUVs, our fleet has something for everyone.
      3. **Exceptional Customer Service**: Our dedicated support team is available around the clock to assist you.
      4. **Flexible Rental Options**: Choose from short-term or long-term rentals based on your needs.
      5. **No Hidden Fees**: Transparency is key. We provide clear pricing with no hidden costs.
      6. **Easy Booking Process**: Book your car effortlessly through our intuitive website or app.
      7. **Well-Maintained Vehicles**: All our cars are regularly serviced to ensure safety and reliability.
    `,
  },
  {
    image: images.wtwd2,
    title: "Customer testimonials",
    description: "Read what our customers have to say about their experience with us.",
    buttonText: "Read more",
    content: `
      Here’s what some of our satisfied customers have to say:

      **John Doe**: “I had an amazing experience renting from [Company Name]. The booking process was smooth, and the car was in pristine condition. Highly recommend!”

      **Jane Smith**: “Fantastic service! The staff was friendly and helpful, and the rental rates were very reasonable. I’ll definitely use them again.”

      **Michael Brown**: “Great selection of vehicles and excellent customer service. The whole process was hassle-free, and the car was perfect for my trip.”

      **Emily Johnson**: “I was impressed with the transparency and the ease of booking. The vehicle exceeded my expectations. Keep up the great work!”

      **Sarah Lee**: “The experience was top-notch from start to finish. The team was professional, and the car was exactly what I needed. Will definitely be a repeat customer.”
    `,
  },
];
