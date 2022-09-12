import { useState } from "react";
import { Link } from "react-router-dom";
//import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaBars } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
//import logo from "../../assets/home/logo.png";

///------------------------------------------------------------------------///
const Header = () => {
	const [nav, setNav] = useState(true);

	return (
		<section className=" container-fluid  bg-slate-800">
			<section className="py-5 flex items-center text-white justify-between">
				<div>
					<h1 className="w-full text-2xl font-bold ml-10">
						UNMUTED <span className="text-red-400">WEB.</span>
					</h1>
				</div>
				<ul className="hidden md:flex items-center space-x-3">
					<Link to="/">Home</Link>
					<Link to="about">About</Link>
					<Link to="portfolio">Portfolio</Link>
					<Link to="projects">Projects</Link>
					<Link to="contact">Contact</Link>
					<button
						className="mr-10 px-5 py-3 rounded cursor-pointer
                    bg-gradient-to-br from-cyan-500 to-blue-400 hover:scale-105 duration-300"
					>
						Let's Talk
					</button>
				</ul>

				<div className="pr-5 block md:hidden" onClick={() => setNav(!nav)}>
					{!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
				</div>

				<div className={!nav ? "fixed left-0 top-0 bg-slate-900 w-[70%] h-full ease-in-out duration-500" : "fixed left-[-100%]"}>
					<h1 className="w-full text-2xl font-bold p-4 ">
						UNMUTED <span className="text-red-400">WEB.</span>
					</h1>
					<ul className="pt-5 flex flex-col space-y-10 m-5">
						<Link to="/">Home</Link>
						<Link to="about">About</Link>
						<Link to="portfolio">Portfolio</Link>
						<Link to="projects">Projects</Link>
						<Link to="contact">Contact</Link>
					</ul>
				</div>
			</section>
		</section>
	);
};

export default Header;
