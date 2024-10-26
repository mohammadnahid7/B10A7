const Navbar = ({ coins }) => {
	return (
		<div className="bg-base-200 fixed left-0 top-0 w-screen z-[100]">
			<div className="container mx-auto navbar h-24">
				<div className="navbar-start">
					<a className="">
						<img src="../SquadBuilder.png" alt="" />
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a>Home</a>
						</li>
						<li>
							<a>Fixtures</a>
						</li>
						<li>
							<a>Team</a>
						</li>
						<li>
							<a>Schedule</a>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					<span className="text-lg text-warning font-bold">{coins} Coins</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
