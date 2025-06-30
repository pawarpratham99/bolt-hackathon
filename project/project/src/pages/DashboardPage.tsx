import React from 'react';
import { FileText, Users, TrendingUp, Shield, Calendar, Clock, Award, BarChart3 } from 'lucide-react';

interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  color: string;
}

const DashboardPage = () => {
  const stats: StatCard[] = [
    {
      title: 'Contracts Generated Today',
      value: '47',
      change: '+12%',
      icon: FileText,
      color: 'blue',
    },
    {
      title: 'Most Popular Contract Type',
      value: 'NDA',
      change: '32% of all contracts',
      icon: Award,
      color: 'green',
    },
    {
      title: 'Users Active',
      value: '1,247',
      change: '+8% this week',
      icon: Users,
      color: 'purple',
    },
    {
      title: 'Contracts Signed on Blockchain',
      value: '89',
      change: '+23% this month',
      icon: Shield,
      color: 'indigo',
    },
  ];

  const recentActivity = [
    { id: 1, action: 'New NDA generated', user: 'Sarah Johnson', time: '2 minutes ago' },
    { id: 2, action: 'Freelance contract signed', user: 'Mike Chen', time: '8 minutes ago' },
    { id: 3, action: 'Rental agreement created', user: 'Emma Davis', time: '15 minutes ago' },
    { id: 4, action: 'Co-founder agreement verified', user: 'Alex Rivera', time: '23 minutes ago' },
    { id: 5, action: 'Breakup contract shared', user: 'Jordan Smith', time: '31 minutes ago' },
  ];

  const contractTypes = [
    { name: 'NDA', count: 156, percentage: 32 },
    { name: 'Freelance Agreement', count: 98, percentage: 20 },
    { name: 'Rental Agreement', count: 87, percentage: 18 },
    { name: 'Co-founder Agreement', count: 65, percentage: 13 },
    { name: 'Roommate Agreement', count: 43, percentage: 9 },
    { name: 'Meme Contracts', count: 39, percentage: 8 },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      indigo: 'bg-indigo-500',
    };
    return colorMap[color] || 'bg-gray-500';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Analytics and insights for AI Legal Buddy</p>
        <div className="mt-2 text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block">
          📊 Placeholder data - Ready for Supabase integration
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-sm text-green-600 mt-1">{stat.change}</p>
              </div>
              <div className={`${getColorClasses(stat.color)} p-3 rounded-full`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contract Types Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Contract Types</h2>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {contractTypes.map((type, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{type.name}</span>
                    <span className="text-sm text-gray-500">{type.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${type.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <Clock className="h-5 w-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">by {activity.user}</p>
                </div>
                <div className="text-xs text-gray-400">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <FileText className="h-8 w-8 text-blue-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Generate Report</p>
              <p className="text-sm text-gray-500">Monthly analytics summary</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <Users className="h-8 w-8 text-green-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">User Management</p>
              <p className="text-sm text-gray-500">Manage user accounts</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <TrendingUp className="h-8 w-8 text-purple-600" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Analytics</p>
              <p className="text-sm text-gray-500">Detailed insights</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;