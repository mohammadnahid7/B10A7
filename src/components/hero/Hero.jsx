const Hero = ({ handleHeroBtn }) => {
	return (
		<>
			<div
				className="hero container mx-auto rounded-3xl mt-40 p-36"
				style={{
					backgroundImage: "url(./src/assets/bg-shadow.png)",
				}}>
				<div className="hero-content text-neutral-content text-center">
					<div className="max-w-6xl">
						<img src="./src/assets/banner-main.png" alt="" className="mx-auto mb-7" />
						<h1 className="mb-7 text-5xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
						<p className="mb-7 text-2xl text-white">Beyond bounderies Beyond Limits</p>
						<button className="btn btn-primary" onClick={handleHeroBtn}>
							Claim Free Coins
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
