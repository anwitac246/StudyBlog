import React from 'react';
import Link from "next/link"
import { Button } from "@/components/ui/button"
export default function HomePage() {
  return (
    <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center mt-16">
      <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
        <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
        Empowering Your <b>Tech Journey</b>, One Line of Code at a Time.
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
        Master <i>Web Development</i> and Conquer <i>Competitive Programming</i> with Expert Insights and Practical Guides.
        </p>
        <br/>
        <Button asChild><Link href="/blog">Explore My Page</Link></Button>
      </div>
      <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
        <img
          src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
          alt="tailwind css components"
          className="w-full h-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
}
