import React from "react";
import oliviaImg from "../bilder/olivia.png";
import pappaImg from "../bilder/pappa.png";
import hugoImg from "../bilder/hugo.png";
import heroImg from "../bilder/hero.png";
import harpoImg from "../bilder/harpo.png";
import honeyImg from "../bilder/honey.png";
import hollieImg from "../bilder/hollie.png";
import videoValpar from "../bilder/video_valpar.mp4"; 


const Olivia = () => {
	return(
		<main>
			<h2>OLIVIAS KULL</h2>
        
        <div className="parents">
            <div className="parent">
                <img src={oliviaImg} alt="Mamma - Alfachis Olivia" />
                <p>Mamma - Alfachis Olivia</p>
            </div>
            <div className="parent">
                <img src={pappaImg} alt="Pappa - Tiekawis Mums-Mums 'Prinz'" />
                <p>Pappa - Tiekawis Mums-Mums 'Prinz'</p>
            </div>
        </div>

		<div className="text-container">
        <p>Från fina föräldrar med mycket dragvilja. Pappan är våran bästa kommandoledare och mamman går gärna i lead med honom. Båda föräldrarna är otroligt mysiga hundar som gärna är inne och myser med oss i soffan. Vi använder Embark för att göra DNA-test på våra hundar inför parning. Valparna är uppfödda i huset och är vana med vardagens alla ljud.
			<br /><br />
			Kullen född: 16 december 2024
			<br /><br />
			Levereansklara: helgen 22-23 feb 2025
			<br /><br />
			Pris per valp: 8 000 kr</p>
		</div>        
        <h4>Valpar</h4>
        <div className="puppies">
            <div className="puppy"><img src={hugoImg} alt="Hugo (fem veckor)" /><p>Hugo (fem veckor)</p></div>
            <div className="puppy"><img src={heroImg} alt="Hero (fem veckor)" /><p>Hero (fem veckor)</p></div>
            <div className="puppy"><img src={harpoImg} alt="Harpo (fem veckor)" /><p>Harpo (fem veckor)</p></div>
            <div className="puppy"><img src={honeyImg} alt="Honey (fem veckor)" /><p>Honey (fem veckor)</p></div>
            <div className="puppy"><img src={hollieImg} alt="Hollie (fem veckor)" /><p>Hollie (fem veckor)</p></div>
        </div>        
        <h4>Videoklipp</h4>
        <video width="500" height="auto" controls>
            <source src={videoValpar} alt="Mamma Olivia som diar hennes nyfödda valpar" />
		</video>
        <p>Mamma Olivia som diar hennes nyfödda valpar.</p>

		<div className="spacer"></div>

		</main>
	)
}

export default Olivia;