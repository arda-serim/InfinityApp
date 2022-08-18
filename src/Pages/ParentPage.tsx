import React from "react";
import PieChartComponent from "../Components/PieChart";




function ParentPage() {
   const data = [
      {
         title: "Child 1",
         value: 50,
         color: "#00ff00",
      },
      {
         title: "Child 2",
         value: 35,
         color: "#ff0000",
      },
      {
         title: "Child 3",
         value: 15,
         color: "#0000ff",
      },
   ];
   return (
      <div>
         <PieChartComponent data={data} />
      </div>
   );
}

export default ParentPage;