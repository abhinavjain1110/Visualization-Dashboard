import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import 'chart.js/auto';

const Source = ({ data }) => {
  const [selectedSource, setSelectedSource] = useState(
    (data && data[0] && data[0].source) || "Unknown"
  );
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!data) return;

    const sourceData = data.filter(
      (entry) => entry.source === selectedSource
    );

    const sectors = {};
    sourceData.forEach((entry) => {
      if (!sectors[entry.sector]) {
        sectors[entry.sector] = [];
      }
      sectors[entry.sector].push(entry.intensity);
    });

    const sectorLabels = Object.keys(sectors);
    const sectorIntensities = sectorLabels.map(
      (sector) => sectors[sector]
    );

    setChartData({
      labels: sectorLabels,
      datasets: [
        {
          label: "Intensity",
          data: sectorIntensities,
          backgroundColor: "rgba(79, 59, 169, 0.7)",
        },
      ],
    });
  }, [selectedSource, data]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        grid: {
          color: "gray",
        },
      },
    },
  };

  const handleSourceChange = (event) => {
    setSelectedSource(event.target.value);
  };

  const uniqueSources = data ? [...new Set(data.map(entry => entry.source))] : [];

  return (
    <Container className="p-4 my-4 bg-light shadow" style={{ borderRadius: '8px', padding: '24px', backgroundColor:'#ECECEB',}}>
      <Row className="mb-4">
        <Col>
          <h2 className="text-black">Source Chart</h2>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Form.Select
            value={selectedSource}
            onChange={handleSourceChange}
            aria-label="Select Source"
          >
            {uniqueSources.map((source, index) => (
              <option key={index} value={source}>
                {source === "" ? "Not Known" : source}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ height: "600px", width: "100%" }}>
            {chartData && <Bar data={chartData} options={chartOptions} />}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Source;