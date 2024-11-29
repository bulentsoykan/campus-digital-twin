import React from 'react';
import { AlertTriangle, Building2, Users, Activity } from 'lucide-react';
import { useStore } from '../store';

export function Sidebar() {
  const setActiveTab = useStore((state) => state.setActiveTab);
  const activeTab = useStore((state) => state.activeTab);

  const menuItems = [
    { id: 'overview', icon: Building2, label: 'Campus Overview' },
    { id: 'emergency', icon: AlertTriangle, label: 'Emergency Management' },
    { id: 'analytics', icon: Activity, label: 'Analytics' },
    { id: 'occupancy', icon: Users, label: 'Occupancy' },
  ];

  return (
    <div className="h-full w-64 bg-white shadow-lg p-4">
      <div className="flex items-center justify-center mb-8">
        <img
          src="https://www.ucf.edu/brand/wp-content/blogs.dir/13/files/2016/07/UCF-Tab-Signature-lockup_vertical-KG-7406.png"
          alt="UCF Logo"
          className="h-16 w-auto object-contain"
        />
      </div>
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center p-3 mb-2 rounded-lg transition-colors ${
              activeTab === item.id
                ? 'bg-blue-100 text-blue-700'
                : 'hover:bg-gray-100'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}