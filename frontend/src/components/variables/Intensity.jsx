import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Card, Form, Row, Col } from 'react-bootstrap';


const Intensity = ({ data }) => {
  const allYears = [...new Set(data.map(item => item.start_year))].sort((a, b) => a - b);
  const [startYear, setStartYear] = useState(allYears[0]);
  const [endYear, setEndYear] = useState(allYears[allYears.length - 1]);

  const filteredData = data.filter(item => item.start_year >= startYear && item.start_year <= endYear);
  const intensityData = filteredData.map(item => item.intensity);
  const years = filteredData.map(item => item.start_year);

  const getColor = (value) => {
    const colors = [
      '#84C7F2', 
      '#265B8B', 
      '#7F00FF',
      '#0B1C48', 
    ];
    const threshold = Math.max(...intensityData) / 4;
    if (value < threshold) {
      return colors[0];
    } else if (value < threshold * 2) {
      return colors[1];
    } else if (value < threshold * 3) {
      return colors[2];
    } else {
      return colors[3];
    }
  };

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Intensity',
        backgroundColor: intensityData.map((value) => getColor(value)),
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: intensityData,
        barThickness: 20,
      },
    ],
  };

  const chartOptions = {
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
    },
    plugins: {
      title:{
        display:true,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        cornerRadius: 5,
        displayColors: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'start',
        offset: -20,
        font: {
          size: 12,
          weight: 'bold',
        },
        formatter: (value) => value + '%',
        shadowBlur: 10,
        shadowColor: 'white',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Roboto',
            size: 12,
            weight: 'bold',
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Roboto',
            size: 14,
            weight: 'bold',
          },
          callback: (value) => value + '%',
        },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
      mode: 'progressive',
    },
  };

  return (
    <Card className="mt-4 mb-4 shadow-sm" style={{ borderRadius: '8px', padding: '24px', backgroundColor: '#ECECEB' }}>
      <Card.Body>
        <Card.Title>Intensity Chart</Card.Title>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="startYear">
                <Form.Label>Start Year</Form.Label>
                <Form.Select
                  value={startYear}
                  onChange={(e) => setStartYear(parseInt(e.target.value))}
                >
                  {allYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="endYear">
                <Form.Label>End Year</Form.Label>
                <Form.Select
                  value={endYear}
                  onChange={(e) => setEndYear(parseInt(e.target.value))}
                >
                  {allYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <Bar data={chartData} options={chartOptions} plugins={[ChartDataLabels]} />
      </Card.Body>
    </Card>
  );
};

export default Intensity;
