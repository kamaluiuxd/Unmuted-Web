import Header from "./component/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Portfolio from "./component/Pages/Portfolio";
import Projects from "./component/Pages/Projects";
import Contact from "./component/Pages/Contact";

function App() {
	return (
		<section>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="portfolio" element={<Portfolio />} />
				<Route path="projects" element={<Projects />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</section>
	);
}

export default App;
