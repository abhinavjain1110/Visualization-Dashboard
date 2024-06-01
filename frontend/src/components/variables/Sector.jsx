import React from "react";
import { Pie } from "react-chartjs-2";
import { Card } from "react-bootstrap";

const PieChart = ({ data }) => {
  const sectors = {};

  data.forEach((entry) => {
    if (!sectors[entry.sector]) {
      sectors[entry.sector] = 0;
    }
    sectors[entry.sector] += entry.intensity;
  });

  const getRandomColor = (index) => {
    const colors = [
      "#FF0080",
      "#00BFFF",
      "#FFD700",
      "#32CD32",
      "#FF4500",
      "#9400D3",
      // Add more colors as needed
    ];
    return colors[index % colors.length];
  };

  const chartData = {
    labels: Object.keys(sectors),
    datasets: [
      {
        data: Object.values(sectors),
        backgroundColor: Object.keys(sectors).map((_, index) =>
          getRandomColor(index)
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        position: "average",
      },
    },
  };

  return (
    <Card className="mt-4 mb-4 shadow-sm" style={{ borderRadius: '8px', padding: '24px', maxHeight: '700px', overflow: 'hidden', backgroundColor:'#ECECEB' }}>
      <Card.Body>
        <Card.Title>Sector Chart</Card.Title>
        <div style={{ height: '400px' }}>
          <Pie data={chartData} options={chartOptions} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default PieChart;
