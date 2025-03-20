import React from "react";

const Intresse = () => {
	return (
		<main>
		<h2>INTRESSEANMÄLAN</h2>
        <p>Här kan du kontakta oss om du är intresserad av någon av våra valpar, du kan också skriva andra frågor och funderingar!</p>
		
        <form>
            <label>Namn</label>
            <input name="name" placeholder="Skriv ditt för- och efternamn här" />
            
            <div class="form-group">
                <div>
                    <label>Telefon</label>
                    <input name="phone" placeholder="Ditt telefonnummer" />
                </div>
                <div>
                    <label>E-post</label>
                    <input name="email" placeholder="Din e-postadress" />
                </div>
            </div>
            
            <label>Meddelande</label>
            <textarea name="message" rows="5" placeholder="Vänligen skriv ett meddelande"></textarea>
            
            <button type="submit">Skicka</button>
        </form>
		</main>
	)
}

export default Intresse;