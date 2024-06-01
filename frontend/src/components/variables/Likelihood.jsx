import React from "react";
import { Radar } from "react-chartjs-2";
import { Card } from "react-bootstrap";

const Likelihood = ({ data }) => {
  const unique = [...new Set(data.map(entry => entry.country))];
  const chartData = {
    labels:unique,
    datasets: [
      {
        label: "Likelihood",
        data: data.map((entry) => entry.likelihood),
        backgroundColor: "#ECECEB",
        borderColor: "rgba(79, 59, 169, 1)",
        borderWidth: 2,
        pointBackgroundColor: "white",
        pointBorderColor: "rgba(79, 59, 169, 1)",
        
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5,
        stepSize: 1,
      },
      
    },
  };

  return (
    <Card className="mt-4 mb-4 shadow-sm" style={{ borderRadius: "20px", padding: "24px", maxHeight: "800px", overflow: "hidden", backgroundColor:'#ECECEB'}}>
      <Card.Body>
        <Card.Title>Likelihood Chart</Card.Title>
        <div style={{ height: "500px" }}>
          <Radar data={chartData} options={chartOptions} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Likelihood;
