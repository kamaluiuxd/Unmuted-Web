import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/home/logo.png";
const Header = () => {
	const NavLinks = [
		{ id: 1, link: "Home" },
		{ id: 2, link: "About" },
		{ id: 3, link: "Portfolio" },
		{ id: 4, link: "Projects" },
		{ id: 5, link: "Contact" },
	];
	return (
		<section className=" container-fluid  bg-slate-800">
			<section className="py-2 flex items-center text-white justify-around">
				<div>
					<img src={logo} alt="unmuted-home" />
				</div>
				<ul className="hidden md:flex items-center">
					{NavLinks.map(({ id, link }) => (
						<li key={id} className="mr-10 cursor-pointer">
							{link}
						</li>
					))}
					<FaFacebookSquare
						size={40}
						className="cursor-pointer px-2 text-white-100 hover:scale-150 duration-200"
					/>
					<FaTwitterSquare
						size={40}
						className="cursor-pointer px-2 text-white-100 hover:scale-150 duration-200"
					/>
					<FaLinkedin
						size={40}
						className="cursor-pointer px-2 text-white-100 hover:scale-150 duration-200"
					/>
					<button
						className="mx-10 px-5 py-3 rounded cursor-pointer
                    bg-gradient-to-br from-cyan-500 to-blue-400 hover:scale-105 duration-300"
					>
						Enquiry Now
					</button>
				</ul>
			</section>
		</section>
	);
};

export default Header;
