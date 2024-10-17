import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BarChart2, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-8">Welcome to ConvertIQ</h1>
      <p className="text-xl mb-12 text-center max-w-2xl">
        Harness the power of AI for lead analysis, business plan generation, and performance tracking.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard icon={<Brain size={48} />} title="AI-Powered Lead Analysis" />
        <FeatureCard icon={<BarChart2 size={48} />} title="Smart Business Planning" />
        <FeatureCard icon={<Users size={48} />} title="Performance Tracking" />
      </div>
      <Link
        to="/login"
        className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300"
      >
        Get Started
      </Link>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
  </div>
);

export default HomePage;