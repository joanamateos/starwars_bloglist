import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const CharCard = props => {
	const { store, actions } = useContext(Context);
	const charStore = store.character.filter(char => char.name == props.character.name);
	useEffect(() => actions.charDescription(props.character.url), []);

	return (
		<Col>
			<Card>
				<Card.Img
					variant="top"
					src="https://sm.ign.com/t/ign_es/screenshot/default/obiwankenobi-1617045442937_mw7k.1280.jpg"
					width="200"
				/>
				<Card.Body>
					<Card.Title><h3>{props.character.name}</h3></Card.Title>
					
						<Card.Text>
							<p><b>Gender:</b> {props.character.gender}</p>
							<p><b>Hair Color:</b> {props.character.hair_color}</p>
							<p><b>Eye Color:</b> {props.character.eye_color}</p>
						</Card.Text>
					
					<Link to={"/single/" + props.i}>
						<Button variant="outline-success">Learn More</Button>
					</Link>
					<Button
						variant="outline-danger"
						className="likeBtn"
						onClick={() => actions.addItem(props.character.name)}>
						&#9825;
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

CharCard.propTypes = {
	index: PropTypes.number,
	character: PropTypes.object,
	id: PropTypes.number
};

export default CharCard;