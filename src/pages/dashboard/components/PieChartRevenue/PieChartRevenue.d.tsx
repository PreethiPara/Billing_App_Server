import { Paper } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 20,
      radius:"95%"
      
    }]
  };
  const textInside={
    id:'textInside',
    beforeDatasetsDraw(chart: {
      getDatasetMeta(arg0: number): unknown; ctx: any; 
},args: any,pluginOptions: any){
      const { ctx } = chart as { ctx: CanvasRenderingContext2D; };
      const meta = chart.getDatasetMeta(0) as { data: { x: number, y: number }[] };
      if (meta && meta.data && meta.data.length > 0) {
        const firstDataPoint = meta.data[0];
        if (firstDataPoint) {
            
            ctx.font='bolder 30px sans-serif';
            ctx.textAlign='center';
            ctx.textBaseline='middle';
            ctx.fillText('text', firstDataPoint.x, firstDataPoint.y);
            ctx.save();
        }
    }
      
    }
  }
  const options = {
      aspectRatio:1.3,
        plugins: {
            
            legend:{
                position:"right" as "right",
                labels:{
                    font:{
                        size:15
                    }
                }
            },
            title: {
                display: true,
                text: 'Transactions by Categories',
                font:{
                    size:20
                }
            }, 
          }
  };

const PieChart = () => {
return (
    <Paper elevation={4} className="pt-5" style={{ width: "600px", height: "350px",display:"flex", justifyContent:"center",alignItems:"center" }}>
        <Doughnut plugins={[textInside]} style={{width:"600px",height:"300px"}} data={data} options={options}/>
    </Paper>
  );
};
export default PieChart;