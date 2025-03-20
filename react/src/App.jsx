import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Hundar from "./pages/Hundar";
import Olivia from "./pages/Olivia";
import Intresse from "./pages/Intresse";
import Omoss from "./pages/Omoss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css"

function App() {
  return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/hundar" element={<Hundar />} />
				<Route path="/olivia" element={<Olivia />} />
				<Route path="/intresse" element={<Intresse />} />
				<Route path="/omoss" element={<Omoss />} />
			</Routes>
			<Footer />
		</Router>
  );
};

export default App;
