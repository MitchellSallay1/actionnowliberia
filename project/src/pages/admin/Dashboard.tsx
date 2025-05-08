import React from 'react';
import { Users, Calendar, ArrowUp, ArrowDown, Activity } from 'lucide-react';

const DashboardCard = ({ title, value, change, icon: Icon, changeType }: {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  changeType: 'increase' | 'decrease';
}) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-semibold mt-2">{value}</p>
      </div>
      <div className="bg-primary-50 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-primary-600" />
      </div>
    </div>
    <div className="mt-4 flex items-center">
      {changeType === 'increase' ? (
        <ArrowUp className="w-4 h-4 text-green-500" />
      ) : (
        <ArrowDown className="w-4 h-4 text-red-500" />
      )}
      <span className={`text-sm ml-1 ${
        changeType === 'increase' ? 'text-green-500' : 'text-red-500'
      }`}>
        {change}
      </span>
      <span className="text-sm text-gray-500 ml-2">vs last month</span>
    </div>
  </div>
);

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '2,453',
      change: '12%',
      icon: Users,
      changeType: 'increase' as const,
    },
    {
      title: 'Active Events',
      value: '45',
      change: '8%',
      icon: Calendar,
      changeType: 'increase' as const,
    },
    {
      title: 'Engagement Rate',
      value: '67%',
      change: '5%',
      icon: Activity,
      changeType: 'decrease' as const,
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <DashboardCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center py-2 border-b border-gray-100 last:border-0">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">New user registered</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center py-2 border-b border-gray-100 last:border-0">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">Community Meetup</p>
                  <p className="text-xs text-gray-500">Tomorrow at 6:00 PM</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 