import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const mockData = [
  { time: '08:00', occupancy: 1200, emergencyResponders: 4 },
  { time: '10:00', occupancy: 2800, emergencyResponders: 4 },
  { time: '12:00', occupancy: 3500, emergencyResponders: 6 },
  { time: '14:00', occupancy: 3200, emergencyResponders: 6 },
  { time: '16:00', occupancy: 2400, emergencyResponders: 4 },
  { time: '18:00', occupancy: 1800, emergencyResponders: 4 },
];

export function Analytics() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Campus Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Daily Occupancy Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="occupancy"
                stroke="#2563eb"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Emergency Response Coverage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="emergencyResponders"
                stroke="#dc2626"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}