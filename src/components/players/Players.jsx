import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
		if (selected.length >= 6) {
			toast.error("Maximum Player added", {
				position: "top-right",
				theme: "dark",
			});
		} else {
			setSelected([...selected, player]);
		}
	};

	const handleDeletePlayer = (name) => {
		const updatedPlayers = selected.filter((player) => player.name !== name);
		setSelected([...updatedPlayers]);
		toast.error("Deleted player", {
			position: "top-right",
			theme: "dark",
		});
	};
	return (
		<div className="w-full py-24">
			<div className="container mx-auto mb-96">
				<div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap">
					<h2 className="text-3xl font-bold text-white my-4 w-full text-center md:text-start">
						{isActive ? "Available Players" : `Selected Player ${selected.length}/6`}
					</h2>
					<div className="join" onClick={handleBtnToggle}>
						<button className={`available btn ${isActive ? "btn-primary" : "btn-neutral"} join-item text-base`}>
							Available
						</button>
						<button className={`btn ${!isActive ? "btn-primary" : "btn-neutral"} join-item text-base`}>
							Selected ({selected.length})
						</button>
					</div>
				</div>
				<div id="players" className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{players.map((p) => (
						<Player
							key={p.id}
							name={p.name}
							country={p.country}
							position={p.position}
							batting_hand={p.batting_hand}
							price={p.price}
							image={p.image}
							handleBuying={handleBuying}
							coins={coins}
							handleSelectedPlayers={handleSelectedPlayers}
							selected={selected}></Player>
					))}
				</div>
				<div id="selected" className="hidden" onClick={handleBtnToggle}>
					{selected.map((p) => (
						<SelectedPlayers
							key={p.name}
							name={p.name}
							position={p.position}
							price={p.price}
							handleDeletePlayer={handleDeletePlayer}></SelectedPlayers>
					))}
					<button className="available btn btn-primary text-base mt-10">Add More Player</button>
				</div>
			</div>
		</div>
	);
};

export default Players;
