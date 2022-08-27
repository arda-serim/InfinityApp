import React from "react";
import { PieChart } from "react-minimal-pie-chart";

import { Pie } from '@ant-design/plots';
import { Card } from "antd";


interface DataType {
   title: string;
   value: number;
   key: string;
}


const cardStyle = {
   display: "flex",
   width: "400px",
   height: "400px",
   justifyContent: "center",
   alignItems: "center",
   background: "rgba(0, 0, 0, 0)",
   border: "none",
   marginLeft: "20%",
   marginTop: "1%",

};

const boxStyle = {
};

const legendStyle = {
   whiteSpace: "pre-wrap",
   display: "flex",
   flexDirection: "row",
   flexWrap: "wrap",
   justifyContent: "space-evenly",
   alignItems: "center",
   color: '#fff',
   fontSize: '15px',
} as React.CSSProperties;


const PieChartComponent = ({ data }: { data: Array<DataType> }) => {

   const config = {
      data,
      angleField: 'value',
      colorField: 'title',
      appendPadding: 10,
      label: {
         type: 'inner',
         offset: '-35%',
         style: {
            fontSize: 16,
            textAlign: 'center',
            color: '#fff',
         },
         interactions: [{
            type: 'element-active',
         }],
      },
      legend: {
         visible: true,
         offsetX:-10,
         label: {
            style: {
               fill: 'white',
                color: '#fff',
         },

         },
      },
   };

   return (
      <div style={boxStyle} >
         <Card style={cardStyle}>
            <Pie {...config} />
         </Card>
      </div >
   );
}

export default PieChartComponent;
