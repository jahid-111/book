import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicArea() {
  return (
    <div className="">
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [0, 70, 20, 15, 100],
            area: false,
          },
        ]}
        width={200}
        height={120}
      />
    </div>
  );
}
