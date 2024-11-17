import React from 'react';

export default function PricingPlan() {
  const plans = [
    {
      name: 'Basic',
      price: '$9',
      features: ['Access to basic features', '5 Projects', 'Community support'],
    },
    {
      name: 'Standard',
      price: '$19',
      features: ['Everything in Basic', '10 Projects', 'Priority support', 'Advanced analytics'],
    },
    {
      name: 'Premium',
      price: '$29',
      features: ['Everything in Standard', 'Unlimited Projects', '24/7 Premium support', 'Advanced reporting', 'Custom features'],
      bestSeller: true,
    },
  ];

  return (
    <section className="dark:bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Pricing Plans</h2>
        <p className = "text-xl text-center text-white mb-12">Subscribe to the blog for an elevated experience</p>
        <div className="flex flex-wrap justify-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`w-full md:w-1/3 px-6 mb-10 transform transition-transform duration-300 hover:scale-105 ${
                plan.bestSeller ? 'border-purple-700' : ''
              }`}
            >
              <div
                className={`rounded-xl shadow-xl overflow-hidden h-full flex flex-col justify-between bg-white dark:bg-slate-800 ${
                  plan.bestSeller ? 'border-4 border-purple-700' : 'border border-slate-300'
                }`}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {plan.name}
                  </h3>
                  <p className="text-4xl font-semibold text-gray-800 dark:text-slate-200">
                    {plan.price} <span className="text-lg font-medium">/ month</span>
                  </p>
                  <ul className="mt-6 mb-8 space-y-2 text-gray-600 dark:text-gray-400">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <button
                    className={`w-full py-3 rounded-lg text-lg font-medium transition-colors duration-300 ${
                      plan.bestSeller
                        ? 'bg-purple-700 hover:bg-purple-600 text-white'
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
