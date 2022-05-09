const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [], // toda la información de los personajes
			character: [], // información de un personaje
			planets: [], // toda la información de los planetas
			planet: [], // información de un planeta
			starShips: [], // toda la información de las naves espaciales
			starShip: [], // información de una nave espacial
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a function

			addItem: item => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, { item }] });
			},

			removeItem: id => {
				let value = document.getElementById(id).title;
				const store = getStore();
				setStore({ favorites: store.favorites.filter(fav => fav.item !== value) });
			},

//el fetch que llama a la api para conseguir los personajes
getPeopleData: async () => {
	const settings = {
		method: "GET",
		headers: { "Content-Type": "application/json" }
	};

	const request = await fetch(`https://swapi.dev/api/people`, settings);
	const json = await request.json();
	const data = json;
	setStore({ people: data.results });
},


// el fetch que llama a la API para conseguir la descrip
			getCharacterDescription: async url => {
				const store = getStore();
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(url, settings);
				const json = await request.json();
				const data = json;
				setStore({ character: [...store.character, data.result.properties] });
			},

			charDescription: url => {
				getActions().getCharacterDescription(url);
			},

	//el fetch que llama a la api para conseguir los planetas		
			getPlanetsData: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://swapi.dev/api/planets`, settings);
				const json = await request.json();
				const data = json;
				setStore({ planets: data.results });
			},

			getPlanetDescription: async url => {
				const store = getStore();
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(url, settings);
				const json = await request.json();
				const data = json;
				setStore({ planet: [...store.planet, data.result.properties] });
			},

			planetDescription: url => {
				getActions().getPlanetDescription(url);
			},

//el fetch que llama a la api para conseguir las naves

			getStarShipsData: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://swapi.dev/api/starships`, settings);
				const json = await request.json();
				const data = json;
				setStore({ starShips: data.results });
			},

			getStarShipDescription: async url => {
				const store = getStore();
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(url, settings);
				const json = await request.json();
				const data = json;
				setStore({ starShip: [...store.starShip, data.result.properties] });
			},

			starShipDescription: url => {
				getActions().getStarShipDescription(url);
			}
		}
	};
};

export default getState;