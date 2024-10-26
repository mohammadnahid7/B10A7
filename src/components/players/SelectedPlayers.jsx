const SelectedPlayers = ({ name, position, price, handleDeletePlayer }) => {
	return (
		<div className="bg-base-300 rounded-2xl p-5 flex mt-6 items-center">
			<img src="./src/assets/logo-footer.png" alt="" className="w-16 h-16 bg-base-100 rounded-lg" />
			<div className="ml-6 flex-1">
				<h3 className="text-xl font-bold text-white">{name}</h3>
				<p>{position}</p>
				<span className="font-bold text-secondary">{price}</span>
			</div>
			<button
				className="btn btn-circle"
				onClick={() => {
					handleDeletePlayer(name);
				}}>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
	);
};

export default SelectedPlayers;
