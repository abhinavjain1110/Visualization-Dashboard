import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

const Region = ({ data }) => {
  const regionCounts = {};
  data.forEach(item => {
    if (item.region in regionCounts) {
      regionCounts[item.region]++;
    } else {
      regionCounts[item.region] = 1;
    }
  });

  const chartData = {
    labels: Object.keys(regionCounts),
    datasets: [
      {
        data: Object.values(regionCounts),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
        ],
      },
    ],
  };

  return (
    <Card className="mt-4 mb-4 shadow-sm" style={{ borderRadius: '18px', padding: '24px', backgroundColor:'#ECECEB'}}>
      <Card.Body>
        <Card.Title>Region Distribution</Card.Title>
        <Doughnut data={chartData} />
      </Card.Body>
    </Card>
  );
};

export default Region;
