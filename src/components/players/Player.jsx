// "name": "Rohit Sharma",
// "country": "India",
// "position": "Batsman",
// "batting_hand": "Right-hand",
// "price": 45000

const Player = ({ name, country, position, batting_hand, price }) => {
	console.log(name, country, position, batting_hand, price);
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
					<button className="btn btn-primary">Choose Player</button>
				</div>
			</div>
		</div>
	);
};

export default Player;
