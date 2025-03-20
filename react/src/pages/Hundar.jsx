import React from "react";
import { Link } from "react-router-dom"; 


const Hundar = () => {
	return( 
		<main>
		<h2>VÅRA HUNDAR</h2>

		<section className="puppy-section">
			<h3>Aktuella valpkullar</h3>
			<div className="puppy-box">
				<Link to="/olivia">Olivia</Link>
			</div>
		</section>

		<section className="puppy-section">
			<h3>Valpkullar 2024</h3>
			<div class="puppy-box">
				<span>Flisan</span>
				<span>Molly</span>
				<span>Vivvi</span>
			</div>
		</section>

		<section className="puppy-section">
			<h3>Valpkullar 2023</h3>
			<div class="puppy-box">
				<span>Doris</span>
				<span>Vivvi</span>
			</div>
		</section>

		<section className="puppy-section">
			<h3>Valpkullar 2022</h3>
			<div class="puppy-box">
				<span>Molly</span>
				<span>Grynet</span>
				<span>Flisan</span>
				<span>Olivia</span>
			</div>
		</section>
		<div className="spacer"></div>
		</main>
	);
}

export default Hundar;