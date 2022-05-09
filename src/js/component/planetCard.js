import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	const planetStore = store.planet.filter(plt => plt.name == props.planet.name);
	useEffect(() => actions.planetDescription(props.planet.url), []);

	return (
		<Col>
			<Card>
				<Card.Img
					variant="top"
					src="https://media.gq.com.mx/photos/5e2368ce73e13600083c0175/master/pass/nasa-planeta-tatooine-star-wars.jpg"
				/>
				<Card.Body>
					<Card.Title><h3>{props.planet.name}</h3></Card.Title>
					
						<Card.Text>
							<p><b>Population:</b> {props.planet.population}</p>
							<p><b>Terrain:</b> {props.planet.terrain}</p>
						</Card.Text>
					
					<Link to={"/single_planet/" + props.i}>
						<Button variant="outline-success">Learn More</Button>
					</Link>
					<Button
						variant="outline-danger"
						className="likeBtn"
						onClick={() => actions.addItem(props.planet.name)}>
						&#9825;
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

PlanetCard.propTypes = {
	index: PropTypes.number,
	planet: PropTypes.object,
	id: PropTypes.number
};

export default PlanetCard;