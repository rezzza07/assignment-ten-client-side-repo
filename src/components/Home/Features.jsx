import React from 'react';
import { Palette, Users, Star, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: 'Diverse Artworks',
      description: 'Explore a wide variety of art styles from talented artists worldwide.'
    },
    {
      icon: Users,
      title: 'Artist Community',
      description: 'Connect with fellow artists and art enthusiasts in our vibrant community.'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'All artworks are curated to ensure the highest quality and originality.'
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Browse and purchase artworks instantly with our secure platform.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Artopia?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Discover what makes our platform special</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;