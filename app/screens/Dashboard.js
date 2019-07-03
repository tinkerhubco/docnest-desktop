import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const data = [
  {
    date: 'Sunday',
    appointments: 10
  },
  {
    date: 'Monday',
    appointments: 15
  },
  {
    date: 'Tuesday',
    appointments: 14
  },
  {
    date: 'Wednesday',
    appointments: 4
  },
  {
    date: 'Thursday',
    appointments: 8
  },
  {
    date: 'Friday',
    appointments: 10
  },
  {
    date: 'Saturday',
    appointments: 50
  }
];

export function Dashboard() {
  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="appointments" stroke="#8884d8" />
    </LineChart>
  );
}

export default Dashboard;
