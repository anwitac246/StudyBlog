'use client'
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const reviews = [
  {
    name: "John Doe",
    head: "Great Resource for Learning!",
    comment:
      "I stumbled upon this blog a few weeks ago, and I've been hooked ever since! The content is well-researched, easy to understand, and super informative. Highly recommend it for anyone looking to up their skills!",
  },
  {
    name: "Mark Stevens",
    head: "Amazing Blog, Helpful and Engaging!",
    comment:
      "This blog is amazing! The interactive elements and examples in the posts are really helpful, especially for understanding the concepts better. Keep up the fantastic work!",
  },
  {
    name: "Mike Johnson",
    head: "Insightful Articles, Excellent Quality",
    comment:
      "I've been following this blog for the past six months, and I’m always impressed by the quality of the content. The posts are well-written, and the insights provided are really valuable.",
  },
  {
    name: "Sarah Wilson",
    head: "Great Source for Practical Advice",
    comment:
      "As someone who's just starting to dive into web development, this blog has been a lifesaver. The posts are not just theoretical—they’re filled with practical advice that I can implement immediately.",
  },
  {
    name: "David Brown",
    head: "Best Blog for Tech Enthusiasts",
    comment:
      "I've read many tech blogs, but this one stands out for its depth and accessibility. The articles are written in a way that even complex topics feel easy to grasp. I especially love the web development and UI/UX design sections.",
  },
];

export default function ReviewsCarousel() {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">User Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">What our users say</p>
        </div>
        <div className="relative">
          <Carousel className="space-x-4">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 p-4 border-purple"
                  style={{ minWidth: '300px' }} 
                >
                  <motion.div
                    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
                    style={{ height: '300px' }} 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{review.head}</h4>
                      <p className="text-gray-700 dark:text-gray-400 mb-3">{review.comment}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">- {review.name}</p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
