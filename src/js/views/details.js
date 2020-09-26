import React, { useEffect, useState } from "react";

export const Details = props => {
	const [person, setPerson] = useState([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/people/" + props.match.params.id + "/")
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
				setCharacter(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	return (
		<>
			<div className="top-container">
				<p>{character.name}</p>
				<div className="image" />
				<div className="image description" />
			</div>
			<div className="bottom-container">
				<div className="description" />
			</div>
		</>
	);
};
