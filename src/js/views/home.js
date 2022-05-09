import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CharCard from "../component/charCard";
import PlanetCard from "../component/planetCard";
import ShipCard from "../component/shipCard";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, action } = useContext(Context);

	return (
		<Container>
			<Row>
				<Col>
					<h2 className="heading">Personajes</h2>
				</Col>
			</Row>
			<Row>
				<div className="d-flex justify-content-between overFlow">
				{store.people? store.people.map((obj, i) => 
						<CharCard key={i} i={i} id={i++} character={obj} />)
						: ""}
				</div>
			</Row>
		<br></br>
		<br></br>
			<Row>
				<Col>
					<h2 className="heading">Planetas</h2>
				</Col>
			</Row>
			<Row>
				<div className="d-flex justify-content-between overFlow">
					{store.planets
						? store.planets.map((obj, i) => 
						<PlanetCard key={i} i={i} id={++i} planet={obj} />)
						: ""}
				</div>
			</Row>
		<br></br>
		
			<Row>
				<Col>
					<h2 className="heading">Naves espaciales</h2>
				</Col>
			</Row>
			<Row>
				<div className="d-flex justify-content-between overFlow">
					{store.starShips
						? store.starShips.map((obj, i) => <ShipCard key={i} i={i} id={++i} ship={obj} />)
						: ""}
				</div>
			</Row>
		</Container>
	);
};