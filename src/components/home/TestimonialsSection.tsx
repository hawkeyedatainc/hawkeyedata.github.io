
import { useState, useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "HawkEye Data transformed how we understand customer trends. The interactive dashboards made complex data accessible to everyone on our team.",
    author: "Sarah Johnson",
    title: "CTO, TechForward",
    avatar: "SJ"
  },
  {
    content: "The predictive analytics feature gave us a competitive edge in the market. We were able to anticipate changes weeks before they happened.",
    author: "Michael Chang",
    title: "Director of Operations, GlobalTech",
    avatar: "MC"
  },
  {
    content: "Implementation was seamless and the ROI was immediate. Our data team is more productive and our executives have better insights for strategic decisions.",
    author: "Elena Rodriguez",
    title: "Data Analytics Lead, InnovateCorp",
    avatar: "ER"
  },
  {
    content: "The visualization tools are incredibly intuitive. We've been able to communicate data stories to stakeholders in ways that drive real action.",
    author: "Daniel Wilson",
    title: "CEO, Startup Innovations",
    avatar: "DW"
  },
  {
    content: "Customer support has been exceptional. Any time we've had questions, the team responds quickly with expert solutions.",
    author: "Rachel Kim",
    title: "VP of Marketing, GrowthPartners",
    avatar: "RK"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-hawkeye-purple">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Success stories from organizations that transformed their data experience with HawkEye Data.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel 
            className="w-full"
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
            onTouchStart={stopAutoplay}
            onTouchEnd={startAutoplay}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="px-4 md:px-8">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <Quote className="h-10 w-10 text-hawkeye-gold/70 mb-4" />
                      <p className="text-lg md:text-xl italic text-gray-700 dark:text-gray-200 mb-6">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarFallback className="bg-hawkeye-purple text-white">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.author}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative mr-2 inline-flex" />
              <CarouselNext className="relative ml-2 inline-flex" />
            </div>
          </Carousel>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  activeIndex === index
                    ? "bg-hawkeye-purple"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  stopAutoplay();
                  setTimeout(startAutoplay, 10000);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
