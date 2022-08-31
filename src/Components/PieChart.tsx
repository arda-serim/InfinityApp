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
   height: "350px",
   justifyContent: "center",
   alignItems: "center",
   background: "rgba(255, 255, 255)",
   borderRadius: 80,
   borderWidth: 0,
   paddingLeft: 20,
   marginTop: "1%",

} as React.CSSProperties;

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
         offsetX: -10,
         label: {
            style: {
               fill: 'red',
               color: '#fff',
            },

         },
      },
   };

   return (
      <div style={boxStyle} >
         <Card style={cardStyle}>
            <div >
               <Pie {...config} />
            </div>
         </Card>
      </div >
   );
}

export default PieChartComponent;
