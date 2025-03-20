import React from "react";
import maudeImg from "../bilder/maude.png";


const Omoss = () => {
	return (
		<main>
			<section className="about-container">
            <div className="about-text">
                <h2>OM OSS</h2>
                <p>
                    Det är vi Maude Berglund och Sune Berglund som står bakom Alfachis kennel.
                    Vi är en seriös kennel som föder upp några kullar om året. Vår första valpkull föddes 2010,
                    vilket är mer än 15 år sedan. Vår målsättning är att föda upp friska och sunda hundar
                    med god exteriör och bra temperament.
				</p>				
            </div>
            <div className="about-image">
                <img src={maudeImg} alt="Bild på Maude och Sune Berglund" />
            </div>
        </section>
		<div className="spacer"></div>
		</main>
	)
}

export default Omoss;