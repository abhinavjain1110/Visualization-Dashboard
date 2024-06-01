import React, { useState, useEffect } from "react";
import axios from "axios";
import Intensity from "./Intensity";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import NavBar from "./NavBar";
import Region from "./Region";
import { Container, Row, Col } from "react-bootstrap";
import Relevance from "./Relevance";
import Topics from "./Topics";
import PieChart from "./Sector";
import Country from "./Country";
import Likelihood from "./Likelihood";
import Footer from "./Footer";
import Source from "./Source";

Chart.register(CategoryScale);

const Front = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "http://localhost:5000";
      try {
        const response = await axios.get(`${API_URL}/visual/getdata`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <>
      <NavBar />
      <Container className="mt-4">
      <Country data={data} />
        <Intensity data={data} />
        <Relevance data={data} />
        <Source data={data}/>
        <Row className="mt-4">
          <Col md={6} className="mb-4">
            <div className="p-4 bg-light rounded shadow-sm">
              <Region data={data} />
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="p-4 bg-light rounded shadow-sm">
              <Topics data={data} />
            </div>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col md={6} className="mb-4">
            <div className="p-4 bg-light rounded shadow-sm">
              <PieChart data={data} />
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="p-4 bg-light rounded shadow-sm">
              <Likelihood data={data} />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Front;

