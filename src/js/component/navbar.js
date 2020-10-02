import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<button className="btn btn-primary" onClick={() => setIsOpen(!isOpen)}>
					Favorites
				</button>
				{/* //ternary condition displayed below (if dropdown is open block, else none) */}
				<div className={isOpen ? "d-block" : "d-none"}>
					{store.favorites.map((item, index) => {
						return (
							<li key={index}>
								{item}
								<button onClick={() => actions.deleteFavorite(index)}>
									<i className="fas fa-times" />
								</button>
							</li>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
