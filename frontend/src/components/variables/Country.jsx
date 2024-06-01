import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Container, Row, Col, Form } from "react-bootstrap";

const Country = ({ data }) => {
  const [selectedCountry, setSelectedCountry] = useState("United States of America");
  const [selectedPestle, setSelectedPestle] = useState("All");
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const countryData = data.filter(
      (entry) => entry.country ===selectedCountry
    );
    const filteredData = selectedPestle ==="All" ? countryData : countryData.filter(
      (entry) => entry.pestle ===selectedPestle
    );

    const sectors = {};
    filteredData.forEach((entry) => {
      if (!sectors[entry.sector]) {
        sectors[entry.sector] =[];
      }
      sectors[entry.sector].push(entry.intensity);
    });

    const sectorLabels = Object.keys(sectors);
    const sectorIntensities=sectorLabels.map(
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
  }, [selectedCountry, selectedPestle, data]);

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

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handlePestleChange = (event) => {
    setSelectedPestle(event.target.value);
  };

  return (
    <Container className="p-4 my-4 bg-light shadow" style={{ borderRadius: '8px', padding: '24px', backgroundColor: '#ECECEB', }}>
      <Row className="mb-4">
        <Col>
          <h2 className="text-black">Country Chart</h2>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Form.Select
            value={selectedCountry}
            onChange={handleCountryChange}
            aria-label="Select Country"
            className="mb-3"
          >
            {[...new Set(data.map(entry => entry.country))].map((country, index) => (
              <option key={index} value={country}>
                {country === "" ? "Not Known" : country}
              </option>
            ))}
          </Form.Select>
          <div className="text-bold">
            <h4>Pestle Filter</h4>
          <Form.Select
            value={selectedPestle}
            onChange={handlePestleChange}
            aria-label="Select PESTLE Factor"
          >
            <option value="All">All</option>
            {[...new Set(data.map(entry => entry.pestle))].map((pestle, index) => (
              <option key={index} value={pestle}>
                {pestle === "" ? "Not Known" : pestle}
              </option>
            ))}
          </Form.Select>
          <div className="mt-1">
              Select any one of the option...
          </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ height: "500px", width: "100%" }}>
            {chartData && <Bar data={chartData} options={chartOptions} />}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Country;
