import React, { useEffect, useRef } from 'react';
import { card } from '../assets';
import styles, { layout} from '../style';
import Button from './Button';
import Parallax from 'rellax';

function CardDeal() {
	// const rellaxRef = useRef(null);

	useEffect(() => {
		// new Parallax(rellaxRef.current, { // <---- Via useRef element
		// 	// speed: -10,
		// 	// center: false,
		// 	wrapper: ".parallax-wrapper-2",
		// 	// round: true,
		// 	// vertical: true,
		// 	// horizontal: false,
		// 	center: true
		// });
	},[]);

	return (
		<section className={layout.section}>
			<div className={`${layout.sectionInfo}`}>
				<h2 className={`${styles.heading2} mb-5`}>Find a better card deal <br className="sm:block hidden" />in few easy steps.</h2>
				<p className={`${styles.paragraph} max-w-[470px] mb-10`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ad quos nemo accusamus? Cum exercitationem laudantium dolores, excepturi blanditiis sapiente.</p>
				<Button text={"Get Started"} />
			</div>
			<div className={layout.sectionImg}>
				<img className="w-full h-full" src={card} alt="card" />
			</div>

		</section>
	)
}

export default CardDeal
