import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  CartesianGrid,
  XAxis,
} from "recharts";

const data = [
  { month: "Ene", embarques: 45 },
  { month: "Feb", embarques: 52 },
  { month: "Mar", embarques: 48 },
  { month: "Abr", embarques: 61 },
  { month: "May", embarques: 55 },
  { month: "Jun", embarques: 67 },
  { month: "Jul", embarques: 73 },
  { month: "Ago", embarques: 69 },
  { month: "Sep", embarques: 78 },
  { month: "Oct", embarques: 82 },
  { month: "Nov", embarques: 89 },
  { month: "Dic", embarques: 94 },
];

export function LineChart({ selectedProduct }) {
  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">
          Evolución de Embarques Aprobados
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#666" />
              <YAxis tick={{ fontSize: 12 }} stroke="#666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="embarques"
                stroke="#16a34a"
                strokeWidth={3}
                dot={{ fill: "#16a34a", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: "#16a34a" }}
              />
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
