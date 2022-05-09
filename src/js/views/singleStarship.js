import React, { useEffect, useContext } from "react";
import { Container, CardGroup, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";

export const SingleStarship = () => {
	const parametro = useParams();
	const { store, actions } = useContext(Context);
	
	return <>
		<div className="container">
					<img
						src="https://depor.com/resizer/x6dqEpdBYQOAmQkdDhgpgXrSqFE=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/22PDHLTSWRFNXOSH53A3Y57EJI.jpg"
						width="400"
					/>
					<hr></hr>
					<h4>Name: {store.starShips[parametro.index]?.name } </h4>
					<ul>
						<li>Model: {store.starShips[parametro.index]?.model }</li>
						<li>Crew: {store.starShips[parametro.index]?.crew }</li>
						<li>Manufacturer: {store.starShips[parametro.index]?.manufacturer }</li>
						
						</ul>
</div>
					
	</>

}