import React, { useState, useEffect } from 'react';
import { BarChart2, TrendingUp, Users, DollarSign } from 'lucide-react';
import axios from 'axios';

const PerformanceTracking: React.FC = () => {
  const [performanceData, setPerformanceData] = useState({
    metrics: [],
    chartData: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/performance');
        setPerformanceData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching performance data:', error);
        setLoading(false);
      }
    };

    fetchPerformanceData();
  }, []);

  const iconMap = {
    'Conversion Rate': TrendingUp,
    'Total Leads': Users,
    'Revenue': DollarSign,
    'ROI': BarChart2
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ... (keep the existing nav and header) ... */}

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Performance Tracking</h1>
          
          {loading ? (
            <div className="text-center py-4">
              <div className="spinner"></div>
              <p className="mt-2 text-gray-600">Loading performance data...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {performanceData.metrics.map((metric) => {
                  const Icon = iconMap[metric.name] || BarChart2;
                  return (
                    <div key={metric.id} className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <Icon className="h-6 w-6 text-gray-400" />
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">{metric.name}</dt>
                              <dd>
                                <div className="text-lg font-medium text-gray-900">{metric.value}</div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-5 py-3">
                        <div className="text-sm">
                          <span className="font-medium text-green-600">{metric.change}</span>{' '}
                          <span className="text-gray-500">from last month</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <div className="bg-white shadow rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Overview</h2>
                  <div className="relative h-80">
                    {/* Placeholder for chart - replace with actual chart library */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <BarChart2 size={48} />
                      <span className="ml-2 text-lg">Chart placeholder</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between text-sm text-gray-600">
                    {performanceData.chartData.map((data) => (
                      <div key={data.month} className="text-center">
                        <div>{data.month}</div>
                        <div className="font-semibold text-blue-600">{data.leads}</div>
                        <div className="font-semibold text-green-600">{data.conversions}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default PerformanceTracking;