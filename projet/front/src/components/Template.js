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
							<Container id="chart">
								<div className="content">
									<ChartWithZoom/>
								</div>
							</Container>
                        </div>

                        <div className="col-xs-12 col-md-4">
							<Container id="piechart">
								<div className="content">
									<PieChart/>
								</div>
							</Container>
                        </div>

                        <div className="col-xs-12 col-md-4">
							<Container id="baton">
								<div className="content">
									<Baton/>
								</div>
							</Container>
                        </div>	

                        <div className="col-xs-12 col-md-4">
							<Container id="card">
								<div className="content">
									<Card/>
								</div>
							</Container>
                        </div>

                        <div className="col-xs-12 col-md-4">
							<Container id="top5">
								<div className="content">
									<Top5/>
								</div>
							</Container>
                        </div>

                        <div className="col-xs-12 col-md-4">
							<Container id="pendule">
								<div className="content">
									<Pendule/>
								</div>
							</Container>
                        </div>				

					</div>			
			  </BrowserRouter>	
			</div>
    );
  }
}

export default Template;