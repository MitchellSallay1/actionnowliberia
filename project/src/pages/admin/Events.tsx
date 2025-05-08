import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Users, Plus } from 'lucide-react';
import Button from '../../components/ui/Button';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  status: 'upcoming' | 'ongoing' | 'completed';
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Community Meetup',
    date: '2024-03-15',
    time: '18:00',
    location: 'Community Center',
    attendees: 45,
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'Volunteer Training',
    date: '2024-03-20',
    time: '14:00',
    location: 'Main Office',
    attendees: 12,
    status: 'upcoming',
  },
  // Add more mock events as needed
];

const Events = () => {
  const [view, setView] = useState<'list' | 'calendar'>('list');

  const getStatusColor = (status: Event['status']) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'ongoing':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Events</h1>
            <p className="text-gray-600 mt-1">Manage your organization's events</p>
          </div>
          <Button variant="primary" className="flex items-center">
            <Plus size={20} className="mr-2" />
            Create Event
          </Button>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                view === 'list'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              onClick={() => setView('list')}
            >
              List
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                view === 'calendar'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              onClick={() => setView('calendar')}
            >
              Calendar
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {view === 'list' ? (
          <div className="divide-y divide-gray-200">
            {mockEvents.map((event) => (
              <div key={event.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon size={16} className="mr-2" />
                        {new Date(event.date).toLocaleDateString()}
                        <Clock size={16} className="ml-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={16} className="mr-2" />
                        {event.location}
                        <Users size={16} className="ml-4 mr-2" />
                        {event.attendees} attendees
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6">
            <p className="text-center text-gray-500">Calendar view coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events; 