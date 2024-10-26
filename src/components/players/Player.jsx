import { useState } from "react";

const Player = ({ name, country, position, batting_hand, price, handleBuying, coins, handleSelectedPlayers }) => {
	const [choosen, setChoosen] = useState(false);

	const handleBtn = () => {
		const currCoin = coins - price;
		if (currCoin > 0) {
			handleBuying(currCoin);
			setChoosen(true);
			handleSelectedPlayers({ name, position, price });
		} else {
			alert("Not Enough Coins");
			setChoosen(false);
		}
	};

	return (
		<div className="card bg-base-300 shadow-xl">
			<figure>
				<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
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
