import React from 'react'
import styles from "../style";
import { arrowUp } from "../assets";

function GetStarted() {
	return (
		<button className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
			<div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
				<div className={`${styles.flexStart} flex-row`}>
					<p className="capitalize font-poppins font-medium text-[18px] leading-[23px] mr-2"><span className="text-gradient">get</span>
					</p>
					<img className="w-[23px] h-[23px] object-contain" src={arrowUp} alt="arrow" />
				</div>
				<p className="capitalize font-poppins font-medium text-[18px] leading-[23px]"><span className="text-gradient">started</span></p>
			</div>
		</button>
	)
}

export default GetStarted
