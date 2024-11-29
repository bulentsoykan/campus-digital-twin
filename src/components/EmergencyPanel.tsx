import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function EmergencyPanel() {
  return (
    <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-md">
      <div className="flex items-center gap-2 text-red-600 mb-4">
        <AlertTriangle className="w-6 h-6" />
        <h2 className="text-lg font-bold">Emergency Management</h2>
      </div>
      <div className="space-y-4">
        <div className="p-3 bg-red-50 rounded-md border border-red-200">
          <h3 className="font-semibold mb-2">Active Emergency Response Units</h3>
          <p className="text-sm text-gray-600">4 units currently deployed</p>
        </div>
        <div className="p-3 bg-yellow-50 rounded-md border border-yellow-200">
          <h3 className="font-semibold mb-2">Response Time</h3>
          <p className="text-sm text-gray-600">Average: 3.5 minutes</p>
        </div>
        <div className="p-3 bg-blue-50 rounded-md border border-blue-200">
          <h3 className="font-semibold mb-2">Building Status</h3>
          <p className="text-sm text-gray-600">All buildings operating normally</p>
        </div>
      </div>
    </div>
  );
}