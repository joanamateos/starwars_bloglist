import React, { useEffect, useContext } from "react";
import { Container, CardGroup, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";

export const Single = () => {
	const parametro = useParams();
	const { store, actions } = useContext(Context);
	
	return <>
		<div className="container">
					<img
						src="https://www.cinemascomics.com/wp-content/uploads/2020/12/joven-luke-skywalker.jpg"
						width="400"
					/>
					<hr></hr>
					<h4>Name: {store.people[parametro.index]?.name } </h4>
					<ul>
						<li>Gender: {store.people[parametro.index]?.gender }</li>
						<li>Hair color: {store.people[parametro.index]?.hair_color }</li>
						<li>Skin color: {store.people[parametro.index]?.skin_color }</li>
						<li>Eye color: {store.people[parametro.index]?.eye_color }</li>
						</ul>
</div>
					
	</>

}

