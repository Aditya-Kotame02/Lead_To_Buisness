import React, { useState, useEffect } from 'react';
import { Users, Search, Filter, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import axios from 'axios';

const LeadInsights: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('all');
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/leads');
        setLeads(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching leads:', error);
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterOption === 'all' || lead.status === filterOption;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ... (keep the existing nav and header) ... */}

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Lead Insights</h1>
          
          {/* ... (keep the existing search and filter components) ... */}

          {loading ? (
            <div className="text-center py-4">
              <div className="spinner"></div>
              <p className="mt-2 text-gray-600">Loading leads...</p>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {filteredLeads.map((lead) => (
                  <li key={lead.id}>
                    {/* ... (keep the existing lead item structure) ... */}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default LeadInsights;