import React from 'react';
import { apple, bill, google } from '../assets';
import styles, { layout} from '../style';

function Billing() {
	return (
		<section id="product" className={layout.sectionReverse}>
			<div className={layout.sectionImgReverse}>
				<img className="w-full h-full relative z-[5]" src={bill} alt="billing" />

				<div className="absolute z-[3] left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient"></div>
				<div className="absolute z-0 left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient"></div>
			</div>
			<div className={layout.sectionInfo}>
				<h2 className={`${styles.heading2} mb-5`}>Easily control your <br className="sm:block hidden" />billing & invoicing.</h2>
				<p className={`${styles.paragraph} max-w-[470px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni modi ducimus ab velit harum eos quis, voluptatem repellendus iste, nisi, nemo perferendis maxime eligendi eius?</p>
				<div className="flex flex-row flex-wrap sm:st-10 gap-5 pt-6">
					<button className="w-[128px] h-[42px]"><img className="object-contain w-full h-full" src={apple} alt="ios store" /></button>
					<button className="w-[128px] h-[42px]"><img className="object-contain w-full h-full" src={google} alt="google play" /></button>
				</div>
			</div>
		</section>
	)
}

export default Billing
