import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import Card from "antd/es/card";


interface DataType {
   title: string;
   value: number;
   color: string;
}

const chartStyle = {
   marginBottom: '25%',
   width: "300px",
   height: "300px",
   fontSize: 8,
   color: '#fff',
};

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
   let legend = [];

   for (let i = 0; i < data.length; i++) {
      let color = data[i].color;
      legend.push(<text key={i}><img style={{
         width: '13px', height: '13px', ['backgroundColor' as any]: data[i].color, marginBottom: '5px'
      }}></img> {''}{data[i].title} {'   '}</text >);
   }

   return (

      <div style={boxStyle}>
         <Card style={cardStyle}>
            <PieChart style={chartStyle}
               animate={true}
               animationDuration={500}
               animationEasing="ease-out"
               center={[50, 50]}
               label={(props) => { return props.dataEntry.value + ' ETH'; }}
               labelPosition={70}
               lineWidth={98}
               labelStyle={{ color: 'white' }}
               onMouseOver={(e) => { }}
               data={data} />
            <p style={legendStyle}> {legend}</p>
         </Card>
      </div>
   );
}

export default PieChartComponent;
