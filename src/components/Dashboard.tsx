import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Users, FileText, TrendingUp, Bell, Settings } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-blue-600">ConvertIQ</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Bell size={20} />
              </button>
              <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
          
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <DashboardCard
              title="Total Leads"
              value="1,234"
              icon={<Users className="h-6 w-6 text-blue-500" />}
              change="+5.3%"
              changeType="increase"
            />
            <DashboardCard
              title="Conversion Rate"
              value="23.5%"
              icon={<TrendingUp className="h-6 w-6 text-green-500" />}
              change="+2.1%"
              changeType="increase"
            />
            <DashboardCard
              title="Active Campaigns"
              value="12"
              icon={<FileText className="h-6 w-6 text-purple-500" />}
              change="-1"
              changeType="decrease"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <QuickActionCard
              title="Lead Insights"
              description="Analyze and score your leads"
              icon={<Users className="h-8 w-8 text-blue-500" />}
              link="/lead-insights"
            />
            <QuickActionCard
              title="Business Plan Generator"
              description="Create AI-powered business strategies"
              icon={<FileText className="h-8 w-8 text-green-500" />}
              link="/business-plan"
            />
            <QuickActionCard
              title="Performance Tracking"
              description="Monitor your KPIs and ROI"
              icon={<BarChart2 className="h-8 w-8 text-purple-500" />}
              link="/performance"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

const DashboardCard: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
  changeType: 'increase' | 'decrease';
}> = ({ title, value, icon, change, changeType }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd>
              <div className="text-lg font-medium text-gray-900">{value}</div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 px-5 py-3">
      <div className="text-sm">
        <span
          className={`font-medium ${
            changeType === 'increase' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {change}
        </span>{' '}
        <span className="text-gray-500">from last month</span>
      </div>
    </div>
  </div>
);

const QuickActionCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}> = ({ title, description, icon, link }) => (
  <Link
    to={link}
    className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300"
  >
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-5 w-0 flex-1">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  </Link>
);

export default Dashboard;