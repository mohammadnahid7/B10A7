import { useEffect, useState } from "react";
import Player from "./Player";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({ handleBuying, coins }) => {
	const [isActive, setIsActive] = useState(true);
	const [players, setPlayers] = useState([]);
	const [selected, setSelected] = useState([]);

	useEffect(() => {
		fetch("players.json")
			.then((res) => res.json())
			.then((data) => {
				setPlayers(data.players);
			});
	}, []);
	const handleBtnToggle = ({ target }) => {
		if (target.className.includes("available")) {
			document.getElementById("players").classList.remove("hidden");
			document.getElementById("selected").classList.add("hidden");
			setIsActive(true);
		} else {
			document.getElementById("players").classList.add("hidden");
			document.getElementById("selected").classList.remove("hidden");
			setIsActive(false);
		}
	};
	const handleSelectedPlayers = (player) => {
		setSelected([...selected, player]);
	};

	return (
		<div className="w-full py-24">
			<div className="container mx-auto">
				<div className="flex justify-between">
					<h2 className="text-3xl font-bold text-white">Available Players</h2>
					<div className="join" onClick={handleBtnToggle}>
						<button className={`available btn ${isActive ? "btn-primary" : "btn-neutral"} join-item text-base`}>
							Available
						</button>
						<button className={`btn ${!isActive ? "btn-primary" : "btn-neutral"} join-item text-base`}>
							Selected ({selected.length})
						</button>
					</div>
				</div>
				<div id="players" className="mt-20 grid grid-cols-4 gap-4">
					{players.map((p) => (
						<Player
							key={p.name}
							name={p.name}
							country={p.country}
							position={p.position}
							batting_hand={p.batting_hand}
							price={p.price}
							handleBuying={handleBuying}
							coins={coins}
							handleSelectedPlayers={handleSelectedPlayers}></Player>
					))}
				</div>
				<div id="selected" className="hidden">
					{selected.map((p) => (
						<SelectedPlayers key={p.name} name={p.name} position={p.position} price={p.price}></SelectedPlayers>
					))}
				</div>
			</div>
		</div>
	);
};

export default Players;
