import { useState } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/hero/Navbar";
import Players from "./components/players/Players";

function App() {
	const [coins, setCoins] = useState(0);

	const handleHeroBtn = () => {
		setCoins((prev) => prev + 10000);
	};
	const handleBuying = (currCoins) => {
		// setCoins((prev) => {
		// 	const currCoin = prev - price;
		// 	if (currCoin > 0) return currCoin;
		// 	else return prev;
		// });
		setCoins(currCoins);
	};

	return (
		<>
			<Navbar coins={coins}></Navbar>
			<Hero handleHeroBtn={handleHeroBtn}></Hero>
			<Players handleBuying={handleBuying} coins={coins}></Players>
		</>
	);
}

export default App;
