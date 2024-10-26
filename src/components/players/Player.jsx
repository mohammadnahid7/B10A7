import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Player = ({
	name,
	country,
	position,
	batting_hand,
	price,
	image,
	handleBuying,
	coins,
	handleSelectedPlayers,
	selected,
}) => {
	const [choosen, setChoosen] = useState(false);

	const handleBtn = () => {
		const currCoin = coins - price;
		if (selected.length >= 6) {
			toast.error("Player Exceeded", {
				position: "top-right",
				theme: "dark",
			});
		} else if (currCoin > 0) {
			handleBuying(currCoin);
			setChoosen(true);
			handleSelectedPlayers({ name, position, price });
			toast.success("Successfully added player", {
				position: "top-right",
				theme: "dark",
			});
		} else {
			alert("Not Enough Coins");
			setChoosen(false);
		}
	};

	return (
		<div className="card bg-base-300 shadow-xl">
			<figure>
				<img src={image} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title text-white">{name}</h2>
				<div className="overflow-x-auto">
					<table className="table">
						<tbody>
							<tr>
								<th className="text-gray-300">Country</th>
								<td>{country}</td>
							</tr>
							<tr>
								<th className="text-gray-300">Position</th>
								<td>{position}</td>
							</tr>
							<tr>
								<th className="text-gray-300">Batting</th>
								<td>{batting_hand}</td>
							</tr>
							<tr>
								<th className="text-gray-300">Price</th>
								<td className="text-base font-bold text-secondary">{price}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="card-actions justify-end">
					<button data-price={price} className={`btn btn-primary ${choosen && "btn-disabled"}`} onClick={handleBtn}>
						{choosen ? "Choosen" : "Choose Player"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Player;
