import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Characters } from "../component/Characters";
import { Planets } from "../component/Planets";
import { useEffect } from "react";

export const Home = () => {
	const [characters, setCharacters] = useState(["Luke Skywalker", "CP3PO", "Darth Vader"]);
	const [planets, setPlanets] = useState(["Planet 1", "Planet 2", "Planet 3"]);

	useEffect(() => {
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
				setPlanets(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});

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
				setCharacters(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	return (
		<div>
			{characters.map((item, index) => {
				return <Characters key={index} character={item} index={index} />;
			})}
			{planets.map((item, index) => {
				return <Planets key={index} planet={item} index={index} />;
			})}
		</div>
	);
};
