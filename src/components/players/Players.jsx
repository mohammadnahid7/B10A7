import { useEffect, useState } from "react";
import Player from "./Player";

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
			setIsActive(true);
		} else {
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
				<div className="players mt-20 grid grid-cols-4 gap-4">
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
				<div className="selected ">{selected.map}</div>
			</div>
		</div>
	);
};

export default Players;
