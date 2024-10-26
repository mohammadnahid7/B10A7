const Navbar = () => {
	return (
		<div className="bg-base-200 fixed left-0 top-0 w-full">
			<div className="container mx-auto navbar h-24">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
					<a className="">
						<img src="./SquadBuilder.png" alt="" />
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
					<a className="">0 Coins</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
