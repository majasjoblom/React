import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hundar = () => {
    // Skapa state för varje hunds likes
    const [likes, setLikes] = useState({
        olivia: 0,
        flisan: 0,
        molly: 0,
        vivvi: 0,
		doris: 0,
		grynet: 0,
    });

    // Funktion för att öka likes
    const likeDog = (dog) => {
        setLikes({ ...likes, [dog]: likes[dog] + 1 });
    };

    return (
        <main>
            <h2>VÅRA HUNDAR</h2>

            <section className="puppy-section">
                <h3>Aktuella valpkullar</h3>
                <div className="puppy-box">
                    <Link to="/olivia">Olivia</Link>
                    <button onClick={() => likeDog("olivia")}>Gilla ({likes.olivia})</button>
                </div>
            </section>

            <section className="puppy-section">
                <h3>Valpkullar 2024</h3>
                <div className="puppy-box">
                    <span>Flisan</span>
                    <button onClick={() => likeDog("flisan")}>Gilla ({likes.flisan})</button>

                    <span>Molly</span>
                    <button onClick={() => likeDog("molly")}>Gilla ({likes.molly})</button>

                    <span>Vivvi</span>
                    <button onClick={() => likeDog("vivvi")}>Gilla ({likes.vivvi})</button>
                </div>
            </section>



			<section className="puppy-section">
				<h3>Valpkullar 2023</h3>
				<div className="puppy-box">
					<span>Doris</span>
					<button onClick={() => likeDog("doris")}>Gilla ({likes.doris})</button>

					<span>Vivvi</span>
					<button onClick={() => likeDog("vivvi")}>Gilla ({likes.vivvi})</button>
				</div>
			</section>


			<section className="puppy-section">
				<h3>Valpkullar 2022</h3>
				<div class="puppy-box">
					<span>Molly</span>
					<button onClick={() => likeDog("molly")}>Gilla ({likes.molly})</button>

					<span>Grynet</span>
					<button onClick={() => likeDog("grynet")}>Gilla ({likes.grynet})</button>

					<span>Flisan</span>
					<button onClick={() => likeDog("flisan")}>Gilla ({likes.flisan})</button>

					<span>Olivia</span>
					<button onClick={() => likeDog("olivia")}>Gilla ({likes.olivia})</button>
				</div>
			</section>
		<div className="spacer"></div>

        </main>
    );
};
export default Hundar;



