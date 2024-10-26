import { useState } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/hero/Navbar";

function App() {
	const [coins, setCoins] = useState(0);

	const handleHeroBtn = () => {
		setCoins((prev) => prev + 1000000);
	};

	return (
		<>
			<Navbar coins={coins}></Navbar>
			<Hero handleHeroBtn={handleHeroBtn}></Hero>
		</>
	);
}

export default App;
