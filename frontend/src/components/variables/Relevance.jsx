// likelihood,relevance,impact,intensity
import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

const Relevance = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Relevance',
        data: data.map(item => ({
          x: item.likelihood,
          y: item.impact,
          r: item.relevance * 5
        })),
        backgroundColor: 'rgba(79, 59, 169, 0.7)',
        borderColor: 'rgba(79, 59, 169, 1)',
        borderWidth: 2,
      },
      {
        label: 'Intensity',
        data: data.map(item => ({
          x: item.likelihood,
          y: item.impact,
          r: item.intensity,
        })),
        backgroundColor: 'rgba(144, 104, 190, 0.7)',
        borderColor: 'rgba(144, 104, 190, 1)',
        borderWidth: 2,
      }
    ]
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Likelihood',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Impact',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <Card className="mt-4 mb-4 shadow-sm" style={{ borderRadius: '18px', padding: '24px', backgroundColor: '#ECECEB' }}>
      <Card.Body>
        <Card.Title>Relevance Chart</Card.Title>
        <Bubble data={chartData} options={chartOptions} />
      </Card.Body>
    </Card>
  );
};

export default Relevance;
