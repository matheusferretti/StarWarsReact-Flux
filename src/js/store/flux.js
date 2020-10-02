import { array } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: ["Jedi 1", "Jedi 2"],
			characters: ["Luke Skywalker", "CP3P0", "Darth Vader"],
			planets: ["Tatooiine", "Planet Boom", "Another Weird Planet"]
		},
		actions: {
			// Use getActions to call a function within a fuction
			deleteFavorite: index => {
				const newStore = getStore();
				var newFavorites = newStore.favorites.filter((item, ind) => index !== ind);
				//replacing favorites in line 4 w new favorites in line 14
				setStore({ favorites: newFavorites });
				//spreading, ex: ({...favorites: newFavorites}), allows you to keep original favorites while adding stuff to that array
			},
			addFavorite: name => {
				const newStore = getStore();
				newStore.favorites.push(name);
				setStore(newStore);
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						// Do stuff with the JSON
						console.log("responseAsJson", responseAsJson);
						setStore({ characters: responseAsJson.results });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						// Do stuff with the JSON
						console.log("responseAsJson", responseAsJson);
						setStore({ planets: responseAsJson.results });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
