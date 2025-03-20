import React from "react";
import { NavLink, Link } from "react-router-dom"; 

const Header = () => {
	return (
		<header>        
		<Link to="/" className="logo"><h1>ALFACHIS KENNEL</h1></Link>
		<nav>
			<ul>
				<li><NavLink to ="/hundar" className="nav-link">Våra hundar</NavLink></li>
				<li><NavLink to="/intresse" className="nav-link">Intresseanmälan</NavLink></li>
				<li><NavLink to="/omoss" className="nav-link">Om oss</NavLink></li>
				<li><NavLink to="#"><span className="search-icon">🔍</span></NavLink></li>
			</ul>
		</nav></header>
	)
}

export default Header;