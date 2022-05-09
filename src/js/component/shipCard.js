import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/single.css";

const ShipCard = props => {
	const { store, actions } = useContext(Context);
	const shipStore = store.starShip.filter(ship => ship.name == props.ship.name);
	useEffect(() => actions.starShipDescription(props.ship.url), []);

	return (
		<Col>
			<Card>
				<Card.Img
					variant="top"
					src="https://depor.com/resizer/D_jYjsqlqY-Ne7tG5zFF0VZ4jUY=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/22PDHLTSWRFNXOSH53A3Y57EJI.jpg"
				/>
				<Card.Body>
					<Card.Title><h3>{props.ship.name}</h3></Card.Title>
					
						<Card.Text>
							<p><b>Model:</b> {props.ship.model}</p>
							<p><b>Crew:</b> {props.ship.crew}</p>
							<p><b>Manufacturer:</b> {props.ship.manufacturer}</p>
						</Card.Text>
					
					<Link to={"/single_starship/" + props.i}>
						<Button variant="outline-success">Learn More</Button>
					</Link>
					<Button
						variant="outline-danger"
						className="likeBtn"
						onClick={() => actions.addItem(props.ship.name)}>
						&#9825;
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

ShipCard.propTypes = {
	index: PropTypes.number,
	ship: PropTypes.object,
	id: PropTypes.number
};

export default ShipCard;