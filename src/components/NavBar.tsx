import React, { useState } from 'react'
import { close, logo, menu } from "../assets";
import { companyInfo, navLinks } from '../constants';

function NavBar() {
	const [menuToggle, setMenuToggle] = useState(false);

	return (
		<nav className="w-full flex py-6 justify-between items-center navbar">
			<img className="w-[124px] h-[32px]" src={logo} alt={companyInfo.name} />

			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				{ navLinks.map((navItem, index) => (
					<li key={navItem.id} className={`font-poppins font-normal cursor-poiner text-white text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} hover:text-secondary transition-color duration-300`}>
						<a href={`#${navItem.id}`}>{navItem.title}</a>
					</li>
				)) }
			</ul>

			<div className="sm:hidden flex flex-1 justify-end items-center">
				<button onClick={() => setMenuToggle((prev) => !prev)}>
					<img className="w-[28px] h-[28px] object-contain" src={ menuToggle ? close : menu } alt="menu" />
				</button>
				<div className={`${menuToggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
					<ul className="list-none flex flex-col justify-end items-center flex-1">
						{ navLinks.map((navItem, index) => (
							<li key={navItem.id} className={`font-poppins font-normal cursor-poiner text-white text-[16px] ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} `}>
								<a href={`#${navItem.id}`}>{navItem.title}</a>
							</li>
						)) }
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
