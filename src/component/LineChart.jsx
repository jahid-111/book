import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function LineChartBar() {
  const data = [
    { name: "1", value: 2 },
    { name: "2", value: 5.5 },
    { name: "3", value: 2 },
    { name: "5", value: 8.5 },
    { name: "8", value: 1.5 },
    { name: "10", value: 5 },
  ];

  return (
    <div>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
