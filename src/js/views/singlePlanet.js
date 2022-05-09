import React, { useEffect, useContext } from "react";
import { Container, CardGroup, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";

export const SinglePlanet = () => {
	const parametro = useParams();
	const { store, actions } = useContext(Context);
	
	return <>
		<div className="container">
					<img
						src="https://media.gq.com.mx/photos/5e2368ce73e13600083c0175/master/pass/nasa-planeta-tatooine-star-wars.jpg"
						width="400"
					/>
					<hr></hr>
					<h4>Name: {store.planets[parametro.index]?.name } </h4>
					<ul>
						<li>Population: {store.planets[parametro.index]?.population }</li>
						<li>Climate: {store.planets[parametro.index]?.climate }</li>
						<li>Terrain: {store.planets[parametro.index]?.terrain }</li>
						<li>Diameter: {store.planets[parametro.index]?.diameter }</li>
						</ul>
</div>
					
	</>

}

