import React from 'react'
import styles from "../style";
import { arrowUp } from "../assets";

function GetStarted() {
	return (
		<button className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer group`}>
			<div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full group-hover:bg-secondary transition-bg duration-300`}>
				<div className={`${styles.flexStart} flex-row`}>
					<p className="capitalize font-poppins font-medium text-[18px] leading-[23px] mr-2"><span className="text-gradient group-hover:bg-none  group-hover:bg-white text-gradient transition-bg duration-300">get</span>
					</p>
					<img className="w-[23px] h-[23px] object-contain" src={arrowUp} alt="arrow" />
				</div>
				<p className="capitalize font-poppins font-medium text-[18px] leading-[23px] "><span className="group-hover:bg-none  group-hover:bg-white text-gradient transition-bg duration-300">started</span></p>
			</div>
		</button>
	)
}
// group-hover:bg-secondaryTransparent
export default GetStarted
