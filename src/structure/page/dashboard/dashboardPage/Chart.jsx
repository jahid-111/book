import LineChartBar from "../../../../component/LineChart";
import DashedLineChart from "../../../../component/DashedLineChart";
import BasicPie from "../../../../component/BasicPie";
import BasicBars from "../../../../component/BasicBar";

const Chart = () => {
  return (
    <section className="mx-auto w-full ">
      <div className=" flex gap-4">
        <LineChartBar />
        <DashedLineChart />
      </div>
      <div className="mt-4 flex gap-4">
        <BasicPie />
        <BasicBars />
      </div>
    </section>
  );
};

export default Chart;
