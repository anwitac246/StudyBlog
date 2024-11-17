"use client"
import  Navbar  from '@/components/Navbar';
import './globals.css'
import HomePage from '@/components/HomePage';
import PricingPlan from '@/components/PricingPlan';
import Review from '@/components/Reviews';
import ParticlesBackground from '@/components/particles';
export default function Home() {
  return (
    <div className = " main">
      <Navbar/>
      <HomePage/>
      <Review/>
      <PricingPlan/>
    </div>
  );7
}
