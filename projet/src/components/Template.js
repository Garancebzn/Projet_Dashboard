import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import {
  Route,
  BrowserRouter
} from "react-router-dom";

import ChartWithZoom from "./overview/Chart with Zoom.js";
import PieChart from "./overview/Pie Chart.js";
import Baton from "./overview/Baton.js";
import Card from "./overview/card.js";
import Top5 from "./overview/top5.js";
import Pendule from "./overview/pendule.js";

import './Template.css';



class Template extends Component {
  
  render() {    
    return (
		<div> 
				  
			  <BrowserRouter>		  
                    <div className="row">
                        <div className="col-xs-12 col-md-4">
						<Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container id="chart">
								<div className="content">
									<Route path="/chart-zoom-pan" component={ChartWithZoom}/>
									
								</div>
							</Container>
						</Col>
                        </div>

                        <div className="col-xs-12 col-md-4">
                        <Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container id="piechart">
								<div className="content">
									<PieChart/>
								</div>
							</Container>
						</Col>
                        </div>

                        <div className="col-xs-12 col-md-4">
                        <Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container id="baton">
								<div className="content">
									<Baton/>
								</div>
							</Container>
						</Col>	
                        </div>	

                        <div className="col-xs-12 col-md-4">
                        <Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container id="card">
								<div className="content">
									<Card/>
								</div>
							</Container>
						</Col>	
                        </div>

                        <div className="col-xs-12 col-md-4">
                        <Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container id="top5">
								<div className="content">
									<Top5/>
								</div>
							</Container>
						</Col>	
                        </div>

                        <div className="col-xs-12 col-md-4">
                        <Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container id="top5">
								<div className="content">
									<Pendule/>
								</div>
							</Container>
						</Col>	
                        </div>				

					</div>			
			  </BrowserRouter>	
			</div>
    );
  }
}

export default Template;