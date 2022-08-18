import React from "react";
import { PieChart } from "react-minimal-pie-chart";


interface DataType {
   title: string;
   value: number;
   color: string;
}



const PieChartComponent = ({ data }: { data: Array<DataType> }) => {
   return (
      <PieChart
         label={(props) => { return props.dataEntry.value + '%'; }}
         onMouseOver={(e) => { }}
         data={data} />
   );
}

export default PieChartComponent;
